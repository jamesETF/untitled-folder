#!/usr/bin/env python3
"""
GSC Audit Script — Ethical Frenchie
Pulls Search Console data and outputs CSVs for content pruning decisions.

Usage:
    python3 scripts/gsc-audit.py

Requires:
    pip3 install google-auth google-auth-httplib2 google-api-python-client openpyxl

Credentials:
    Place gsc-credentials.json at the repo root (never commit — it's gitignored).
    See memory/context/gsc-setup.md for full setup instructions.
"""

import os, json, csv, datetime
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build

# ── Config ────────────────────────────────────────────────────────────────────
REPO_ROOT    = Path(__file__).parent.parent
CREDS_FILE   = REPO_ROOT / "gsc-credentials.json"
OUTPUT_DIR   = REPO_ROOT / "scripts" / "gsc-output"
SITE_URL     = "sc-domain:ethicalfrenchie.com"   # change to https://ethicalfrenchie.com/ if URL-prefix property
DAYS_BACK    = 365                                # 12 months of data
SCOPES       = ["https://www.googleapis.com/auth/webmasters.readonly"]

# Location pages to track individually
LOCATION_PAGES = [
    "/illinois/chicago",
    "/massachusetts/Boston/",
    "/California/Los_Angeles",
    "/georgia/atlanta",
    "/newyork/southampton",
    "/northCarolina/raleigh",
]

# Blog posts worth tracking trends on
BLOG_PAGES = [
    "/blog/french-bulldog-colors-explained",
    "/blog/blue-merle-french-bulldog-everything-you-wanted-to-know",
    "/french-bulldogs-health-concerns-care-tips",
    "/blog/why-french-bulldogs-are-expensive-before-adoption/",
    "/blog/best-food-for-french-bulldog",
    "/potty-train-your-frenchie/",
    "/blog/french-bulldog-care",
    "/blog/french-bulldog-ivdd-prevention",
    "/blog/most-common-mistakes-french-bulldog-owners-make",
    "/blog/increase-french-bulldog-lifespan",
    "/blog/why-does-my-frenchie-vomit",
    "/blog/keeping-your-french-bulldog-cool-during-a-heat-wave-tips-to-avoid-heat-stroke/",
    "/4-signs-of-a-french-bulldog-scam-and-4-ways-you-can-avoid-them-ethical-frenchie",
    "/the-ethics-of-where-to-find-a-french-bulldog-puppy-for-your-family/",
    "/blog/french-bulldog-theft",
]

# ── Auth ──────────────────────────────────────────────────────────────────────
def get_service():
    if not CREDS_FILE.exists():
        raise FileNotFoundError(
            f"Credentials not found at {CREDS_FILE}\n"
            "See memory/context/gsc-setup.md for setup instructions."
        )
    creds = service_account.Credentials.from_service_account_file(
        str(CREDS_FILE), scopes=SCOPES
    )
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)

# ── Date helpers ──────────────────────────────────────────────────────────────
def date_range(days=DAYS_BACK):
    end   = datetime.date.today() - datetime.timedelta(days=3)  # GSC lags ~3 days
    start = end - datetime.timedelta(days=days)
    return str(start), str(end)

def quarter_ranges():
    """Return last 4 quarters as (label, start, end) for trend analysis."""
    today = datetime.date.today()
    ranges = []
    for q in range(4):
        end   = today - datetime.timedelta(days=3 + q * 91)
        start = end   - datetime.timedelta(days=91)
        ranges.append((f"Q-{q+1} ({start} to {end})", str(start), str(end)))
    return ranges

# ── API helpers ───────────────────────────────────────────────────────────────
def query(service, body):
    return service.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()

def all_pages(service):
    """Fetch all pages with their clicks/impressions/position over DAYS_BACK."""
    start, end = date_range()
    rows, start_row = [], 0
    while True:
        resp = query(service, {
            "startDate": start, "endDate": end,
            "dimensions": ["page"],
            "rowLimit": 25000,
            "startRow": start_row,
        })
        batch = resp.get("rows", [])
        if not batch:
            break
        rows.extend(batch)
        start_row += len(batch)
        if len(batch) < 25000:
            break
    return rows

def page_by_country(service, page_path):
    """Impressions for a single page broken down by country."""
    start, end = date_range()
    resp = query(service, {
        "startDate": start, "endDate": end,
        "dimensions": ["country"],
        "dimensionFilterGroups": [{"filters": [{
            "dimension": "page",
            "operator": "contains",
            "expression": page_path,
        }]}],
        "rowLimit": 25,
    })
    return resp.get("rows", [])

def page_quarterly(service, page_path):
    """Impressions per quarter for trend analysis."""
    results = []
    for label, start, end in quarter_ranges():
        resp = query(service, {
            "startDate": start, "endDate": end,
            "dimensions": ["page"],
            "dimensionFilterGroups": [{"filters": [{
                "dimension": "page",
                "operator": "contains",
                "expression": page_path,
            }]}],
            "rowLimit": 1,
        })
        rows = resp.get("rows", [])
        impr = rows[0]["impressions"] if rows else 0
        clicks = rows[0]["clicks"] if rows else 0
        results.append({"quarter": label, "impressions": impr, "clicks": clicks})
    return results

