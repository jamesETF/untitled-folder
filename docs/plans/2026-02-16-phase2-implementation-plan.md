# Phase 2: Script Defer + CLS Fix — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eliminate LCP render delay and CLS layout shift on ethicalfrenchie.com by moving scripts out of `<head>` and adding explicit dimensions to shifting elements.

**Architecture:** Move GA4/Bing from `<head>` to pre-closing body (alongside already-deferred Omnisend/Heymarket). Move UIkit JS from `<head> async` to body `defer`. Add hero image preload. Fix all CLS sources with explicit dimensions.

**Tech Stack:** Jekyll static site, Liquid templates, UIkit 3.3.6, Netlify hosting

**Design doc:** `docs/plans/2026-02-16-phase2-script-defer-cls-fix-design.md`

**Repo root:** `~/Library/CloudStorage/OneDrive-AshlandHarrison/Desktop/Ethical Frenchie/untitled-folder`

**Working branch:** `phase1/performance-fixes` (already exists, already has branch deploy on Netlify)

**Local testing:** `bundle exec jekyll serve` — note: some 3rd-party plugins (GA, Omnisend, Heymarket) are URL-bound and won't load via localhost. Use Netlify branch deploy for full verification.

---

### Task 1: Confirm we're on the right branch

**Step 1: Verify branch and pull latest**

```bash
git checkout phase1/performance-fixes && git pull origin phase1/performance-fixes
```

Expected: Already on `phase1/performance-fixes`, up to date.

---

### Task 2: Move GA + Bing from head to body

**Files:**
- Modify: `_includes/head.html` (remove line 2)
- Modify: `_includes/hook-pre-closing-body.html` (add GA include at top)

**Step 1: Remove GA include from head.html**

In `_includes/head.html`, remove this line (currently line 2):
```html
    {% include google-analytics.html %}
```

The `<head>` should now start with `<meta charset="utf-8">` immediately after the opening `<head>` tag.

**Step 2: Add GA include to hook-pre-closing-body.html**

In `_includes/hook-pre-closing-body.html`, add this BEFORE the existing Omnisend line (new line 1):
```html
<!-- Google Analytics + Bing (deferred from head to body for performance) -->
{% include google-analytics.html %}

```

So the file now starts with GA, then Omnisend, then Heymarket.

**Step 3: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds with no errors. Check `_site/index.html` to confirm:
- `<head>` no longer contains `gtag` or `googletagmanager`
- GA + Bing scripts now appear before `</body>`

---

### Task 3: Move main.min.js from head to body with defer

**Files:**
- Modify: `_includes/head.html` (remove line ~10, was line 11 before Task 2 edit)
- Modify: `_includes/hook-pre-closing-body.html` (add script after GA)

**Step 1: Remove main.min.js from head.html**

In `_includes/head.html`, remove this line:
```html
    <script async src="{{ "/assets/js/main.min.js" | relative_url }}"></script>
```

**Step 2: Add main.min.js to hook-pre-closing-body.html**

In `_includes/hook-pre-closing-body.html`, add this AFTER the GA include and BEFORE Omnisend:
```html
<!-- UIkit main.min.js (moved from head async to body defer — needs DOM to exist) -->
<script defer src="{{ "/assets/js/main.min.js" | relative_url }}"></script>

```

**Step 3: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds. Check `_site/index.html` to confirm:
- `<head>` has no `<script>` tags (except conditional Apple Business Chat)
- `main.min.js` appears with `defer` before `</body>`

---

### Task 4: Add hero image preload

**Files:**
- Modify: `_includes/head.html` (add preload link after favicon)

**Step 1: Add conditional preload to head.html**

In `_includes/head.html`, add this AFTER the favicon `<link>` line and BEFORE the RSS alternate `<link>`:
```html
    {% if page.header.background_image %}<link rel="preload" as="image" href="{{ site.uploads | absolute_url }}{{ page.header.background_image }}">{% endif %}
```

**Step 2: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds. Check `_site/index.html` to confirm `<link rel="preload" as="image" href="https://ethicalfrenchie.com/uploads/header-6.jpg">` appears in `<head>`. Check a page WITHOUT a hero (e.g., `_site/blog/index.html`) to confirm the preload tag is NOT present.

---

### Task 5: Fix hero container CLS

**Files:**
- Modify: `_includes/partials/header.html` (line 50 — the main hero `<div>`)

**Step 1: Add min-height to hero container**

In `_includes/partials/header.html`, line 50 has the hero container `<div>`. The `style=` attribute currently contains conditional background-color and background-image. Add `min-height: 60vh;` to the beginning of the style string.

Current line 50 style begins with:
```
style="{% if page.header.background_color
```

Change to:
```
style="min-height: 60vh;{% if page.header.background_color
```

This ensures the hero reserves vertical space before the background image loads.

**Step 2: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds. Check `_site/index.html` hero `<div>` has `style="min-height: 60vh;background-image: url(..."`.

---

### Task 6: Add dimensions to logo images

**Files:**
- Modify: `_includes/partials/navbar-default.html` (lines 8, 11)
- Modify: `_includes/partials/navbar-center.html` (lines 58, 61)

