import { getStore } from "@netlify/blobs";
import type { Context, Config } from "@netlify/functions";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx_4tRZ8h0oOVA3_pAi9HwaJf6_1gZkA6nMF901wn1bB8kll7v5Fc6_V-ABXNpDwe1y/exec";

const CACHE_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export default async (req: Request, context: Context) => {
  const store = getStore("happy-tails-cache");

  // Check cache
  try {
    const cached = await store.getWithMetadata("puppies");
    console.log("Cache check:", cached ? `found (metadata: ${JSON.stringify(cached.metadata)})` : "miss");

    if (cached && cached.data) {
      const cachedAt = Number(cached.metadata?.cachedAt);
      const age = Date.now() - cachedAt;
      console.log(`Cache age: ${Math.round(age / 1000)}s, TTL: ${CACHE_TTL_MS / 1000}s, valid: ${!isNaN(cachedAt) && age < CACHE_TTL_MS}`);

      if (!isNaN(cachedAt) && age < CACHE_TTL_MS) {
        console.log("Serving from cache");
        return new Response(cached.data as string, {
          headers: {
            "Content-Type": "application/json",
            "X-Cache": "HIT",
            "X-Cache-Age": String(Math.round(age / 1000)),
          },
        });
      }
    }
  } catch (blobErr) {
    console.error("Blob read error:", blobErr);
  }

  // Cache miss or stale — fetch from Apps Script
  console.log("Fetching from Apps Script...");
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.text();
    console.log(`Apps Script response: ${response.status}, ${data.length} bytes`);

    // Store in cache
    try {
      await store.set("puppies", data, {
        metadata: { cachedAt: String(Date.now()) },
      });
      console.log("Cache written successfully");
    } catch (writeErr) {
      console.error("Blob write error:", writeErr);
    }

    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "X-Cache": "MISS",
      },
    });
  } catch (err) {
    console.error("Apps Script fetch error:", err);

    // Try stale cache as fallback
    try {
      const stale = await store.get("puppies");
      if (stale) {
        return new Response(stale, {
          headers: {
            "Content-Type": "application/json",
            "X-Cache": "STALE",
          },
        });
      }
    } catch (_) {}

    return new Response(
      JSON.stringify({ error: "Failed to fetch puppy data" }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config: Config = {
  path: "/api/happy-tails",
};
