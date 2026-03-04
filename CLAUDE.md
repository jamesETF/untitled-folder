# CURRENT STATE

**Branch:** `phase5/mobile-perf` (in sync with master)
**Done:** Session 26 (Mar 3 evening) — Created V2 pages for 2 new puppies: Diesel (10-diesel.md, merle male, 4 photos) and Nova (11-nova.md, blue merle & tan female, NEEDS PHOTOS). Marketing bios written by agent. Files on disk, not yet committed/deployed. Session 25 — V2 template rolled out to all 8 existing puppies. Luna deleted. CSS clipping fixes. All merged to master + deployed.
**Puppy V2 design system:** All puppy pages use `--luna-*` CSS namespace with Playfair Display accent font, cinematic hero, bento gallery, personality+price cards, custom accordion, sticky CTA, iOS iMessage split, JSON-LD Product schema. "Inquire for Pricing" (originals in HTML comments). Files: `_french-bulldog-puppies/02-09*.md`.
**Previous:** Session 23 (Feb 28) — Application page redesign. Session 22 — Color page rewrites. All 5 pages submitted to GSC for recrawl. Still waiting on `breeder-voice-brief.docx`. sameAs links ON HOLD.
**Color page pattern:** Each page uses `width: full` in front matter → controls own sections → alternating `uk-section-default`/`uk-section-muted` for visual rhythm. Prose sections use `markdown="1"` on the `uk-container` div. All HTML structural elements (badges, price cards, steps, cross-links, CTAs) are pure HTML.
**Application page:** REDESIGNED + MERGED (Session 23). File: `application.md` (NOT `pricing.md` — both exist). Trust credential bar (4 badges), 3-step process timeline, dual-path CTA (apply form + "Message Us" with iMessage/Heymarket), HubSpot form (replaced broken Typeform), Google review strip (4.8/5), 2 side-by-side testimonials, "Not Ready?" soft CTA with 3 icon links, 2 updated application FAQs. "Message Us" button: iOS → iMessage for Business, non-iOS → triggers Heymarket chat. Hero: cropped 1600x400 banner (`application-hero.jpg`), 30vh override via inline CSS. Commits: `9e03482` (redesign), `9b0ddc7` (hero crop).
**Pricing page:** `pricing.md` generates at `/pricing/` (separate from `/application/`). Has Typeform + "What Our Families Say" + `pricingfaq` FAQs.
**Step 2 process:** "Application Review & Video Call" — FaceTime/Zoom to personally interview buyer and introduce puppies.
**Local test:** `bundle exec jekyll serve` (URL-bound 3rd-party scripts won't load on localhost)
**DO NOT** start Astro/Pawstronaut migration yet — that comes after perf work is done
**⚠️ TASK LIST:** `memory/next-steps.md` has the full prioritized remaining work list
**⚠️ CONTENT BRIEF:** `content-brief-upcoming-colors.docx` — James/Renee filling out today. Contains SEO keywords, writing prompts, FAQ questions, health guarantee brief for all 4 color pages. Implement after returned.
**⚠️ SAVED SECTIONS:** `memory/saved-sections/trust-section-why-families-trust.html` — placed on About page ✅
**⚠️ MOBILE ONLY** — All performance testing and optimization targets MOBILE scores only. Desktop (98) is solved. Do NOT run or report desktop PSI/Lighthouse results unless explicitly asked. Every test = mobile. Every metric = mobile. No exceptions.
**⚠️ SOURCE OF TRUTH** — The ONLY valid performance test is **pagespeed.web.dev** (navigated to in a browser). No Chrome DevTools Lighthouse, no Chrome extensions, no CLI Lighthouse. These are NOT acceptable and their results mean nothing. The PSI API (`googleapis.com/pagespeedonline/v5`) is acceptable ONLY because it uses the same backend as the website and returns identical results. Nothing is a success until pagespeed.web.dev shows improvement.

→ **Read first each session:** memory/next-steps.md (task list) + memory/projects/site-perf-log.md (Session 19 has latest)
→ **Sitemap strategy:** memory/projects/sitemap-strategy.md (restructure rationale, maintenance rules, Google citations)
→ **Phase 5 research:** memory/context/mobile-perf-research.md (root cause, Firecrawl findings, approach)
→ Full research: memory/projects/site-perf-optimization.md
→ Company context: memory/context/company.md

## Scores (latest → baseline)

| When | Perf (mob/desk) | LCP (mob/desk) | CLS (mob/desk) | SEO | Key Change |
|------|------|-----|-----|-----|------------|
| **Session 21 (PSI prod, warm CDN)** | **93-98/—** | **2.5s/—** | **0.001/—** | **100** | **GA4 + Bing UET removed (−30KB JS)** |
| Session 12 (PSI prod, warm CDN) | 91/— | 3.5s/— | 0.005/— | 100 | Hero <img> conversion (from CSS bg-image) |
| Session 12 (PSI prod, cold CDN) | 66/— | 6.9s/— | 0.001/— | 100 | Same code, cold CDN |
| Session 10 (PSI prod, warm CDN) | ~55/98 | 6.4s/— | 0.005/— | 100 | CSS pre-pos + defer JS + Omnisend removed |
| Session 10 (PSI prod, cold CDN) | ~50/— | 6.7s/— | 0.001/— | 100 | Same code, cold CDN |
| Session 9 (PSI, production) | 49/98 | 7.2s/0.8s | 0.386/0.008 | 100 | UIkit sync in head — desktop perfect, mobile crushed |
| Pre-merge production | 53/— | 6.4s/— | 0.931/— | 92 | Before Phase 1-5 merge |
| Baseline (Sept 2025) | 65/— | 4.1s/— | 0.524/— | 92 | — |
| Oldest PSI (Feb 16, pre-opt) | 59/73 | 4.4s/0.9s | 0.934/0.984 | 92 | Before any work |

**Core problem now:** Cold-CDN LCP still variable. Root cause = Netlify Standard CDN has only 6 edge nodes, low traffic → cache eviction. Warm CDN = 93-98/2.5s (solved). GA4+Bing removal gave +2-7 points and -1s LCP.
**CrUX field data: ACTIVE** — 21 Good URLs on mobile since Nov 2025. Homepage group: LCP 0.6s, CLS 0.00, INP 62ms (all "Good"). CWV is now a ranking signal for this site. CrUX is independent of GA4 — removing analytics tags does not affect field data collection.
**⚠️ CDN INSIGHT:** Netlify Standard tier (Free/Pro/Business) = 6 edges only. Enterprise ($2K+/mo) = HP Edge. Pro ($19/mo) does NOT improve CDN. Cloudflare Pages (free, 300+ edges) is the long-term alternative.

**Preview:** phase5-mobile-perf--ethicalfrenchie.netlify.app ✅ (permanent test branch — ALL future work goes here, never create new branches)
**⚠️ BRANCH RULE:** Always work on `phase5/mobile-perf`. Do NOT create new branches. Netlify branch deploy is configured for this branch permanently. Test on preview → merge to master when approved.

---

# Memory

## Me
James, CEO/Founder of Ethical Frenchie LLC. French Bulldog breeder, NYC. Worked in tech before going full-time with Frenchies.

## People
| Who | Role |
|-----|------|
| **James** | Founder, CEO, ethicalfrenchie@gmail.com |
| **Renee** | Puppy Whisperer, co-founder |
| **Ely** | Logistics Manager |
| **Nick** | Logistics |
| **David** | Puppy Whisperer |

## Terms
| Term | Meaning |
|------|---------|
| EON | ABANDONED Jekyll theme (UIkit 3.3.6). Being replaced. |
| Pawstronaut | TARGET Astro theme for future migration |
| CWV | Core Web Vitals (LCP, INP, CLS) |
| LCP | Largest Contentful Paint |
| CLS | Cumulative Layout Shift |
| GTM | Google Tag Manager (3 copies = 405 KiB, worst offender) |
→ Full glossary: memory/glossary.md

## Active Projects
| Name | What | Status |
|------|------|--------|
| **Site Perf Optimization** | Fix ethicalfrenchie.com performance on current Jekyll stack | Hero img ✅ merged (91/3.5s warm, 1.8s WPT). Remaining items low priority. |
| **CWV & E-E-A-T** | CrUX field data + E-E-A-T signals | CrUX ACTIVE (Nov 2025). 21 Good URLs. LCP 0.6s / CLS 0.00 / INP 62ms. |
| **Internal Links & Content** | Fix linking structure, broken links, content quality | Internal linking campaign done (17 files, 15+ links to /happy-tails/). Remaining: broken link check, content gaps, upcoming-colors improvement. |
| **Backlink Outreach** | Build quality backlinks from relevant sources | Not started. |

## What's Done (all merged to master, deployed to production)
1. Sass compression, Netlify cache headers, deferred Omnisend/Heymarket/Apple Chat
2. Self-hosted Montserrat woff2 (killed render-blocking Google Fonts CDN)
3. Dead Instagram token removed, empty conditionals cleaned
4. Moved GA+Bing from `<head>` → `hook-pre-closing-body.html` (LCP fix)
5. Moved `main.min.js` to `<head>` with `defer` + CSS pre-positioning (CLS + LCP fix)
6. Added hero image preload to `<head>` with `fetchpriority="high"` (LCP fix)
7. Added `min-height: 60vh` to hero container (CLS fix)
8. Added width/height to logo images in navbar-default + navbar-center (CLS fix)
9. Added width/height to card images in cards.html (CLS fix)
10. Removed async CSS hack (`media="print" onload="this.media='all'"` → normal load)
11. Replaced UIkit `data-uk-sticky` with CSS `position: sticky` + inline show-on-up JS (~500 bytes)
12. Moved nav outside hero container for full-page sticky behavior
13. Removed broken transparent nav logic (was causing unreadable nav on blog posts)
14. Added `sticky: true` to `_posts` defaults in `_config.yml` (blog posts had no sticky nav)
15. **Heymarket click-to-load** — CSS facade (~0 bytes JS on load), loads ~240KB widget bundle on click only ✅
16. **Removed `data-uk-parallax` from hero** — cosmetic, was contributing to CLS
17. **CSS pre-positioning** — inline `<style>` with `[data-uk-navbar]`, `[data-uk-grid]`, etc. attribute selectors (CLS 0.386→0.005)
18. **main.min.js deferred** — `<script defer>` in head, unblocks 1,450ms mobile render
19. **fetchpriority="high"** on hero image preload
20. **Omnisend removed** — saves ~66 KiB JS (launcher + monitoring + forms)
21. **.gitignore cleanup** — 30 AI agent dirs, CLAUDE.md untracked
22. **Hero `<img>` conversion** — CSS `background-image` → `<img class="hero-img">` with `fetchpriority="high"` + `object-fit:cover` (LCP 6.4s→3.5s warm, perf 55→91 warm) ✅
23. **GSC API setup** — GCP project `ethical-frenchie-seo`, Search Console API enabled, service account `gsc-reader@ethical-frenchie-seo.iam.gserviceaccount.com` added as Full user on ethicalfrenchie.com property. Credentials at `gsc-credentials.json` (gitignored). Script at `scripts/gsc-audit.py`. Output CSVs at `scripts/gsc-output/` (gitignored). ✅
24. **Content audit** — `content-audit.xlsx` at repo root: 69 sold puppy pages, 31 blog posts, 4 duplicate permalink bugs, backlinks tab. Full GSC data run Feb 25. ✅
25. **Redirect loop fix** — Location page permalinks changed to trailing slash (Chicago `/illinois/chicago/`, LA `/California/Los_Angeles/`, Boston `/massachusetts/boston/`). `force=true` removed from trailing-slash-only redirects (Netlify treats `/path` and `/path/` as same route → loops). Kept `force=true` on case-change redirects only. ✅
26. **Sitemap aligned with canonical tags** — Fixed 5 sitemap URLs that were pointing to loser URLs: Boston `/Boston/` → `/boston/`, Chicago no-slash → trailing-slash, LA no-slash → trailing-slash, Chicago puppies `/Illinois/Chicago/` → `/illinois/chicago/`. Sitemap + canonical now send consistent signals to Google. ✅
27. **Sitemap /delivery/ fix** — `/delivery/` was 404, changed to `/puppy-delivery/` (actual page). ✅
28. **Chicago-specific FAQs** — 6 entries (`chicagofaq` category): delivery radius, pricing ($3.5-6.5K), AKC registration, health testing, visiting, colors. ✅
29. **CTA button fixes** — All three CTA blocks (chicagocta, cta-4, header-home) changed from `uk-button-primary` (white-on-white in `uk-light`) to inline `<a>` with `background-color: #941901`. Affects Chicago, Boston, Atlanta hero + all bottom CTAs. ✅
30. **Chicago puppies page consolidation** — 301 redirect `/Illinois/Chicago/french-bulldog-puppies` → `/french-bulldog-puppies/`. GSC: 10K impr but zero Chicago-specific queries. CTA link fixed from 404. ✅
31. **Hamburger icon fix** — Removed UIkit `data-uk-navbar-toggle-icon`, hardcoded SVG with `fill="#000"` on each `<rect>` (24×3px, `rx="1"`). Logo `max-width:180px !important` on mobile. Removed stale CSS rules. ✅
32. **Heymarket page-specific loading** — Facade (click-to-load) on low-intent pages (homepage, location indexes, blog posts). Full original widget on high-intent pages (puppies, individual puppy pages, contact, pricing, about, delivery, etc.). Conditionals in `hook-pre-closing-body.html` using `page.layout`, `page.url`, and location front matter vars.

33. **Happy Tails page** — Social proof page at `/happy-tails/` replacing 71 sold puppy pages. 12 puppy cards with real Google review quotes from NYC (4.7★) and Chicago (4.3★) GBP profiles. Reviewer attributions link to Google reviews (new window). Image aspect ratios fixed at 280px. Stats bar, trust section, CTAs. "Renee" → "they/the team" site-wide. ✅

35. **Happy Tails UX condensation (Session 19)** — Deleted redundant intro section + trust section (saved for reuse). "Explore the Map" → "Furever Homes, Real Stories". CTA → "Ready to Join the Ethical Frenchie Family?" + Google review strip (4.7★, 87 reviews, linked to GBP). Stats bar: Since 2017 / Embark DNA Tested / 1-Year Guarantee / Hand Delivered — with UIkit icons, compact layout. Fixed Form URL typo, CTA color mismatch. Internal links to blog content. ✅
36. **Enhanced Organization schema (Session 19)** — Page-specific schema on `/happy-tails/` via `happytails: true` front matter. foundingDate 2017, founder James Harrison, both NYC+Chicago addresses, dual contacts, AKC credential, knowsAbout (7 topics), sameAs (Facebook, Instagram, both Google Maps). ✅
37. **iMessage for Business on chat widget (Session 21)** — iPhone/iPad users tapping the chat bubble now open Apple Business Messages directly (business ID `aea0f1e1-d35e-4943-a9f1-141bc4d2db78`) instead of the Heymarket SMS form. Android/desktop get Heymarket as before. Detection: `userAgent` for iPhone/iPad/iPod + iPadOS (`Macintosh` + `maxTouchPoints>1`). Mac desktop excluded (Chrome/Firefox can't handle `bcrw.apple.com` URLs). Unified into single script block in `hook-pre-closing-body.html`. Facade starts `display:none`, JS shows it based on device + page type. Tested on iPhone ✅. Commit `37610e4`. ✅
38. **"Updated monthly" timestamp on Happy Tails (Session 21)** — Added "Updated monthly · Last updated February 2026" below map heading. Commit `97f792f`. ✅
39. **Gitignore content briefs (Session 21)** — Added `content-brief-*.docx`, `content-gap-*.docx`, `breeder-voice-brief.docx`, and generator scripts to `.gitignore`. Commit `97f792f`. ✅
40. **Removed GA4 + Bing UET tags (Session 21)** — No ads running, switched to Netlify Analytics (server-side, already active with 30 days of data: 23,688 pageviews, 7,624 unique visitors). Saves ~30KB client-side JS + eliminates third-party requests. GSC stays for organic search data. Trial period — monitor for a few days. Commit `63d4344`. ✅

**Last commit on master:** `9b0ddc7` (Session 23 — application hero crop)
**Last commit on phase5/mobile-perf:** `9b0ddc7` (in sync with master)
**Production:** ethicalfrenchie.com (Netlify, live)

---

## SEO Session — Feb 25, 2026

### What was done this session

**GSC API setup (fully operational)**
- Created GCP project `ethical-frenchie-seo`
- Enabled Google Search Console API
- Created service account `gsc-reader@ethical-frenchie-seo.iam.gserviceaccount.com`
- Downloaded JSON key → `gsc-credentials.json` (gitignored at repo root)
- Added service account as Full user on ethicalfrenchie.com GSC property
- Script: `scripts/gsc-audit.py` | Output: `scripts/gsc-output/` (gitignored)

**GSC audit run (365 days of data)**
- 166 pages indexed, 0 with zero impressions
- 4 CSVs generated: `all-pages-summary.csv`, `zero-impression-pages.csv`, `location-page-performance.csv`, `blog-post-trends.csv`, `sold-puppy-pages.csv`

**Content audit**
- `content-audit.xlsx` created at repo root: 69 sold puppy pages, 31 blog posts, 4 duplicate permalink bugs, backlinks quality tab

**Key findings from GSC data**
1. **Duplicate location URLs** — every city has trailing-slash vs. no-slash (and sometimes casing) versions competing. Chicago duplicate alone splits 88K impressions between pos 6 and pos 29.
2. **upcoming-colors pages are NOT sold puppy pages** — lilac/fluffy/blue/merle have 2K-5K impressions each at pos 61-72. Improve, do not redirect.
3. **Blog CTR problem** — 40K impressions but only 23 clicks total. Posts ranking page 5-8 on high-volume queries. Need content improvement + internal links to move to page 1-2.
4. **No NYC page** — confirmed by GSC. Zero impressions for any NYC URL.
5. **5 blog posts confirmed for 301 redirect** — all under 200 impressions and root-level/thin.

**Duplicate URL redirects added to `netlify.toml`**
All 8 duplicate groups fixed with 301 redirects:
- Chicago: `/illinois/chicago` + `/Illinois/Chicago*` → `/illinois/chicago/`
- LA: `/California/Los_Angeles` → `/California/Los_Angeles/`
- Boston: `/massachusetts/Boston*` → `/massachusetts/boston`
- Raleigh: `/NorthCarolina/Raleigh*` → `/northCarolina/raleigh`
- About: `/about-us` → `/about-us/`
- Contact: `/contact-us` → `/contact-us/`
- Puppy delivery: `/puppy-delivery` → `/puppy-delivery/`
- Chicago contact sub-page: `/illinois/chicago/contact-us/` → no-slash

### Redirect session — Feb 25, 2026

**Redirect loop fix (commits 6353641, 165f833, 3434947)**
- Root cause: `force=true` + no-trailing-slash permalinks caused Netlify to loop (strip slash → re-match rule → redirect → strip slash...)
- Fix: Changed permalinks to trailing slash (Chicago, LA, Boston) so directory-style `index.html` is canonical
- Discovery: Netlify matches `/path` and `/path/` as the same route, so `force=true` on trailing-slash-only redirects always loops
- Kept `force=true` only on case-change redirects (`/Illinois/Chicago` → `/illinois/chicago/`, `/massachusetts/Boston` → `/massachusetts/boston/`)
- Trailing-slash duplicates can't be force-redirected on Netlify — canonical tag + sitemap alignment is the fix

**Sitemap aligned with canonical tags (commit 0b98848)**
- Sitemap was telling Google to index loser URLs while canonical tags pointed to winners — contradictory signals
- Fixed: `/massachusetts/Boston/` → `/massachusetts/boston/`, `/illinois/chicago` → `/illinois/chicago/`, `/California/Los_Angeles` → `/California/Los_Angeles/`, `/Illinois/Chicago/french-bulldog-puppies` → `/illinois/chicago/french-bulldog-puppies`

**Netlify redirect limitation documented**
- Netlify "Pretty URLs" serves directory `index.html` at both `/path` and `/path/` with 200
- Cannot force a 301 between them — only canonical + sitemap can signal the winner to Google
- Case-change redirects work fine with `force=true` (different string match)

**Production test results (all verified on ethicalfrenchie.com)**
- `/Illinois/Chicago` → 301 → `/illinois/chicago/` → 200 ✅
- `/Illinois/Chicago/` → 301 → `/illinois/chicago/` → 200 ✅
- `/massachusetts/Boston/` → 301 → `/massachusetts/boston/` → 200 ✅
- `/massachusetts/Boston` → 301 → `/massachusetts/boston/` → 200 ✅
- `/NorthCarolina/Raleigh` → 301 → `/northCarolina/raleigh` → 200 ✅
- All winner URLs return 200, zero loops, zero chains > 1 hop

### Happy Tails Page — Session 14 (Feb 25, 2026)

**Happy Tails page built (Section E, Step 1 — COMPLETE)**
- File: `happy-tails.md` at `/happy-tails/`
- 12 curated puppy cards with real Google review quotes
- Reviews scraped from NYC GBP (4.7★, 87 reviews) and Chicago GBP (4.3★, 24 reviews)
- All "Renee" references replaced with "they/the team" per James's request
- Image aspect ratios fixed: `.happy-tails-img{height:280px}` + `object-fit:cover`
- Review attributions link directly to Google reviews pages (NYC or Chicago), open in new window
- Stats bar: AKC / Nationwide / Lifetime / Health Tested (no fabricated numbers)
- Trust section: 4 pillars (Health Tested Parents, Lifetime Support, Hand Delivery, Community)
- CTAs: "Send Us Your Photos" (mailto), "See Available Puppies", "Apply Now"
- 7 SoldPuppies files fixed: `status: available` → `status: sold`
- Commits: `304beb2` (initial page), `2cca417` (real quotes + aspect ratio), `cee5583` (Google review links)
- Preview verified: phase5-mobile-perf--ethicalfrenchie.netlify.app/happy-tails/

**Google review URLs used:**
- NYC: `https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz`
- Chicago: `https://www.google.com/maps/place/Ethical+Frenchie/@41.8847435,-87.6363389,17z/data=!4m8!3m7!1s0x880e2d623a6a4673:0x57d3c1f249c3cd83!8m2!3d41.8847435!4d-87.6363389!9m1!1b1!16s%2Fg%2F11lgvvz659`

### Session 16-17 — Map, Reports, Embark (Feb 25-26, 2026)

**Session 16: Happy Tails Interactive Map (COMPLETE ON PREVIEW)**
- Interactive Google Map built and working on preview: silver theme, custom maroon SVG pins, 12 sample puppies
- InfoWindow popups with name, region, quote, owner — before/after slider ready for photos
- Google Form + Sheet + Apps Script proxy all live and tested end-to-end
- Email notifications on form submit → renee@, adopt@, ethicalfrenchie@gmail.com
- Stats bar: 40+ Furever Homes Found | Coast to Coast | Lifetime Health Guarantee
- Map page merged into main `/happy-tails/` page (commit `b522fe4` by another CLI session)
- "Financing" replaced with "Happy Tails" in all nav configs (desktop, mobile, LA mobile)
- Internal links to `/happy-tails/` added across 17 pages (commit `5a6d580` by another CLI session)
- Google Maps API key: added preview domain to referrer list in GCP Console (EthicalFrenchie project)

**Session 17: Brand Trust Report + Embark DNA Update**
- Generated `report-brand-trust-2026.html` / `.pdf` — 5-page brand reputation report for Renee (gitignored)
  - Full GSC analysis of "ethical frenchie reviews" cannibalization (788 impr across 35+ pages, 7 clicks)
  - Trust/scam/legit query inventory with estimated monthly search volumes
  - Before/after comparison of what we fixed and expected outcomes
- Updated Happy Tails page: "Health Tested Parents Only" → "Embark DNA Health Tested" with link to embarkvet.com
- Trust section card: "Think 23&Me, but for dogs. Every parent is tested for 250+ genetic health conditions. Reports shared with every buyer."
- Commits: `93fa857` (gitignore reports), `e87329e` (Embark DNA update)
- Also generated `report-feb25-26-2026.html` / `.pdf` — 6-page progress report for Renee (gitignored)

34. **Sitemap v2 restructure** — Reduced 55→45 URLs. Dropped `<priority>` and `<changefreq>` (Google ignores both). Selective `<lastmod>` on 26 of 45 URLs (only where date is known/accurate). Added `/happy-tails/`, Hey Arnold. Removed 3 sold puppies (redirect sources), 3 city contact sub-pages (thin duplicates), 2 pagination pages, privacy page, 7 thin/overlapping blog posts. All `<loc>` URLs verified against canonical tags. Strategy doc: `memory/projects/sitemap-strategy.md`. ✅

**Session 19: Happy Tails UX + E-E-A-T (Feb 26, 2026)**
- Fixed Google Form URL typo (Submit Your Photos was 404)
- Layout condensation: removed dead intro section, removed trust section (saved to `memory/saved-sections/`), new map heading "Furever Homes, Real Stories"
- Stats bar: Since 2017 / Embark DNA Tested / 1-Year Guarantee / Hand Delivered — compact with UIkit icons
- CTA → "Ready to Join the Ethical Frenchie Family?" + Google review strip (4.7★ linked to GBP)
- Enhanced Organization schema on `/happy-tails/` (foundingDate 2017, founder, addresses, credentials)
- Internal links to blog content, CTA color fix
- **Key corrections:** 1-year guarantee (not lifetime), founded 2017, homepage IS the NYC page
- Commits: `6a731d7`, `894bfda`, `c0af43a`, `6f4b44e`, `56e6cb2` (all merged to master)
- **Full task list for remaining work:** `memory/next-steps.md`

**Last commit on phase5/mobile-perf:** `b01a5db` (in sync with master)
**Last commit on master:** `b01a5db`

41. **CTA button consistency (Session 22)** — Standardized all homepage CTA buttons to inline `background-color: #901941` (was `uk-button-danger`). Normalized URLs to trailing slash. Fixed wrong hex `#941901` → `#901941` on chicagocta, header-home, cta-4. Heart SVG stroke `#000` → `#fff`. 13 files updated. Commit `ecf3e48`. ✅
42. **Root favicon + apple-touch-icon (Session 22)** — Copied `uploads/favicon.ico` to root, created `apple-touch-icon.png` (180x180) from logo.png. Updated `head.html` with proper `<link>` tags. Added Chicago puppies redirect. Commit `8419eba`. ✅
43. **Color page content rewrites (Session 22)** — All 4 upcoming-colors pages (lilac, blue, fluffy, merle) fully rewritten with Renee's content from `content-brief-upcoming-colors-final.docx`. Each page has: updated SEO metadata, trust bars, 6-7 content sections, pricing, health info, CTAs with `#901941`, internal cross-links, gallery + FAQ includes. Puppy count corrected to "over 200" (was 400). 12 existing FAQs updated, 28 new FAQs created (10 per color). 44 files changed. Commit `b01a5db`. ✅
44. **Internal linking campaign for color pages (Session 22)** — Each color page went from 2-3 source pages to 8-10+. Blog posts (colors-explained, blue-frenchie) now link directly to color pages. Homepage replaced single "colors" card with 4 direct buttons. Puppies page got "Explore Colors" section. Pricing FAQ hyperlinked color names (appears on 7+ pages). "What colors do you breed?" FAQ added to homepage, Chicago, puppies page. All 4 color pages got "Explore More Colors" cross-links to siblings. 10 files changed. Commit `d5b813b`. ✅

45. **Application page redesign (Session 23)** — `application.md` (serves `/application/`) fully redesigned from thin Typeform-only page. New subtitle ("Every puppy deserves the right home..."), trust credential bar (4 badges), 3-step process timeline (Apply → Video Call → Bring Home), dual-path CTA cards (maroon "Fill Out Application" + outlined "Message Us Instead"), HubSpot form (replaced broken Typeform), maroon Google review strip (4.8/5, 87 reviews), 2 side-by-side testimonial blockquotes (Nikol B. + Kelly L.), "Not Ready to Apply?" soft CTA with 3 icon links, 2 updated application FAQs. "Message Us" button: iOS → iMessage for Business, non-iOS → triggers Heymarket chat widget (same as floating bubble). Commit `9e03482`. ✅
46. **Application page hero crop (Session 23)** — Cropped `header-6.jpg` (1600x905) to 1600x400 wide banner → `uploads/application-hero.jpg`. Two Frenchies on park bench. Hero height overridden from 60vh to 30vh via inline `<style>` (template hardcodes 60vh). Front matter: `header_size: xsmall`, `heading_size: small`, `transparent: true`. Commit `9b0ddc7`. ✅
47. **GSC recrawl requests (Session 23)** — Submitted 5 updated pages to Google Search Console URL Inspection → Request Indexing. `/application/` was "Discovered - currently not indexed" (never crawled). All 4 color pages were already indexed with FAQ schema. Merle had transient rejection on first attempt, succeeded on retry via Live Test. All 5 now in Google's priority crawl queue. ✅

### Still to do (Section E remaining + SEO)
1. ~~**Step 2:** Add 301 redirects~~ ✅ DONE (Session 14 — commit `1482a7c`)
2. ~~**Step 3:** Delete sold puppy files~~ ✅ DONE (Session 14 — commit `1482a7c`, `3215480`)
3. ~~**Step 4:** Fix duplicate permalink bugs~~ ✅ DONE (resolved by Step 3 deletion)
4. ~~**Step 5:** Post-deploy cleanup~~ — Happy Tails in main nav ✅, footer dismissed ✅, internal links done ✅, GSC re-crawl still needed
5. **Review preview branch and merge to master** — all major work done, needs James's approval
6. ~~Redirect 5 confirmed thin blog posts~~ ✅ DONE (all 5 in netlify.toml with 301 + force=true)
7. Improve `/puppies/upcoming-colors/` color pages — waiting on Renee's content brief return
8. ~~Add LocalBusiness schema for Boston, LA, Atlanta, Raleigh~~ ✅ DONE (Session 20)
9. ~~Create NYC location page~~ — James confirmed homepage IS the NYC page ✅

---

# Task Lists

## A. PageSpeed (remaining — lower priority, CrUX no data)
> WPT shows 1.8s LCP for real users. PSI cold-CDN scores (66) are a Netlify 6-edge artifact. CrUX shows "No Data" — CWV not yet a ranking signal for this site. SEO work is higher ROI than further perf tuning right now.

- [x] **Remove GA4 + Bing UET tags** — ✅ Switched to Netlify Analytics (server-side). No ads running. Saves ~30KB JS. Duplicate AW tag was already gone. Trial period started Feb 26 — if no issues after a few days, permanent. Commit `63d4344`.
- [ ] **Lazy-load Elfsight Instagram widget** — 14 KiB, below fold (`index.md` lines 50-51). Click-to-load facade like Heymarket.
- [ ] **Critical CSS inline extraction** — Inline ~15KB above-fold CSS in `<head>`, async-load 257KB main.css. High risk on abandoned UIkit CSS. Defer until Astro migration.
- [ ] **Image optimization (uploads/ → WebP)** — 195MB uploads folder. Convert to WebP with responsive srcset.
- [ ] **Heymarket facade auto-open fix (Option A)** — Improve the click-to-load facade so clicking it loads the widget AND auto-opens the chat in one step (no double-click). Use MutationObserver instead of polling, keep facade visible as loading indicator until chat panel is open, then remove facade. Test against Heymarket's actual DOM structure. Would make the facade seamless on low-intent pages.
- [ ] **Pawstronaut (Astro) migration** — replaces entire Jekyll/EON stack. Solves CSS bloat, JS bloat, CDN cold issue. Pair with Cloudflare Pages (300+ edges). Long-term.

## B. Core Web Vitals & E-E-A-T
> CrUX field data is ACTIVE as of Nov 2025. 21 Good URLs on mobile. Homepage group: LCP 0.6s, CLS 0.00, INP 62ms. CWV is now a ranking signal for this site. E-E-A-T is how Google evaluates content quality for YMYL-adjacent topics.

- [x] **CrUX field data qualified** — ✅ Active since Nov 2025. 21 Good URLs, 2 URL groups. GSC → Core Web Vitals shows data. PSI individual URLs still show "No Data" (not enough per-URL traffic) but Google uses group-level data for ranking.
- [ ] **Improve structured data (Schema.org)** — Known issues in `_includes/schema.html`: only Chicago gets LocalBusiness schema, ~~blog Article schema uses broken Hugo syntax~~ ✅ fixed, `indexfaq` FAQ schema is identical across all location pages. Fix: add per-city LocalBusiness blocks, add Author schema for E-E-A-T. Validate with Rich Results Test.
- [ ] **Audit Experience signals** — Author bios, photos of actual dogs/facilities, customer testimonials, breeding process docs, health testing visibility.
- [ ] **Audit Expertise signals** — Detailed breed info, health/genetics knowledge, AKC registration, vet partnerships, breeding standards, blog quality.
- [ ] **Audit Authoritativeness signals** — Mentions/links from breed orgs, press coverage, Google Business/Yelp reviews, industry memberships, about page depth.
- [ ] **Audit Trustworthiness signals** — SSL ✅, privacy policy, terms of service, contact info visibility, physical address, transparent pricing, health guarantees.
- [ ] **Evaluate Cloudflare Pages migration** — 300+ edges vs Netlify's 6. Eliminates cold-CDN problem. Best paired with Astro migration.

## C. SEO — Content & Location Pages
> GSC audit run Feb 25. 166 pages in GSC, 0 with zero impressions. Key actions now data-driven.

### C1. Redirects (ready to execute — do these first)
- [x] **Fix duplicate location page URLs** — Case-change 301s live with `force=true` (Chicago, Boston, Raleigh). Trailing-slash duplicates can't be force-redirected (Netlify limitation) — fixed via sitemap + canonical alignment instead. Sitemap now matches canonical tags on all location pages. ✅
- [x] **Redirect 5 confirmed thin blog posts** — ✅ All 5 in netlify.toml with 301 + force=true. Scam→`/faq/`, Ethics→`/about-us/`, Theft→`/faq/`, Health-concerns→health-risks blog, Potty→`/blog/`.
- [x] **Fix 4 duplicate permalink bugs** — ✅ Resolved by SoldPuppies deletion (Session 14). All 4 duplicate pairs were in SoldPuppies/.
- [x] **Redirect individual sold puppy pages** — ✅ All configured in netlify.toml. 12 Happy Tails→`/happy-tails/`, 17 individual→`/french-bulldog-puppies/`, wildcard `/puppies/*`→`/french-bulldog-puppies/`. SoldPuppies/ directory empty.

### C2. Location Pages (fix after redirects)
- [x] **Add LocalBusiness schema** for Boston, LA, Atlanta, Raleigh — ✅ All 5 cities have `LocalBusiness` blocks in `schema.html`.
- [x] **Create NYC location page** — ✅ James confirmed homepage IS the NYC page. NYC-based FAQs added to homepage.
- [x] **Fix Boston CTA bug** — ✅ Now uses `bostonhomeabout` + `cta-4` (no longer references `LACTA`).
- [x] **Add city-specific FAQs** — ✅ Boston, Atlanta, LA, Raleigh each have 3 city-specific FAQ entries (deliver → local airport, visit, apartment living). Files: `110-113`, `115-121` in `_faqs/`.
- [ ] **Add neighborhood references** to each city page body content — e.g. Back Bay/South End for Boston, Buckhead/Midtown for Atlanta, Los Feliz/Silver Lake for LA, North Hills/Five Points for Raleigh. Currently the homeabout blocks are generic. Makes pages more locally relevant to Google.
- [ ] **Add city-specific testimonials** — one or two real customer quotes per city page. Currently no city-level testimonials. Source from Google reviews, filter by city. Strong E-E-A-T + local relevance signal.
- [x] **Add location pages to footer nav** — ✅ "Service Areas" row in `footer-center.html` with Chicago, LA, Boston, Atlanta, Raleigh. Commit `a3573ad`.

### C3. Content Improvement
- [x] **Improve upcoming-colors pages** — ✅ DONE (Session 22). All 4 pages rewritten with Renee's content brief. Lilac ($4,500-$5,000), Blue ($4,000-$5,000), Fluffy ($6,000-$8,500), Merle ($5,000-$6,500). 40 FAQs (10 per color). Commit `b01a5db`.
- [x] **Add internal links to top blog posts** — ✅ DONE (Session 15b, commit `5a6d580`). Colors-explained, Blue-merle, IVDD, Lifespan, Best-food — all now link to `/happy-tails/`. Still need: links to location pages, puppy listings, contact (≥2 links to conversion pages each).
- [ ] **Audit internal linking structure** — Map orphan pages, pages with too few links. Anchor text analysis.
- [x] **Run full broken link check** — ✅ DONE (confirmed by James, Session 21).
- [x] **Content gap analysis** — ✅ DONE. 14-section report at `content-gap-analysis-feb2026.docx`. Script at `scripts/generate-content-gap-report.py`. Covers competitors (TomKings, Blue Haven, Poetic, TheFrenchBulldog), 25-keyword SERP analysis, top 20 priorities, content gap matrix.
- [x] **Audit sitemap.xml vs actual site pages** — DONE Feb 25. Full GSC cross-reference complete. See findings below in C4. Data at `scripts/gsc-output/unlisted-pages-summary.csv` and `unlisted-pages-queries.csv`.

### C4. Unlisted Pages — Consolidation & Cleanup (from sitemap audit Feb 25)
> 47 of 48 pages built by Jekyll but not in sitemap have ZERO Google impressions over 365 days. Action needed: redirect duplicates to GSC winners, noindex junk, improve or remove the rest.

**Quick wins:**
- [x] **Add `/faq/` to sitemap** — ✅ DONE (Sitemap v2, Feb 26). 77 impressions, pos 4.9, 1 click.
- [ ] **Rebuild FAQ system site-wide — 28 FAQs distributed across all pages** — `/faq/` page is broken (pulls from `presale` category with ZERO entries). Full plan below.
  - **PHASE 1: Write all FAQ content** (10 new + 4 updated + 14 existing = 28 total)
    - **Section 1 — About Ethical Frenchie (6):** What makes you different? (EXISTS #1), Health guarantee details (EXISTS #2 — expand: years, coverage, exclusions), Where located / deliver nationwide? (NEW — link to location pages), Can I visit and meet puppies? (NEW — trust signal), What health testing do breeding dogs go through? (NEW — CMR1/DM/HUU/JHC), What questions should I ask ANY breeder? (EXISTS #12)
    - **Section 2 — About the Breed (7):** Good apartment dogs? (EXISTS #19), Good with kids? (NEW — 8K-12K monthly searches), Separation anxiety? (NEW — top "people also ask"), Good for first-time owners? (NEW), How big do they get? (EXISTS #17), Typical lifespan? (EXISTS #18 — add link to blog post), Health issues to know about? (EXISTS #7)
    - **Section 3 — Colors & Pricing (6):** What colors do you breed? (EXISTS #10 — expand with links to color pages), Are Blue/Merle healthy? (EXISTS #11), How much do puppies cost in 2026? (EXISTS #4 — update to $3,500-$6,500, target 70K+ monthly pricing searches), Why so expensive? (EXISTS #5), Financing? (EXISTS #6 — consolidate), French Bulldog vs Boston Terrier? (NEW — 8K-12K monthly)
    - **Section 4 — Getting Your Puppy (5):** How does adoption process work? (NEW — browse→apply→deposit→updates→delivery), What age can puppies go home? (EXISTS #14), Deliver to out-of-state? (NEW — flight nanny details), How should I prepare? (EXISTS #15), What post-purchase support? (EXISTS #13)
    - **Section 5 — Avoiding Scams (2):** How to spot a scam? (NEW — $500 prices, no FaceTime, gift cards), Why avoid puppy mills? (EXISTS #20)
    - **Bonus:** Are French Bulldogs good for NYC apartments? (NEW — targets missing NYC keywords)
    - **Drop:** ethicalfrenchie #8 (vet costs), #9 (heat safety), #16 (why popular), #21 (duplicates #15)
  - **PHASE 2: Create FAQ categories and assign to pages**
    - `homefaq` (NEW) → Homepage: What makes you different?, How much do puppies cost?, Deliver nationwide?, Good apartment dogs?, How does adoption process work?
    - `aboutfaq` (NEW) → About Us: Health testing?, Health guarantee?, Post-purchase support?, Questions to ask ANY breeder?, Why avoid puppy mills?
    - `puppiesfaq` (NEW) → Puppies page: How does adoption process work?, What age go home?, Deliver out-of-state?, Can I visit?, Financing?
    - `pricingfaq` (NEW) → Pricing page: How much?, Why expensive?, Financing?, What's included?, How does process work?
    - `deliveryfaq` (NEW) → Delivery page: Deliver out-of-state?, Delivery cost?, How to prepare?, What age can puppies travel?
    - `bostonfaq` (NEW) → Boston: Deliver to Boston?, Cost?, Visit?, What makes you different?, Apartment living?, Colors available?
    - `lafaq` (NEW) → LA: same pattern, city-specific
    - `atlantafaq` (NEW) → Atlanta: same pattern, city-specific
    - `raleighfaq` (NEW) → Raleigh: same pattern, city-specific
    - `nycfaq` (NEW) → future NYC page: same pattern, city-specific
    - `chicagofaq` (EXISTS) → Chicago: already done, 6 custom entries
    - `bluefaq`/`lilacfaq`/`merlefaq`/`fluffyfaq`/`colorfaq` (EXIST) → Color pages: enhance with health, pricing, genetics, legitimacy FAQs
    - `applicationfaq` (UPDATE) → Application: process, timeline, financing
  - **PHASE 3: Update page templates**
    - `faq.md` — rewrite to pull all 5 sections with proper titles (replace broken `presale` includes)
    - `index.md` — change `indexfaq` → `homefaq`
    - `about-us.md` — add `{% include faqs.html category="aboutfaq" %}`
    - `puppies.md` (`/french-bulldog-puppies/`) — add `{% include faqs.html category="puppiesfaq" %}`
    - `pricing.md` — change `application` → `pricingfaq`
    - `delivery.md` — add `{% include faqs.html category="deliveryfaq" %}`
    - `BostonIndex.md` — change `indexfaq` → `bostonfaq`
    - `LAIndex.md` — change `indexfaq` → `lafaq`
    - `atlantaindex.md` — change `indexfaq` → `atlantafaq`
    - Raleigh location page — change to `raleighfaq`
    - Color pages — update existing FAQ content in `bluefaq`, `lilacfaq`, `merlefaq`, `fluffyfaq`, `colorfaq`
  - **PHASE 4: Add FAQPage schema** — update `_includes/schema.html` to output JSON-LD FAQPage schema on every page that has FAQs (enables Google rich results)
  - **Files:** `faq.md`, `_faqs/*.md` (existing + new), all page .md files listed above, `_includes/schema.html`
- [x] **Noindex junk pages** — ✅ `/thanks` and `/license` have `robots: noindex`. Others (`/map-dark`, `/post23`, `/post6`, `/price-ranges`, `/Locations/Locations`, `/SoldPuppies/05-cairo`, `/SoldPuppies/05-lucy`) no longer exist (files deleted in previous cleanups).
- [x] **Exclude `/skills/` from Jekyll build** — ✅ `skills` in `exclude:` list in `_config.yml`.

**Duplicate content consolidation (301 ghost pages → GSC winners):**
- [x] **Lifespan cluster** — Already correct via redirect_from on winner post (post14.md). ✅
- [x] **Dog food cluster** — 7 URLs moved from wrong-target redirect_from to netlify.toml 301s → `/blog/best-food-for-french-bulldog`. Commit `10832ba`. ✅
- [x] **Blue french bulldog cluster** — 2 URLs moved from wrong-target redirect_from to netlify.toml 301s → `/puppies/upcoming-colors/blue-french-bulldog`. Commit `10832ba`. ✅
- [x] **Price cluster** — Already done (Session 15, netlify.toml lines 205-214). ✅
- [x] **Teacup cluster** — Both already redirect to colors-explained via redirect_from. No better target. ✅
- [x] **Sibling cluster** — Already correct via redirect_from on winner post (post35.md). ✅

**Remaining ghost breed/color pages (0 impressions, need decision):**
- [ ] **Evaluate breed pages for content investment vs noindex** — `/merle-french-bulldog`, `/pied-french-bulldog`, `/tri-colored-french-bulldogs`, `/types-of-french-bulldogs`, `/akc-french-bulldog-colors`, `/blue-and-tan-french-bulldog`, `/blue-fawn-french-bulldog`, `/breeds/cream-french-bulldog`, `/cheap-french-bulldog-puppies-under-500`, `/frenchton-puppies-for-sale`, `/french-bulldog` (generic). These target high-volume keywords but have zero impressions — likely thin content. Options: (a) improve content to 500+ words with unique value, add internal links, then add to sitemap; (b) 301 to relevant upcoming-colors pages; (c) noindex if not worth the effort.

**Other zero-impression pages:**
- [ ] **Decide on miscellaneous ghost pages** — `/team`, `/puppies` (index page), `/french-bulldog-preparation-list`, `/best-french-bulldog-harness`, `/guides/how-to-register-a-blue-french-bulldog-with-the-akc`, `/locations-blue-jay-ohio-french-bulldog-puppies`, `/blog/11-fab-frenchie-gifts-true-french-bulldog-lovers`, `/blog/colors`, `/blog/reviews/best-dog-food-french-bulldogs`, `/blog/4` (pagination), `/license`. Noindex, improve, or remove.

## D. Quality Backlink Outreach
> Backlinks are the #2 ranking factor after content. One link from AKC > 100 from random directories. GSC API is set up — can pull internal + external link data.

- [x] **Check backlinks on redirect candidates** — ✅ DONE Feb 25. All 7 top sold puppy pages (Allie, Kona, Ego, Roxanne, Platinum, Armani, Bruce) have **ZERO external backlinks** per both GSC URL Inspection API and Ahrefs. Safe to delete all. See Section E for full plan.
- [ ] **Audit full backlink profile** — GSC Links report + Ahrefs free checker. Check: referring domains, link quality, anchor text distribution, toxic links to disavow, competitor comparison.
- [ ] **Build quality outreach plan** — Targets: AKC/French Bull Dog Club of America, Good Dog, breed directories, local NYC directories, vet partner sites, local press. Quality over quantity.
- [ ] **Submit to quality breed/pet directories** — AKC Marketplace, Good Dog, PuppyFind, Yelp, Google Business Profile, BBB. Ensure NAP (Name, Address, Phone) is consistent across all listings.

## E. Past Puppy Cleanup (Ready to Execute)
> 71 sold puppy pages = 40%+ of indexed site, producing 2 clicks/year. Zero external backlinks on any of them. Decision: delete most, build a single trust/social-proof page, 301 the top ~5 URLs to the new page, let the rest 404.

### Research Completed (Feb 25, 2026)

**Backlink check (all clear):**
- GSC URL Inspection API + Ahrefs free checker: **ZERO external backlinks** on all sold puppy pages
- Domain Rating: 13 (157 linking websites). All equity on homepage, blog posts, location pages, upcoming-colors pages
- 4 pages already dead: Brutus (404), Armani (404), Roxanne (5xx), Bruce (crawled-not-indexed)
- Script at `scripts/check-backlinks.py`

**GSC data (365 days across all ~58 sold pages with data):**
- Total: ~1,200 impressions, 2 clicks
- Top pages: Allie (128 impr), Kona (80), Brutus (78), Ego (71), Roxanne (68)
- Vast majority: under 20 impressions, zero clicks

**Competitor analysis (TomKings Kennel):**
- They delete sold puppy pages entirely — sitemap shows only 41 current puppies
- Social proof for past puppies lives on Facebook group + one blog post gallery ("From a cute puppy to a smart grown-up frenchie")
- No individual URLs per sold puppy

**7 files in SoldPuppies/ had `status: available` in error — FIXED Feb 25:**
- `01-bean.md`, `01-blue-ivy.md`, `02-dexter.md`, `02-winnie.md`, `03-brioche.md`, `04-polarbear.md`, `05-daisymae.md`
- All changed to `status: sold`. These are sold puppies, not available — kept as available in error.
- All 71 files in SoldPuppies/ are now confirmed sold and will be deleted in the cleanup.

### Implementation Plan

**Step 1: Build the new page** ✅ DONE (Session 14)
- Created `/happy-tails/` — 12 puppy cards, real Google review quotes, reviewer links to GBP
- **Name chosen: Happy Tails** — previous options were:

| Rank | Nav Label | Slug | H1 | Rationale |
|------|-----------|------|-----|-----------|
| 1 | **Happy Tails** | `/happy-tails/` | Happy Tails: Our Puppies in Their Forever Homes | Warm, universal, memorable. "Happy trails" wordplay. Could become content franchise (monthly features, email, IG highlights) |
| 2 | **Our Alumni** | `/our-alumni/` | Meet Our Alumni | Premium, distinctive. Implies pride + ongoing relationship. Sets apart from generic "sold puppies" |
| 3 | **Frenchie Families** | `/frenchie-families/` | Where Our Puppies Call Home | Community-focused, best SEO potential for "French Bulldog family" queries |

- **Page content plan:**
  - Hero: lifestyle photo of real EF puppy with owner, maroon gradient overlay
  - Stats bar: "500+ puppies placed | All 50 states | Lifetime health guarantee | X years breeding"
  - 10-12 puppy cards: photo (then-and-now ideal), name, color/gender, city/state, 1-2 sentence family quote, personality fun fact
  - Trust section: health-tested parents, lifetime support, flight nanny delivery, community
  - CTAs: "See Available Puppies" + "Apply Now" + "Send us your puppy's photos" (builds content over time)
  - SEO targets: "Ethical Frenchie reviews," "is Ethical Frenchie legit," "best French Bulldog breeder NYC"
  - Schema: Review/Testimonial structured data for family quotes
  - Internal links FROM: homepage (social proof section), available puppies page, about page, blog posts
  - Internal links TO: available puppies, application, health guarantee, about, FAQ

**Step 2: Add redirects** ✅ DONE (Session 14)
- 12 Happy Tails puppies → `/happy-tails/` (force=true)
- Top 5 GSC (Allie, Kona, Ego, Roxanne) → `/french-bulldog-puppies/` (force=true)
- Wildcard `/puppies/*` → `/french-bulldog-puppies/` (force=false, preserves available puppies)
- 17 individual `/french-bulldog-puppies/` sold slugs → `/french-bulldog-puppies/`
- All redirects verified on preview via curl

**Step 3: Delete sold puppy files** ✅ DONE (Session 14)
- All 71 SoldPuppies/*.md files deleted. `SoldPuppies/` kept with `.gitkeep` for future use.
- Commit `1482a7c` (deletion + redirects), `3215480` (.gitkeep)

**Step 4: Fix duplicate permalink bugs** ✅ DONE (resolved by Step 3 deletion)
- All 4 duplicate pairs (Aurora/Theodore, Charlie/Cairo, Ego, Kona) were in SoldPuppies/ — gone.

**Step 5: Post-deploy cleanup** ⬜ IN PROGRESS
- ~~**Nav placement decision**~~ ✅ DONE — James chose to replace "Financing" with "Happy Tails" in nav (desktop + mobile). Merged map into `/happy-tails/` page. Commit `b522fe4`.
- ~~**Footer nav for Happy Tails**~~ ❌ DISMISSED — SEO/E-E-A-T agent analysis showed near-zero incremental value (main nav already provides sitewide link). James dismissed.
- ~~**Internal linking campaign**~~ ✅ DONE — 17 files edited, 15+ links to `/happy-tails/` across delivery, pricing, application, about, homepage, 4 location pages, puppies, 5 blog posts. Commit `5a6d580`.
- Request re-crawl in GSC for the top 5-10 sold puppy URLs to accelerate de-indexing
- Monitor GSC 4-8 weeks: watch for impression/position improvements on key pages
- Sold pages drop from sitemap automatically (source files removed)

### NOT touching (confirmed):
- `/puppies/upcoming-colors/*` pages (lilac 4.8K, fluffy 4.6K, blue 4.5K, merle 2.4K impressions) — these are content pages with real traffic

## Tech Stack (current, being optimized)
- **Platform**: Jekyll, EON theme (UIkit 3.3.6) — ABANDONED
- **Hosting**: Netlify (static deploy) — KEEPING
- **Font**: Self-hosted Montserrat woff2 (37KB, variable, font-display:swap) ✅
- **CSS**: main.css loaded normally (render-blocking but same-domain cached — this is correct) ✅
- **JS**: main.min.js — `<script defer>` in `<head>` with CSS pre-positioning (CLS 0.005) ✅
- **Hero**: `<img class="hero-img">` with `object-fit:cover` + `fetchpriority="high"` ✅ (converted from CSS `background-image`, merged Session 12)
- **3rd Party**: All deferred to body ✅ — GA4+Bing; Omnisend REMOVED; Heymarket click-to-load facade ✅
- **Sticky nav**: CSS `position: sticky` + ~500 byte inline show-on-up JS ✅ (was UIkit `data-uk-sticky` causing CLS 0.394)

## Brand Palette
| Role | Hex |
|------|-----|
| Primary | `#901941` (maroon/wine red) |
| Heading | `#000` |
| Body text | `#5c5e65` |
| Background | `#fff` |
| Muted bg | `#f8f8f8` |

## Preferences
- Hands-on, understands code, prefers guidance
- Uses VS Code + CLI
- **⚠️ ALWAYS branch → preview → merge** — never push to master directly
- **⚠️ Test before merging** — "Why are you acting like things don't break?"
- **⚠️ Give git commands as ONE combined block** — never split branch creation from commit/push
- **Approval style**: Ask permission for the "what" and "why". Once approved, execute everything without interrupting
- **⚠️ NEVER merge to master without explicit approval** — always verify, present results, and get a YES first
- **⚠️ Save session notes after each task** — update `memory/projects/site-perf-log.md` with progress
- **iMessage rules (when James says "I'm leaving"):** Poll for replies every 60s for up to 1 hour. Present summary + ask what to do next. Wait for approval via iMessage before proceeding. Text if permission needed. Stop polling when James says "I'm back."
- **Local repo**: `~/Library/CloudStorage/OneDrive-AshlandHarrison/Desktop/Ethical\ Frenchie/untitled-folder`

## Tool Handoff Protocol

| Scenario | Start in | Hand off to |
|----------|----------|-------------|
| Code change → verify live | Claude Code | Cowork (Lighthouse, screenshots) |
| Netlify settings needed | Claude Code | Cowork (browser automation) |
| Lighthouse shows issue | Cowork | Claude Code (fix code) |
| Visual before/after | Claude Code | Cowork (screenshot) |
| Build error | Cowork | Claude Code (debug) |

**Handoff format:** Use `📋 COWORK HANDOFF` or `📋 CLAUDE CODE HANDOFF` blocks (see memory/projects/site-perf-log.md Session 2 for full template).

## Claude Code Setup
Settings file at `[local repo]/.claude/settings.json` — auto-approves file ops, CLI commands, and iMessage tools. See memory/projects/site-perf-log.md Session 3 for full config.
