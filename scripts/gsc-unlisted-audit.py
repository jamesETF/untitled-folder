#!/usr/bin/env python3
"""
GSC audit for pages NOT in sitemap.xml — checks impressions, clicks, position,
and top queries (keywords) for each page.

Usage: python3 scripts/gsc-unlisted-audit.py
"""

import csv, datetime, json
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build

REPO_ROOT  = Path(__file__).parent.parent
CREDS_FILE = REPO_ROOT / "gsc-credentials.json"
OUTPUT_DIR = REPO_ROOT / "scripts" / "gsc-output"
SITE_URL   = "sc-domain:ethicalfrenchie.com"
DAYS_BACK  = 365
SCOPES     = ["https://www.googleapis.com/auth/webmasters.readonly"]

# Pages built by Jekyll but NOT in sitemap.xml
UNLISTED_PAGES = [
    "/faq",
    "/team",
    "/puppies",
    "/puppy-delivery",
    "/french-bulldog",
    "/french-bulldog-price",
    "/french-bulldog-price-how-much-does-a-frenchie-cost",
    "/akc-french-bulldog-colors",
    "/blue-french-bulldog",
    "/blue-french-bulldog-breed",
    "/blue-and-tan-french-bulldog",
    "/blue-fawn-french-bulldog",
    "/merle-french-bulldog",
    "/pied-french-bulldog",
    "/tri-colored-french-bulldogs",
    "/types-of-french-bulldogs",
    "/teacup-french-bulldog",
    "/breed/teacup-french-bulldog",
    "/breeds/cream-french-bulldog",
    "/cheap-french-bulldog-puppies-under-500",
    "/frenchton-puppies-for-sale",
    "/french-bulldog-lifespan-find-out-this",
    "/french-bulldogs-lifespan",
    "/how-long-will-my-frenchie-live",
    "/the-complete-guide-to-french-bulldog-food",
    "/best-french-bulldog-foods",
    "/best-french-bulldog-harness",
    "/best-dog-food-for-french-bulldogs-with-sensitive-stomach",
    "/best-dog-foods-for-french-bulldogs-with-gas",
    "/best-dog-foods/french-bulldogs",
    "/french-bulldog-preparation-list",
    "/french-bulldog-sibling",
    "/guides/how-to-register-a-blue-french-bulldog-with-the-akc",
    "/locations-blue-jay-ohio-french-bulldog-puppies",
    "/blog/french-bulldog-care-13-best-dog-food-brands",
    "/blog/11-fab-frenchie-gifts-true-french-bulldog-lovers",
    "/blog/colors",
    "/blog/reviews/best-dog-food-french-bulldogs",
    "/blog/4",
    "/map-dark",
    "/post23",
    "/post6",
    "/price-ranges",
    "/Locations/Locations",
    "/SoldPuppies/05-cairo",
    "/SoldPuppies/05-lucy",
    "/thanks",
    "/license",
]

def get_service():
    creds = service_account.Credentials.from_service_account_file(
        str(CREDS_FILE), scopes=SCOPES
    )
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)

def date_range():
    end   = datetime.date.today() - datetime.timedelta(days=3)
    start = end - datetime.timedelta(days=DAYS_BACK)
    return str(start), str(end)

def get_page_data(service, page_url):
    """Get impressions/clicks/position for a specific page URL."""
    start, end = date_range()
    full_url = f"https://ethicalfrenchie.com{page_url}"
    try:
        resp = service.searchanalytics().query(siteUrl=SITE_URL, body={
            "startDate": start, "endDate": end,
            "dimensions": ["page"],
            "dimensionFilterGroups": [{"filters": [{
                "dimension": "page",
                "operator": "equals",
                "expression": full_url,
            }]}],
            "rowLimit": 1,
        }).execute()
        rows = resp.get("rows", [])
        if rows:
            r = rows[0]
            return {
                "impressions": int(r.get("impressions", 0)),
                "clicks": int(r.get("clicks", 0)),
                "position": round(r.get("position", 0), 1),
                "ctr": round(r.get("ctr", 0) * 100, 2),
            }
    except Exception as e:
        print(f"  Error fetching {page_url}: {e}")
    return {"impressions": 0, "clicks": 0, "position": 0, "ctr": 0}

