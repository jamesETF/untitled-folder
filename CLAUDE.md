# CURRENT STATE

**Branch:** `phase1/performance-fixes` (NOT merged to master — awaiting CSS sticky fix + James's approval)
**Doing:** One more CLS fix (replace UIkit `data-uk-sticky` with CSS `position: sticky`), then merge
**Local test:** `bundle exec jekyll serve` (URL-bound 3rd-party scripts won't load on localhost)
**DO NOT** start Astro/Pawstronaut migration yet — that comes after perf work is done

→ **Read first each session:** memory/projects/site-perf-log.md (Session 4 continued has full context + exact code)
→ Full research: memory/projects/site-perf-optimization.md
→ Company context: memory/context/company.md

## Scores (latest → baseline)

| When | Perf | LCP | CLS | SEO | Key Change |
|------|------|-----|-----|-----|------------|
| **Phase 2 branch (normal CSS)** | **77** | **2.8s** | **0.394** | **100** | **Scripts deferred, CSS normal, hero preload** |
| Phase 2 branch (async CSS) | 56 | 7.1s | 0.43 | 100 | Branch deploy cold CDN + async CSS |
| Post Phase 1 + font fix (CLI) | 68 | 9.7s | 0.934 | 92 | Render-blocking eliminated |
| Baseline (Sept 2025) | 65 | 4.1s | 0.524 | 92 | — |

**Remaining bottleneck:** CLS 0.394 from UIkit `data-uk-sticky` creating a placeholder div at runtime. NOT from parallax (confirmed via Playwright inspection). Frontend-design agent confirmed CSS pre-positioning won't work (UIkit overrides inline styles). **Approved fix:** Replace `data-uk-sticky` with CSS `position: sticky` — see Session 4 continued in site-perf-log.md for exact before/after code.

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

## What's Done (on `phase1/performance-fixes` branch, NOT merged)
4. Moved GA+Bing from `<head>` → `hook-pre-closing-body.html` (LCP fix)
5. Moved `main.min.js` from head async → body defer (LCP + CLS fix)
6. Added hero image preload to `<head>` (LCP fix)
7. Added `min-height: 60vh` to hero container (CLS fix)
8. Added width/height to logo images in navbar-default + navbar-center (CLS fix)
9. Added width/height to card images in cards.html (CLS fix)
10. Removed async CSS hack (`media="print" onload="this.media='all'"` → normal load)
11. Merged master into branch to pick up font fix (commit `45f9cc7`)

**Branch commits:** `162d25a` → `c2a6392` → `9228e44`
**Branch deploy:** `https://phase1-performance-fixes--ethicalfrenchie.netlify.app`

## What's Next (before merge)
1. **Replace UIkit `data-uk-sticky` with CSS `position: sticky`** in `_includes/partials/header.html` lines 60-69
   - This eliminates the last CLS source (0.394 from UIkit's placeholder div)
   - Trade-off: lose scroll-up-to-show-nav animation (nav stays visible always)
   - See site-perf-log.md Session 4 continued for exact before/after code
2. Test locally + on Netlify branch deploy
3. Commit `docs/` (design doc + implementation plan, currently untracked)
4. Add `.playwright-mcp/` to `.gitignore`
5. Present results to James for merge approval

## What's After Merge
1. **Heymarket click-to-load** (evaluate after merge results) — replace widget (~240KB JS) with CSS-only bubble, load JS on click only
2. Consolidate 3 GTM scripts → 1 GTM container
3. Image optimization (195MB uploads/ folder → WebP for blog/puppy pages)
4. Schema.html cleanup (600 lines, broken Hugo syntax)
5. Pawstronaut (Astro) migration

## Tech Stack (current, being optimized)
- **Platform**: Jekyll, EON theme (UIkit 3.3.6) — ABANDONED
- **Hosting**: Netlify (static deploy) — KEEPING
- **Font**: Self-hosted Montserrat woff2 (37KB, variable, font-display:swap) ✅
- **CSS**: main.css loaded normally (render-blocking but same-domain cached — this is correct) ✅
- **JS**: main.min.js deferred to body ✅ (was in head async)
- **3rd Party**: All deferred to body ✅ — GA4+Bing, Omnisend, Heymarket
- **Sticky nav**: UIkit `data-uk-sticky` (needs replacing with CSS `position: sticky` — see "What's Next")

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
