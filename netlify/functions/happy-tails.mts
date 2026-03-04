import { getStore } from "@netlify/blobs";
import type { Context, Config } from "@netlify/functions";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx_4tRZ8h0oOVA3_pAi9HwaJf6_1gZkA6nMF901wn1bB8kll7v5Fc6_V-ABXNpDwe1y/exec";

const CACHE_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export default async (req: Request, context: Context) => {
  const store = getStore("happy-tails-cache");

  // Check cache
  const cached = await store.getWithMetadata("puppies");

  if (
    cached &&
    cached.metadata.cachedAt &&
    Date.now() - (cached.metadata.cachedAt as number) < CACHE_TTL_MS
  ) {
    return new Response(cached.data as string, {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Cache miss or stale — fetch from Apps Script
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.text();

    // Store in cache
    await store.set("puppies", data, {
      metadata: { cachedAt: Date.now() },
    });

    return new Response(data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // If fetch fails but we have stale cache, serve stale
    if (cached) {
      return new Response(cached.data as string, {
        headers: { "Content-Type": "application/json" },
      });
    }

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
