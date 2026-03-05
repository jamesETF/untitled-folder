import type { Context, Config } from "@netlify/functions";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx_4tRZ8h0oOVA3_pAi9HwaJf6_1gZkA6nMF901wn1bB8kll7v5Fc6_V-ABXNpDwe1y/exec";

export default async (req: Request, context: Context) => {
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.text();

    // Validate we got actual JSON back
    JSON.parse(data);

    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        // Browser: cache 5 min, serve stale up to 2 hours while revalidating
        "Cache-Control": "public, max-age=300, stale-while-revalidate=7200",
        // Netlify CDN: cache 2 hours, serve stale up to 24 hours while revalidating
        // "durable" persists cache across deploys
        "Netlify-CDN-Cache-Control": "public, durable, s-maxage=7200, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch puppy data" }),
      {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
};

export const config: Config = {
  path: "/api/happy-tails",
};
