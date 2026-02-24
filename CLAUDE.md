# CURRENT STATE

**Branch:** `phase4/hero-cls-fix` (2 commits ahead of master, NOT MERGED)
**Doing:** Session 7 — CLS fix ready, awaiting deploy to test on CDN. James coming home.
**Local test:** `bundle exec jekyll serve` (URL-bound 3rd-party scripts won't load on localhost)
**DO NOT** start Astro/Pawstronaut migration yet — that comes after perf work is done

→ **Read first each session:** memory/projects/site-perf-log.md (Session 7 has latest)
→ Full research: memory/projects/site-perf-optimization.md
→ Company context: memory/context/company.md

## Scores (latest → baseline)

| When | Perf | LCP | CLS | SEO | Key Change |
|------|------|-----|-----|-----|------------|
| **Session 7 branch (localhost, UIkit sync)** | **68/97** | **6.1s/1.3s** | **0.024/0.008** | **100** | **UIkit moved to head (render-blocking), parallax removed** |
| Session 7 production (CDN warm) | 76/76 | 2.6s/0.7s | 0.394/0.742 | 100 | Same code as Session 6, warm CDN |
| Session 6 (production, cold CDN) | 51/75 | 6.7s/0.8s | 0.386/0.749 | 100 | All optimizations + Heymarket click-to-load |
| Pre-merge production | 53 | 6.4s | 0.931 | 92 | Before Phase 1-5 merge |
| Baseline (Sept 2025) | 65 | 4.1s | 0.524 | 92 | — |

**CLS fix confirmed:** UIkit deferred → CLS 0.411/0.747. UIkit sync in head → CLS 0.024/0.008. Root cause: UIkit JS post-paint initialization shifts hero container. Needs CDN deploy to get real production numbers.

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

## Active Project
| Name | What | Status |
|------|------|--------|
| **Site Perf Optimization** | Fix ethicalfrenchie.com performance on current Jekyll stack | Phase 1 ✅ merged, Phase 2 on branch (NOT MERGED, awaiting approval) |

## What's Done (on master)
1. Sass compression, Netlify cache headers, deferred Omnisend/Heymarket/Apple Chat
2. Self-hosted Montserrat woff2 (killed render-blocking Google Fonts CDN)
3. Dead Instagram token removed, empty conditionals cleaned

## What's Done (all merged to master, deployed to production)
4. Moved GA+Bing from `<head>` → `hook-pre-closing-body.html` (LCP fix)
5. Moved `main.min.js` from head async → body defer (LCP + CLS fix — but caused CLS, see #18)
6. Added hero image preload to `<head>` (LCP fix)
7. Added `min-height: 60vh` to hero container (CLS fix)
8. Added width/height to logo images in navbar-default + navbar-center (CLS fix)
9. Added width/height to card images in cards.html (CLS fix)
10. Removed async CSS hack (`media="print" onload="this.media='all'"` → normal load)
11. Merged master into branch to pick up font fix (commit `45f9cc7`)
12. Replaced UIkit `data-uk-sticky` with CSS `position: sticky` + inline show-on-up JS (~500 bytes)
13. Moved nav outside hero container for full-page sticky behavior
14. Removed broken transparent nav logic (was causing unreadable nav on blog posts)
15. Added `sticky: true` to `_posts` defaults in `_config.yml` (blog posts had no sticky nav)
16. Added `.playwright-mcp/` to `.gitignore`
17. **Heymarket click-to-load** — CSS facade (~0 bytes JS on load), loads ~240KB widget bundle on click only ✅

**Last commit on master:** `8af762a` (Heymarket click-to-load merged)
**Production:** ethicalfrenchie.com (Netlify, live, tested)

## What's On Branch (phase4/hero-cls-fix, NOT MERGED)
18. **Moved `main.min.js` back to `<head>` as synchronous** — UIkit init before first paint eliminates CLS (0.411→0.024 mobile, 0.747→0.008 desktop). Trade-off: ~100-300ms LCP regression on CDN.
19. **Removed `data-uk-parallax="y: 100;"` from hero content div** — additional CLS source, cosmetic parallax effect not worth the shift

**Branch commits:** `01dcb42`, `42b9f67`
**Awaiting:** CDN deploy + production Lighthouse test + James's merge approval

## What's Next
1. Remove Google Ads tag (AW-11176861724) — injected by Omnisend, contact support
2. Audit Bing UET for duplicate/unnecessary loads
3. Research iMessage for Business integration via Heymarket
4. Fix remaining CLS: hero container layout shift (0.386 mobile / 0.749 desktop)
5. Move GA4 + Bing tracking to Netlify snippet injection
6. Image optimization (195MB uploads/ folder → WebP for blog/puppy pages)
7. Schema.html cleanup (600 lines, broken Hugo syntax)
8. Pawstronaut (Astro) migration

## Tech Stack (current, being optimized)
- **Platform**: Jekyll, EON theme (UIkit 3.3.6) — ABANDONED
- **Hosting**: Netlify (static deploy) — KEEPING
- **Font**: Self-hosted Montserrat woff2 (37KB, variable, font-display:swap) ✅
- **CSS**: main.css loaded normally (render-blocking but same-domain cached — this is correct) ✅
- **JS**: main.min.js — currently deferred to body (causes CLS 0.4), branch fix moves it back to head sync (CLS 0.024)
- **3rd Party**: All deferred to body ✅ — GA4+Bing, Omnisend; Heymarket click-to-load facade ✅
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
