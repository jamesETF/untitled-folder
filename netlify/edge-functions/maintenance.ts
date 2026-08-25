// MAINTENANCE MODE — Labor Day 2026 pause (Aug 25 → Sep 8, 2026).
// Serves coming-soon.html everywhere: homepage at 200 (keeps the brand indexed),
// all other URLs at 503 + Retry-After (Google's "temporarily away" signal).
// OFF SWITCH: delete this file and push to master. See CLAUDE.md "Maintenance mode".

const PASSTHROUGH = new Set([
  "/robots.txt", // a 5xx robots.txt would halt ALL crawling, including the homepage
  "/sitemap.xml",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/coming-soon.html", // serve the raw file directly; also prevents any rewrite loop
]);

export default async (request: Request, context: { next: (req?: Request) => Promise<Response> }) => {
  const path = new URL(request.url).pathname;

  if (PASSTHROUGH.has(path)) return context.next();

  const page = await context.next(
    new Request(new URL("/coming-soon.html", request.url), request),
  );

  const headers = new Headers();
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "no-store"); // instant effect on deploy and on rollback

  if (path === "/") {
    return new Response(page.body, { status: 200, headers });
  }

  headers.set("retry-after", "86400");
  return new Response(page.body, { status: 503, headers });
};

export const config = { path: "/*" };