# ── Writers ───────────────────────────────────────────────────────────────────
def write_csv(path, fieldnames, rows):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)
    print(f"  ✓ Written: {path}")

# ── Main audits ───────────────────────────────────────────────────────────────
def audit_all_pages(service):
    print("\n[1/4] Fetching all pages...")
    rows = all_pages(service)
    start, end = date_range()

    all_rows, zero_rows = [], []
    for r in rows:
        page = r["keys"][0]
        impr = int(r.get("impressions", 0))
        clks = int(r.get("clicks", 0))
        pos  = round(r.get("position", 0), 1)
        ctr  = round(r.get("ctr", 0) * 100, 2)

        # Classify page type
        if "/puppies/" in page or "/french-bulldog-puppies/" in page.lower():
            ptype = "Sold Puppy Page"
        elif "/blog/" in page or any(page.endswith(s) for s in [
            "potty-train-your-frenchie/", "french-bulldog-home-made-treats-ethical-frenchie/",
            "home-cooked-food-for-your-french-bulldog-ethical-frenchie",
        ]):
            ptype = "Blog Post"
        elif any(loc in page for loc in ["/illinois/", "/massachusetts/", "/California/", "/georgia/", "/newyork/", "/northCarolina/"]):
            ptype = "Location Page"
        else:
            ptype = "Other"

        row = {
            "page": page, "type": ptype,
            "impressions": impr, "clicks": clks,
            "avg_position": pos, "ctr_%": ctr,
            "period": f"{start} to {end}",
        }
        all_rows.append(row)
        if impr == 0:
            zero_rows.append(row)

    all_rows.sort(key=lambda x: x["impressions"], reverse=True)
    zero_rows.sort(key=lambda x: x["page"])

    fields = ["page", "type", "impressions", "clicks", "avg_position", "ctr_%", "period"]
    write_csv(OUTPUT_DIR / "all-pages-summary.csv", fields, all_rows)
    write_csv(OUTPUT_DIR / "zero-impression-pages.csv", fields, zero_rows)
    print(f"     Total pages: {len(all_rows)} | Zero impression: {len(zero_rows)}")
    return all_rows

def audit_location_pages(service):
    print("\n[2/4] Fetching location page performance by country...")
    rows = []
    for page in LOCATION_PAGES:
        country_data = page_by_country(service, page)
        if not country_data:
            rows.append({
                "page": page, "country": "—",
                "impressions": 0, "clicks": 0, "avg_position": "—",
                "note": "No data — may not be indexed",
            })
        for r in country_data:
            rows.append({
                "page": page,
                "country": r["keys"][0].upper(),
                "impressions": int(r.get("impressions", 0)),
                "clicks": int(r.get("clicks", 0)),
                "avg_position": round(r.get("position", 0), 1),
                "note": "",
            })
    rows.sort(key=lambda x: (x["page"], -x["impressions"]))
    write_csv(
        OUTPUT_DIR / "location-page-performance.csv",
        ["page", "country", "impressions", "clicks", "avg_position", "note"],
        rows
    )

def audit_blog_trends(service):
    print("\n[3/4] Fetching blog post quarterly trends...")
    rows = []
    for page in BLOG_PAGES:
        quarterly = page_quarterly(service, page)
        for q in quarterly:
            rows.append({
                "page": page,
                "quarter": q["quarter"],
                "impressions": q["impressions"],
                "clicks": q["clicks"],
            })
    write_csv(
        OUTPUT_DIR / "blog-post-trends.csv",
        ["page", "quarter", "impressions", "clicks"],
        rows
    )

def audit_sold_puppy_pages(service, all_page_rows):
    print("\n[4/4] Extracting sold puppy page data...")
    sold = [r for r in all_page_rows if r["type"] == "Sold Puppy Page"]
    sold.sort(key=lambda x: x["impressions"], reverse=True)
    write_csv(
        OUTPUT_DIR / "sold-puppy-pages.csv",
        ["page", "impressions", "clicks", "avg_position", "ctr_%", "period"],
        [{k: v for k, v in r.items() if k != "type"} for r in sold]
    )
    print(f"     Sold puppy pages found in GSC: {len(sold)}")
    has_traffic = [r for r in sold if r["impressions"] > 0]
    print(f"     Of those, have any impressions: {len(has_traffic)}")
    if has_traffic:
        print("     Pages with impressions (check backlinks before redirect):")
        for r in sorted(has_traffic, key=lambda x: -x["impressions"])[:10]:
            print(f"       {r['impressions']:>6} impr — {r['page']}")

# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("GSC Audit — Ethical Frenchie")
    print(f"Site: {SITE_URL}")
    print(f"Date range: last {DAYS_BACK} days")
    print("=" * 60)

    try:
        svc = get_service()
        all_page_rows = audit_all_pages(svc)
        audit_location_pages(svc)
        audit_blog_trends(svc)
        audit_sold_puppy_pages(svc, all_page_rows)
        print(f"\n✅ Done. Output files in: {OUTPUT_DIR}/")
    except FileNotFoundError as e:
        print(f"\n❌ {e}")
    except Exception as e:
        print(f"\n❌ API error: {e}")
        raise