def get_top_queries(service, page_url, limit=10):
    """Get top search queries driving impressions to a specific page."""
    start, end = date_range()
    full_url = f"https://ethicalfrenchie.com{page_url}"
    try:
        resp = service.searchanalytics().query(siteUrl=SITE_URL, body={
            "startDate": start, "endDate": end,
            "dimensions": ["query"],
            "dimensionFilterGroups": [{"filters": [{
                "dimension": "page",
                "operator": "equals",
                "expression": full_url,
            }]}],
            "rowLimit": limit,
        }).execute()
        rows = resp.get("rows", [])
        return [{
            "query": r["keys"][0],
            "impressions": int(r.get("impressions", 0)),
            "clicks": int(r.get("clicks", 0)),
            "position": round(r.get("position", 0), 1),
        } for r in rows]
    except Exception as e:
        print(f"  Error fetching queries for {page_url}: {e}")
    return []

def main():
    print("=" * 60)
    print("GSC Audit — Unlisted Pages (NOT in sitemap)")
    print(f"Checking {len(UNLISTED_PAGES)} pages")
    print("=" * 60)

    svc = get_service()
    start, end = date_range()

    # CSV 1: Page-level summary
    summary_rows = []
    # CSV 2: Top queries per page
    query_rows = []

    for i, page in enumerate(UNLISTED_PAGES, 1):
        print(f"\n[{i}/{len(UNLISTED_PAGES)}] {page}")
        data = get_page_data(svc, page)
        print(f"  Impressions: {data['impressions']} | Clicks: {data['clicks']} | Pos: {data['position']}")

        summary_rows.append({
            "page": page,
            "impressions": data["impressions"],
            "clicks": data["clicks"],
            "avg_position": data["position"],
            "ctr_%": data["ctr"],
            "period": f"{start} to {end}",
        })

        if data["impressions"] > 0:
            queries = get_top_queries(svc, page)
            for q in queries:
                query_rows.append({
                    "page": page,
                    "query": q["query"],
                    "impressions": q["impressions"],
                    "clicks": q["clicks"],
                    "avg_position": q["position"],
                })
                print(f"    [{q['impressions']:>5} impr, pos {q['position']:>5}] {q['query']}")

    # Sort by impressions descending
    summary_rows.sort(key=lambda x: x["impressions"], reverse=True)
    query_rows.sort(key=lambda x: (-x["impressions"],))

    # Write CSVs
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    summary_path = OUTPUT_DIR / "unlisted-pages-summary.csv"
    with open(summary_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["page", "impressions", "clicks", "avg_position", "ctr_%", "period"])
        w.writeheader()
        w.writerows(summary_rows)
    print(f"\n✓ {summary_path}")

    queries_path = OUTPUT_DIR / "unlisted-pages-queries.csv"
    with open(queries_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["page", "query", "impressions", "clicks", "avg_position"])
        w.writeheader()
        w.writerows(query_rows)
    print(f"✓ {queries_path}")

    # Print summary
    with_traffic = [r for r in summary_rows if r["impressions"] > 0]
    zero = [r for r in summary_rows if r["impressions"] == 0]
    print(f"\n{'=' * 60}")
    print(f"RESULTS: {len(with_traffic)} pages with traffic, {len(zero)} pages with zero impressions")
    print(f"{'=' * 60}")
    print("\nPages with traffic (add to sitemap candidates):")
    for r in with_traffic:
        print(f"  {r['impressions']:>6} impr | {r['clicks']:>3} clicks | pos {r['avg_position']:>5} | {r['page']}")
    print("\nPages with ZERO impressions (noindex/remove candidates):")
    for r in zero:
        print(f"  {r['page']}")

if __name__ == "__main__":
    main()