Logo dimensions: 250 x 33 px (both logo-light.png and logo-dark.png)

**Step 1: Fix navbar-default.html logos**

Line 8 — add width/height:
```html
            <img class="uk-logo-inverse" src="{{ site.uploads | absolute_url }}{{ site.logo_light }}" alt="{{ site.title }}" width="250" height="33">
```

Line 11 — add width/height:
```html
            <img src="{{ site.uploads | absolute_url }}{{ site.logo }}" alt="{{ site.title }}" width="250" height="33">
```

**Step 2: Fix navbar-center.html logos**

Line 58 — add width/height:
```html
                <img class="uk-logo-inverse" src="{{ site.uploads | absolute_url }}{{ site.logo_light }}" alt="{{ site.title }}" width="250" height="33">
```

Line 61 — add width/height:
```html
                <img src="{{ site.uploads | absolute_url }}{{ site.logo }}" alt="{{ site.title }}" width="250" height="33">
```

**Step 3: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds. Check `_site/index.html` — both logo `<img>` tags now have `width="250" height="33"`.

---

### Task 7: Add dimensions to card images

**Files:**
- Modify: `_includes/cards.html` (lines 47, 63, 80)

Card images are 900 x 640 px (verified for homepage blocks). All three `<img>` tags follow the same pattern with `data-uk-img` lazy loading.

**Step 1: Add width/height to all three card img tags**

Line 47 (media=left layout):
```html
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% if block.image contains 'http' %}{{ block.image }}{% else %}{{ site.uploads | absolute_url }}{{ block.image }}{% endif %}" alt="{{ block.title }}" width="900" height="640" data-uk-img>
```

Line 63 (media=right layout):
```html
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% if block.image contains 'http' %}{{ block.image }}{% else %}{{ site.uploads | absolute_url }}{{ block.image }}{% endif %}" alt="{{ block.title }}" width="900" height="640" data-uk-img>
```

Line 80 (default/top layout):
```html
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% if block.image contains 'http' %}{{ block.image }}{% else %}{{ site.uploads | absolute_url }}{{ block.image }}{% endif %}" alt="{{ block.title }}" width="900" height="640" data-uk-img>
```

**Step 2: Build and verify**

Run: `bundle exec jekyll build`
Expected: Build succeeds. Check `_site/index.html` — card images now have `width="900" height="640"`.

---

### Task 8: Commit and push

**Step 1: Verify all changes look correct**

Run: `git diff --stat` to see changed files. Should be exactly:
- `_includes/head.html`
- `_includes/hook-pre-closing-body.html`
- `_includes/partials/header.html`
- `_includes/partials/navbar-default.html`
- `_includes/partials/navbar-center.html`
- `_includes/cards.html`

**Step 2: Commit and push**

```bash
git add _includes/head.html _includes/hook-pre-closing-body.html _includes/partials/header.html _includes/partials/navbar-default.html _includes/partials/navbar-center.html _includes/cards.html && git commit -m "Phase 2: defer scripts to body, preload hero, fix CLS on hero/logos/cards" && git push origin phase1/performance-fixes
```

---

### Task 9: Verify on Netlify branch deploy + local

**Local test (quick sanity check):**

```bash
bundle exec jekyll serve
```

Open `http://localhost:4000` — verify: hero renders with min-height, nav logos have dimensions, cards have dimensions, no broken layout. Note: GA/Bing/Omnisend/Heymarket won't load on localhost (URL-bound).

**Netlify branch deploy (full verification):**

Branch deploys are already enabled for `phase1/performance-fixes` from Session 2.

**Step 1: Wait for Netlify build**

Push triggered in Task 8. Check Netlify dashboard or wait for deploy. Preview URL is the existing `phase1/performance-fixes` branch deploy URL.

**Step 2: Run Lighthouse CLI on preview**

```bash
npx lighthouse <preview-url> --output=json --output=html --output-path=/tmp/lighthouse-phase2 --chrome-flags="--headless"
```

**Step 3: Verify results**

Check:
- Performance score improved (target: 82-90, was 68)
- LCP improved (target: <3s, was 9.7s)
- CLS improved (target: <0.25, was 0.934)
- No new render-blocking resources
- Site looks correct (hero visible, nav works, cards render)

**Step 4: If results look good, merge to master**

```bash
git checkout master && git merge phase1/performance-fixes && git push origin master
```

---

### Task 10: Post-merge production verification

**Step 1: Run Lighthouse on production**

```bash
npx lighthouse https://ethicalfrenchie.com --output=json --output=html --output-path=/tmp/lighthouse-phase2-prod --chrome-flags="--headless"
```

**Step 2: Update session log and CLAUDE.md with results**

Record final scores in `memory/projects/site-perf-log.md` Session 4 and update the scores table in `CLAUDE.md`.

**Step 3: Generate Cowork handoff for PSI verification**

```
📋 COWORK HANDOFF
Task: Run PageSpeed Insights on https://ethicalfrenchie.com (mobile + desktop)
Context: Phase 2 just merged — scripts deferred, hero preloaded, CLS fixes applied
Expected result: Report mobile/desktop scores, LCP, CLS, any new issues
```
