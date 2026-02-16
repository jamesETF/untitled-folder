# Phase 2: Script Defer + CLS Fix — Design

**Date:** 2026-02-16
**Branch:** `phase1/performance-fixes` (continuing on existing branch)
**Approach:** B (Full CLS Fix)
**Approved by:** James

## Problem

Two major performance bottlenecks remain after Phase 1:

1. **LCP 9.7s** — 80% is render delay from ~750KB 3rd-party JS in `<head>` (GA4 triggers 2 extra Google Ads scripts = 405 KiB, plus Bing UET blocking parser). Hero image loads in 108ms but can't paint for 7.8s.
2. **CLS 0.934** — Hero container has no explicit height (shifts as background image loads + parallax calculates). Card images use 1x1 GIF placeholder with no width/height. Logo images unsized.

## Solution

Move render-blocking scripts out of `<head>`, preload hero image, and add explicit dimensions to all CLS-causing elements.

## Changes

### 1. `_includes/head.html`
- Remove `{% include google-analytics.html %}` (line 2)
- Remove `<script async src="{{ "/assets/js/main.min.js" | relative_url }}"></script>` (line 11)
- Add hero image preload after favicon link:
  ```html
  {% if page.header.background_image %}
  <link rel="preload" as="image" href="{{ site.uploads | absolute_url }}{{ page.header.background_image }}">
  {% endif %}
  ```

### 2. `_includes/hook-pre-closing-body.html`
- Add at top (before Omnisend):
  ```html
  <!-- Google Analytics + Bing (deferred from head for performance) -->
  {% include google-analytics.html %}

  <!-- UIkit main.min.js (moved from head async to body defer for better rendering) -->
  <script defer src="{{ "/assets/js/main.min.js" | relative_url }}"></script>
  ```

### 3. `_includes/partials/header.html`
- Add `min-height: 60vh;` to hero container style (line 50)

### 4. `_includes/partials/navbar-default.html`
- Add `width="250" height="33"` to both logo `<img>` tags (lines 8, 11)

### 5. `_includes/partials/navbar-center.html`
- Add `width="250" height="33"` to both logo `<img>` tags (lines 58, 61)

### 6. `_includes/cards.html`
- Add `width="900" height="640"` to all 3 card `<img>` tags (lines 47, 63, 80)

## Expected Impact

| Metric | Before | After | Why |
|--------|--------|-------|-----|
| LCP | 9.7s | ~2-3s | Render delay eliminated (scripts out of head) + preload eliminates load delay |
| CLS | 0.934 | <0.25 | Hero min-height + explicit image dimensions prevent shifts |
| Performance | 68 | 82-90 | Combined LCP + CLS improvement |

## Risks

- **GA conversion data loss:** If GA hasn't loaded when a Google Ads visitor bounces fast, that hit never fires. Acceptable for this business (high-ticket $5-8K puppies, users don't bounce in 500ms).
- **UIkit reflow:** Deferring UIkit means sticky nav + grid layouts apply after initial paint. Hero `min-height` mitigates the biggest shift. Monitor for secondary CLS from UIkit initialization.
- **Card image aspect ratios:** Hardcoding 900x640 assumes all card images match. If some don't, UIkit may handle the mismatch gracefully, but needs visual testing.

## Deferred (evaluate after results)

- **Heymarket click-to-load:** Replace full widget with lightweight CSS bubble, load ~240KB JS only on click. Saves JS weight but requires maintaining a fake bubble + handling load delay. Revisit after measuring Phase 2 impact.

## Workflow

Working on `phase1/performance-fixes` branch → local test with `bundle exec jekyll serve` (note: URL-bound 3rd-party scripts won't load on localhost) → Netlify branch deploy (already configured) → Lighthouse verification → merge to master
