---
title: French Bulldog Puppy Supply List
description: Our free French Bulldog puppy supply list. Food, grooming, home, play and wardrobe picks for Frenchies, with the must-haves marked and a printable PDF.
width: full
image: /uploads/supply-list/supply-list-og.jpg

navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light

parallax: false
permalink: /french-bulldog-preparation-list/
chat: true
last_modified_at: 2026-09-26
---
{%- comment -%}
  V2 (Luna) design, same system as the puppy listings. All content comes from
  _data/supply_list.yml, which also builds the PDF (ruby scripts/supply-list/build-pdf.rb).
  Edit the data file, not this page.
{%- endcomment -%}
{%- assign sl = site.data.supply_list -%}
{%- assign img = '/uploads/supply-list/' -%}
{%- assign total = 0 -%}{%- assign musts = 0 -%}
{%- for s in sl.sections -%}{%- if s.feature -%}{%- assign total = total | plus: 1 -%}{%- endif -%}{%- for g in s.groups -%}{%- for i in g.items -%}{%- assign total = total | plus: 1 -%}{%- if i.must -%}{%- assign musts = musts | plus: 1 -%}{%- endif -%}{%- endfor -%}{%- endfor -%}{%- endfor -%}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">

<style>
/* ============================================================
   PUPPY SUPPLY LIST — V2 (Luna) design system
   Tokens and components copied from the V2 puppy listings, plus
   supply-list components (sl-*). Keep the two in step.
   ============================================================ */
body > .uk-position-relative[style*="min-height"] {
  min-height: 0 !important; height: 0 !important; overflow: hidden;
  padding: 0 !important; margin: 0 !important;
}
:root {
  --luna-primary: #901941;
  --luna-primary-light: #a82255;
  --luna-primary-dark: #6e1232;
  --luna-primary-glow: rgba(144, 25, 65, 0.12);
  --luna-bg: #fff;
  --luna-bg-warm: #faf8f6;
  --luna-bg-muted: #f5f3f0;
  --luna-text: #3d3d3d;
  --luna-text-light: #6b6b6b;
  --luna-heading: #1a1a1a;
  --luna-border: #e8e4e0;
  --luna-gold: #c9a84c;
  --luna-gold-light: #f5ecd7;
  --luna-shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --luna-shadow-md: 0 4px 20px rgba(0,0,0,0.08);
  --luna-shadow-xl: 0 16px 64px rgba(0,0,0,0.14);
  --luna-radius: 12px;
  --luna-radius-lg: 20px;
  --luna-radius-pill: 100px;
  --luna-transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --luna-font: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --luna-font-accent: 'Playfair Display', Georgia, serif;
}
*, *::before, *::after { box-sizing: border-box; }
html, body { overflow-x: hidden; }
html { scroll-behavior: smooth; }

.luna-reveal { opacity: 0; transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
.luna-reveal.is-visible { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) {
  .luna-reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
}

.luna-section { padding: clamp(48px, 8vw, 96px) 0; }
.luna-section--compact { padding: clamp(28px, 4vw, 44px) 0; }
.luna-container { max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 40px); }
.luna-container--narrow { max-width: 720px; }
.luna-container--wide { max-width: 1200px; }

.luna-eyebrow { font-family: var(--luna-font); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--luna-primary); margin-bottom: 12px; display: block; }
.luna-eyebrow--accent { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: 1.1rem;
  letter-spacing: 0.02em; color: var(--luna-primary); margin-bottom: 8px; display: block; }
.luna-heading { font-family: var(--luna-font); color: var(--luna-heading); font-weight: 800; line-height: 1.15; margin: 0 0 16px; }
.luna-heading--lg { font-size: clamp(1.7rem, 3.5vw, 2.5rem); }
.luna-body { font-family: var(--luna-font); font-size: clamp(0.95rem, 1.2vw, 1.05rem); line-height: 1.7; color: var(--luna-text); }
.luna-lead { font-size: clamp(1.02rem, 1.4vw, 1.15rem); line-height: 1.65; color: var(--luna-text-light); margin: 0; }
.luna-divider { width: 48px; height: 3px; background: var(--luna-primary); border: none; border-radius: 2px; margin: 18px 0 20px; }

/* --- Hero --- */
.luna-hero { position: relative; width: 100%; min-height: 75vh; display: flex; align-items: flex-end; overflow: hidden; background: #1a1a1a; }
.luna-hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 40%; z-index: 1; }
.luna-hero__gradient { position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.1) 68%, transparent 100%); }
.luna-hero__content { position: relative; z-index: 3; width: 100%; padding: 0 clamp(24px, 5vw, 48px) clamp(32px, 6vw, 56px);
  display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; flex-wrap: wrap; }
.luna-hero__text { flex: 1; min-width: 280px; }
.luna-hero__greeting { font-family: var(--luna-font); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.6); margin: 14px 0 4px; display: block; }
.luna-hero__name { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: clamp(2.6rem, 7vw, 4.4rem);
  color: #fff; line-height: 1.05; margin: 0 0 10px; letter-spacing: -0.01em; }
.luna-hero__breed { font-family: var(--luna-font); font-size: clamp(0.92rem, 1.5vw, 1.12rem); font-weight: 500;
  color: rgba(255,255,255,0.78); letter-spacing: 0.02em; margin: 0; max-width: 560px; line-height: 1.55; }
.luna-hero__stats { background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: var(--luna-radius-lg); padding: 24px 28px; display: flex; gap: 24px; flex-wrap: wrap; box-shadow: var(--luna-shadow-xl); max-width: 100%; }
.luna-hero__stat { text-align: center; min-width: 64px; }
.luna-hero__stat-value { font-family: var(--luna-font); font-size: 0.95rem; font-weight: 700; color: var(--luna-heading); display: block; line-height: 1.3; }
.luna-hero__stat-label { font-family: var(--luna-font); font-size: 0.68rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--luna-text-light); margin-top: 2px; display: block; }
.luna-hero__stat + .luna-hero__stat { border-left: 1px solid var(--luna-border); padding-left: 24px; }
.sl-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
@media (max-width: 768px) {
  .luna-hero { min-height: 72vh; }
  .luna-hero__content { flex-direction: column; align-items: flex-start; padding: 0 clamp(16px, 4vw, 32px) clamp(24px, 5vw, 40px); }
  .luna-hero__stats { width: calc(100% - 8px); padding: 16px 14px; gap: 12px; border-radius: var(--luna-radius); }
}
@media (max-width: 480px) {
  .luna-hero__stat + .luna-hero__stat { border-left: none; padding-left: 0; }
  .luna-hero__stats { justify-content: space-between; }
  .sl-hero-actions .luna-btn { padding: 14px 22px; }
}

/* --- Status pill (gold "must-have" variant) --- */
.luna-status { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
.luna-status--must { background: var(--luna-gold-light); color: #7a5c12; }

/* --- Buttons --- */
.luna-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 16px 32px; border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font); font-size: 0.9rem; font-weight: 700; text-decoration: none; cursor: pointer; border: none;
  transition: all var(--luna-transition); line-height: 1; }
.luna-btn svg { width: 18px; height: 18px; flex-shrink: 0; }
.luna-btn--lg { padding: 18px 40px; font-size: 0.95rem; }
.luna-btn--white { background: #fff; color: var(--luna-primary); }
.luna-btn--white:hover { background: #fff; color: var(--luna-primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.luna-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.55); }
.luna-btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.1); color: #fff; }

/* --- Jump pills --- */
.luna-pills { display: flex; gap: 10px; flex-wrap: wrap; padding: 0; margin: 0; list-style: none; }
.luna-pills--scroll { flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: 4px; }
.luna-pills--scroll::-webkit-scrollbar { display: none; }
@media (min-width: 900px) { .luna-pills--scroll { justify-content: center; } }
.luna-pill { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--luna-bg); border: 1.5px solid var(--luna-border);
  border-radius: var(--luna-radius-pill); font-family: var(--luna-font); font-size: 0.82rem; font-weight: 600; color: var(--luna-text);
  white-space: nowrap; scroll-snap-align: start; transition: all var(--luna-transition); text-decoration: none; }
.luna-pill:hover { border-color: var(--luna-primary); color: var(--luna-primary); background: var(--luna-primary-glow); text-decoration: none; }
.luna-pill__icon { font-size: 1.1em; line-height: 1; }
.luna-pill__count { font-size: 0.7rem; font-weight: 700; color: var(--luna-text-light); background: var(--luna-bg-muted); border-radius: var(--luna-radius-pill); padding: 2px 8px; }

/* --- Trust strip --- */
.luna-trust { background: var(--luna-bg-muted); border-top: 1px solid var(--luna-border); border-bottom: 1px solid var(--luna-border); }
.luna-trust__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1200px; margin: 0 auto; }
.luna-trust__item { display: flex; align-items: center; gap: 14px; padding: 26px 20px; border-right: 1px solid var(--luna-border); }
.luna-trust__item:last-child { border-right: none; }
.luna-trust__icon { width: 44px; height: 44px; border-radius: 50%; background: var(--luna-primary-glow); display: flex; align-items: center;
  justify-content: center; flex-shrink: 0; color: var(--luna-primary); }
.luna-trust__icon svg { width: 22px; height: 22px; }
.luna-trust__text { font-family: var(--luna-font); font-size: 0.82rem; font-weight: 700; color: var(--luna-heading); line-height: 1.3; display: block; }
.luna-trust__sub { font-family: var(--luna-font); font-size: 0.72rem; color: var(--luna-text-light); margin-top: 2px; display: block; }
@media (max-width: 768px) {
  .luna-trust__grid { grid-template-columns: repeat(2, 1fr); }
  .luna-trust__item { padding: 20px 14px; gap: 10px; }
  .luna-trust__item:nth-child(2) { border-right: none; }
  .luna-trust__item:nth-child(3), .luna-trust__item:nth-child(4) { border-top: 1px solid var(--luna-border); }
  .luna-trust__icon { width: 38px; height: 38px; }
}

/* --- Welcome (personality card) --- */
.luna-two-col { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(24px, 4vw, 48px); align-items: center; }
.luna-personality { background: var(--luna-bg-warm); border-radius: var(--luna-radius-lg); padding: clamp(28px, 5vw, 56px); position: relative; overflow: hidden; }
.luna-personality::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%;
  background: var(--luna-primary-glow); filter: blur(60px); pointer-events: none; }
.luna-personality__quote { font-family: var(--luna-font-accent); font-size: clamp(1.35rem, 2.6vw, 1.8rem); font-weight: 700; font-style: italic;
  color: var(--luna-primary); line-height: 1.35; margin: 0 0 22px; padding-left: 24px; border-left: 4px solid var(--luna-primary); }
.luna-personality__body p { font-family: var(--luna-font); font-size: clamp(0.95rem, 1.2vw, 1.05rem); line-height: 1.75; color: var(--luna-text); margin: 0 0 14px; }
.luna-personality__body p:last-child { margin: 0; font-weight: 700; color: var(--luna-primary-dark); }
.sl-welcome-img { width: 100%; height: auto; display: block; mix-blend-mode: multiply; }
@media (max-width: 768px) { .luna-two-col { grid-template-columns: 1fr; } }

/* --- Section heads --- */
.sl-anchor { scroll-margin-top: 90px; }
.sl-section--warm { background: var(--luna-bg-warm); }
.sl-head { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(28px, 5vw, 48px); }
.sl-head__cartoon { display: block; height: 72px; width: auto; margin: 0 0 10px; mix-blend-mode: multiply; }
.sl-head__media { border-radius: var(--luna-radius-lg); overflow: hidden; aspect-ratio: 4 / 3; background: #fff; box-shadow: var(--luna-shadow-md); }
.sl-head__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
@media (max-width: 768px) {
  .sl-head { grid-template-columns: 1fr; }
  .sl-head__media { order: -1; aspect-ratio: 16 / 10; }
  .sl-head__cartoon { height: 56px; }
}

/* --- Groups --- */
.sl-group { margin-top: clamp(36px, 5vw, 56px); }
.sl-group__head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
.sl-group__title { font-family: var(--luna-font); font-weight: 800; font-size: clamp(1.15rem, 2vw, 1.4rem); color: var(--luna-heading); margin: 0; }
.sl-tip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: var(--luna-radius-pill);
  background: var(--luna-primary-glow); color: var(--luna-primary-dark); font-family: var(--luna-font); font-size: 0.76rem; font-weight: 700; }
.sl-note { font-family: var(--luna-font); color: var(--luna-text-light); font-size: 0.95rem; line-height: 1.65; margin: 0 0 18px; max-width: 760px; }
.sl-checks { list-style: none; padding: 0; margin: 0 0 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; max-width: 900px; }
.sl-checks li { font-family: var(--luna-font); font-size: 0.9rem; line-height: 1.5; color: var(--luna-text); display: flex; gap: 10px; align-items: flex-start; }
.sl-checks li::before { content: ''; width: 20px; height: 20px; margin-top: 1px; border-radius: 50%; flex-shrink: 0; background-color: var(--luna-primary-glow);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901941' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E");
  background-size: 12px; background-repeat: no-repeat; background-position: center; }
@media (max-width: 640px) { .sl-checks { grid-template-columns: 1fr; } }

/* --- Product cards --- */
.sl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 16px; list-style: none; padding: 0; margin: 0; }
.sl-card { position: relative; display: flex; flex-direction: column; background: #fff; border: 1.5px solid var(--luna-border);
  border-radius: var(--luna-radius-lg); overflow: hidden; transition: transform var(--luna-transition), box-shadow var(--luna-transition), border-color var(--luna-transition); }
.sl-card:hover { transform: translateY(-3px); box-shadow: var(--luna-shadow-md); border-color: rgba(144,25,65,0.28); }
.sl-card__media { aspect-ratio: 1 / 1; padding: 22px; background: #fff; display: flex; align-items: center; justify-content: center; }
.sl-card__media img { width: 100%; height: 100%; object-fit: contain; display: block; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.sl-card:hover .sl-card__media img { transform: scale(1.04); }
.sl-card__body { padding: 14px 18px 18px; border-top: 1px solid var(--luna-border); display: flex; flex-direction: column; align-items: flex-start; gap: 6px; flex: 1; }
.sl-must { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: var(--luna-radius-pill); background: var(--luna-gold-light);
  color: #7a5c12; font-family: var(--luna-font); font-size: 0.66rem; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; }
.sl-card__name { font-family: var(--luna-font); font-weight: 700; font-size: 0.97rem; line-height: 1.3; color: var(--luna-heading); margin: 0; }
.sl-card__name a { color: inherit; text-decoration: none; }
.sl-card__name a::after { content: ''; position: absolute; inset: 0; z-index: 1; }
.sl-card__name a:focus-visible { outline: none; }
.sl-card:focus-within { outline: 3px solid var(--luna-primary); outline-offset: 2px; }
.sl-card__desc { font-family: var(--luna-font); font-size: 0.85rem; line-height: 1.55; color: var(--luna-text); margin: 0; }
.sl-card__shop { margin-top: auto; padding-top: 8px; font-family: var(--luna-font); font-size: 0.74rem; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--luna-primary); }
.sl-card:hover .sl-card__shop { color: var(--luna-primary-light); }
.sl-card__where { margin-top: auto; padding-top: 8px; font-family: var(--luna-font); font-size: 0.74rem; font-weight: 700; color: var(--luna-text-light); }
@media (max-width: 560px) {
  .sl-grid { grid-template-columns: 1fr; gap: 12px; }
  .sl-card { flex-direction: row; }
  .sl-card__media { flex: 0 0 116px; width: 116px; aspect-ratio: auto; min-height: 116px; padding: 14px; border-right: 1px solid var(--luna-border); }
  .sl-card__body { border-top: none; padding: 14px 16px; }
  .sl-card:hover { transform: none; }
}

/* --- Feeding: diet trio + featured pick --- */
.sl-diet { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: clamp(28px, 4vw, 40px); }
.sl-diet__card { background: #fff; border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius-lg); overflow: hidden; }
.sl-diet__img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
.sl-diet__body { padding: 18px 20px 22px; }
.sl-diet__title { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; color: var(--luna-primary); font-size: 1.2rem; margin: 0 0 8px; }
.sl-diet__text { font-family: var(--luna-font); font-size: 0.88rem; line-height: 1.6; color: var(--luna-text); margin: 0; }
@media (max-width: 768px) {
  .sl-diet { grid-template-columns: 1fr; }
  .sl-diet__card { display: grid; grid-template-columns: 120px 1fr; }
  .sl-diet__img { aspect-ratio: auto; height: 100%; }
  .sl-diet__body { padding: 14px 16px; }
}
.sl-feature { display: grid; grid-template-columns: 1fr 1fr; background: #fff; border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius-lg);
  overflow: hidden; position: relative; }
.sl-feature::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--luna-primary), var(--luna-gold)); }
.sl-feature__media { background: var(--luna-bg-muted); min-height: 280px; }
.sl-feature__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sl-feature__body { padding: clamp(24px, 4vw, 44px); }
.sl-feature__title { font-family: var(--luna-font); font-weight: 800; font-size: clamp(1.4rem, 2.6vw, 1.9rem); color: var(--luna-heading); margin: 0 0 16px; line-height: 1.2; }
.sl-feature__body p { font-family: var(--luna-font); font-size: 0.92rem; line-height: 1.65; color: var(--luna-text); margin: 0 0 12px; }
.sl-feature .sl-checks { grid-template-columns: 1fr; margin-bottom: 18px; }
.sl-btn-primary { display: inline-flex; align-items: center; gap: 8px; margin-top: 8px; padding: 15px 30px; border-radius: var(--luna-radius-pill); background: var(--luna-primary);
  color: #fff; font-family: var(--luna-font); font-size: 0.88rem; font-weight: 700; text-decoration: none; transition: all var(--luna-transition); }
.sl-btn-primary:hover { background: var(--luna-primary-light); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(144,25,65,0.25); text-decoration: none; }
@media (max-width: 768px) { .sl-feature { grid-template-columns: 1fr; } .sl-feature__media { min-height: 0; aspect-ratio: 3 / 2; } }

/* --- Play: what to skip --- */
.sl-avoid { display: flex; align-items: center; gap: 14px 22px; flex-wrap: wrap; background: #fff; border: 1.5px solid rgba(144,25,65,0.2);
  border-radius: var(--luna-radius-lg); padding: 18px 24px; margin-bottom: 8px; }
.sl-avoid__title { font-family: var(--luna-font); font-weight: 800; font-size: 0.92rem; color: var(--luna-primary-dark); margin: 0; }
.sl-avoid ul { display: flex; gap: 10px; flex-wrap: wrap; list-style: none; margin: 0; padding: 0; }
.sl-avoid li { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: var(--luna-radius-pill); background: var(--luna-bg-warm);
  font-family: var(--luna-font); font-size: 0.82rem; font-weight: 600; color: var(--luna-text); }
.sl-avoid li::before { content: '\2715'; font-weight: 800; color: var(--luna-primary); }

/* --- Closing CTA --- */
.luna-final-cta { background: linear-gradient(135deg, var(--luna-primary-dark) 0%, var(--luna-primary) 50%, var(--luna-primary-light) 100%);
  color: #fff; text-align: center; position: relative; overflow: hidden; }
.luna-final-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%); pointer-events: none; }
.luna-final-cta__heading { font-family: var(--luna-font-accent); font-style: italic; font-size: clamp(2rem, 4.4vw, 3rem); font-weight: 700; color: #fff; margin: 0 0 12px; position: relative; }
.luna-final-cta__sub { font-family: var(--luna-font); font-size: clamp(0.95rem, 1.3vw, 1.1rem); color: rgba(255,255,255,0.82); margin: 0 auto 32px; max-width: 520px; position: relative; }
.luna-final-cta__buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; }
.sl-disclosure { font-family: var(--luna-font); font-size: 0.74rem; color: var(--luna-text-light); text-align: center; margin: 0; padding: 22px 20px; }

/* --- Sticky mobile bar --- */
.luna-cta-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 999; background: rgba(255,255,255,0.97); backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px); border-top: 1px solid var(--luna-border); padding: 12px 16px; padding-right: 72px; display: flex; gap: 10px;
  justify-content: center; transform: translateY(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 -4px 24px rgba(0,0,0,0.08); }
.luna-cta-bar.is-visible { transform: translateY(0); }
.luna-cta-bar__btn { flex: 1; max-width: 220px; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 16px;
  border-radius: var(--luna-radius-pill); font-family: var(--luna-font); font-size: 0.85rem; font-weight: 700; text-decoration: none; cursor: pointer;
  border: none; line-height: 1; }
.luna-cta-bar__btn svg { width: 18px; height: 18px; flex-shrink: 0; }
.luna-cta-bar__btn--primary { background: var(--luna-primary); color: #fff; }
.luna-cta-bar__btn--primary:hover { color: #fff; }
.luna-cta-bar__btn--secondary { background: transparent; color: var(--luna-primary); border: 2px solid var(--luna-primary); }
@media (min-width: 769px) { .luna-cta-bar { display: none; } }
@media (max-width: 768px) { .luna-page-bottom-spacer { height: 80px; } }
</style>


<!-- HERO -->
<section class="luna-hero" aria-label="French Bulldog puppy supply list">
  <img src="{{ img }}{{ sl.hero.image }}" alt="{{ sl.hero.image_alt }}" class="luna-hero__img" fetchpriority="high" width="1678" height="1119">
  <div class="luna-hero__gradient" aria-hidden="true"></div>
  <div class="luna-hero__content">
    <div class="luna-hero__text">
      <span class="luna-status luna-status--must">&#9733; Must-haves marked</span>
      <span class="luna-hero__greeting">{{ sl.hero.eyebrow }}</span>
      <h1 class="luna-hero__name">{{ sl.hero.title }}</h1>
      <p class="luna-hero__breed">{{ sl.hero.subtitle }}</p>
      <div class="sl-hero-actions">
        <a href="{{ sl.pdf }}" class="luna-btn luna-btn--white" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download the PDF
        </a>
        <a href="#{{ sl.sections.first.id }}" class="luna-btn luna-btn--ghost">Start the list</a>
      </div>
    </div>
    <div class="luna-hero__stats">
      <div class="luna-hero__stat"><span class="luna-hero__stat-value">{{ total }}</span><span class="luna-hero__stat-label">Picks</span></div>
      <div class="luna-hero__stat"><span class="luna-hero__stat-value">{{ musts }}</span><span class="luna-hero__stat-label">Must-haves</span></div>
      <div class="luna-hero__stat"><span class="luna-hero__stat-value">{{ sl.sections.size }}</span><span class="luna-hero__stat-label">Categories</span></div>
      <div class="luna-hero__stat"><span class="luna-hero__stat-value">Free</span><span class="luna-hero__stat-label">PDF</span></div>
    </div>
  </div>
</section>


<!-- JUMP PILLS -->
<nav class="luna-section--compact" aria-label="Supply list sections">
  <div class="luna-container luna-container--wide luna-reveal">
    <ul class="luna-pills luna-pills--scroll">
      {%- for s in sl.sections -%}
      {%- assign n = 0 -%}{%- if s.feature -%}{%- assign n = 1 -%}{%- endif -%}
      {%- for g in s.groups -%}{%- assign n = n | plus: g.items.size -%}{%- endfor %}
      <li><a class="luna-pill" href="#{{ s.id }}"><span class="luna-pill__icon" aria-hidden="true">{{ s.emoji }}</span> {{ s.label }} <span class="luna-pill__count">{{ n }}</span></a></li>
      {%- endfor %}
      <li><a class="luna-pill" href="{{ sl.pdf }}" target="_blank" rel="noopener"><span class="luna-pill__icon" aria-hidden="true">&#128196;</span> Printable PDF</a></li>
    </ul>
  </div>
</nav>


<!-- TRUST STRIP -->
<section class="luna-trust" aria-label="About this list">
  <div class="luna-trust__grid">
    {%- for t in sl.trust %}
    <div class="luna-trust__item">
      <div class="luna-trust__icon" aria-hidden="true">
        {%- case t.icon -%}
        {%- when 'check' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        {%- when 'heart' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        {%- when 'download' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        {%- else -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        {%- endcase -%}
      </div>
      <div>
        <span class="luna-trust__text">{{ t.title }}</span>
        <span class="luna-trust__sub">{{ t.sub }}</span>
      </div>
    </div>
    {%- endfor %}
  </div>
</section>


<!-- WELCOME -->
<section class="luna-section" aria-label="Welcome">
  <div class="luna-container luna-reveal">
    <div class="luna-personality">
      <div class="luna-two-col">
        <div>
          <span class="luna-eyebrow">Before you shop</span>
          <p class="luna-personality__quote">{{ sl.welcome.quote }}</p>
          <div class="luna-personality__body">
            {%- for p in sl.welcome.body %}
            <p>{{ p }}</p>
            {%- endfor %}
          </div>
        </div>
        <img class="sl-welcome-img" src="{{ img }}{{ sl.welcome.image }}" alt="{{ sl.welcome.image_alt }}" loading="lazy" width="1400" height="1023">
      </div>
    </div>
  </div>
</section>


<!-- SECTIONS -->
{%- for s in sl.sections %}
<section id="{{ s.id }}" class="luna-section sl-anchor{% cycle ' sl-section--warm', '' %}" aria-labelledby="{{ s.id }}-title">
  <div class="luna-container luna-container--wide">

    <div class="sl-head luna-reveal">
      <div>
        {%- if s.cartoon %}
        <img class="sl-head__cartoon" src="{{ img }}{{ s.cartoon }}" alt="" aria-hidden="true" loading="lazy">
        {%- endif %}
        <span class="luna-eyebrow--accent">{{ s.label }}</span>
        <h2 id="{{ s.id }}-title" class="luna-heading luna-heading--lg">{{ s.title }}</h2>
        <hr class="luna-divider">
        <p class="luna-lead">{{ s.intro }}</p>
      </div>
      <div class="sl-head__media">
        <img src="{{ img }}{{ s.image }}" alt="{{ s.image_alt }}" loading="lazy">
      </div>
    </div>

    {%- if s.diet %}
    <div class="sl-diet luna-reveal">
      {%- for d in s.diet %}
      <div class="sl-diet__card">
        <img class="sl-diet__img" src="{{ img }}{{ d.image }}" alt="{{ d.title }}" loading="lazy">
        <div class="sl-diet__body">
          <h3 class="sl-diet__title">{{ d.title }}</h3>
          <p class="sl-diet__text">{{ d.text }}</p>
        </div>
      </div>
      {%- endfor %}
    </div>
    {%- endif %}

    {%- if s.feature %}
    {%- assign f = s.feature %}
    <div class="sl-feature luna-reveal">
      <div class="sl-feature__media">
        <img src="{{ img }}products/{{ f.slug }}.webp" alt="{{ f.name }}" loading="lazy">
      </div>
      <div class="sl-feature__body">
        <span class="luna-eyebrow">{{ f.eyebrow }}</span>
        <h3 class="sl-feature__title">{{ f.name }}</h3>
        <ul class="sl-checks">
          {%- for b in f.bullets %}
          <li>{{ b }}</li>
          {%- endfor %}
        </ul>
        {%- for p in f.text %}
        <p>{{ p }}</p>
        {%- endfor %}
        <a class="sl-btn-primary" href="{{ f.url }}" target="_blank" rel="sponsored noopener">{{ f.cta }} &rarr;</a>
      </div>
    </div>
    {%- endif %}

    {%- if s.avoid %}
    <div class="sl-avoid luna-reveal">
      <p class="sl-avoid__title">{{ s.avoid.title }}</p>
      <ul>
        {%- for a in s.avoid.items %}
        <li>{{ a }}</li>
        {%- endfor %}
      </ul>
    </div>
    {%- endif %}

    {%- for g in s.groups %}
    <div class="sl-group">
      <div class="sl-group__head">
        <h3 class="sl-group__title">{{ g.title }}</h3>
        {%- if g.tip %}<span class="sl-tip">{{ g.tip }}</span>{% endif %}
      </div>
      {%- if g.note %}
      <p class="sl-note">{{ g.note }}</p>
      {%- endif %}
      {%- if g.bullets %}
      <ul class="sl-checks">
        {%- for b in g.bullets %}
        <li>{{ b }}</li>
        {%- endfor %}
      </ul>
      {%- endif %}
      <ul class="sl-grid">
        {%- for i in g.items %}
        <li class="sl-card">
          <div class="sl-card__media">
            <img src="{{ img }}products/{{ i.slug }}.webp" alt="{{ i.name }}" loading="lazy" decoding="async">
          </div>
          <div class="sl-card__body">
            {%- if i.must %}
            <span class="sl-must">&#9733; Must-have</span>
            {%- endif %}
            <h4 class="sl-card__name">{% if i.url %}<a href="{{ i.url }}" target="_blank" rel="sponsored noopener">{{ i.name }}</a>{% else %}{{ i.name }}{% endif %}</h4>
            {%- if i.desc %}
            <p class="sl-card__desc">{{ i.desc }}</p>
            {%- endif %}
            {%- if i.url %}
            <span class="sl-card__shop" aria-hidden="true">Shop now &rarr;</span>
            {%- elsif i.where %}
            <span class="sl-card__where">{{ i.where }}</span>
            {%- endif %}
          </div>
        </li>
        {%- endfor %}
      </ul>
    </div>
    {%- endfor %}

  </div>
</section>
{%- endfor %}


<!-- CLOSING CTA -->
<section class="luna-final-cta luna-section" aria-label="Download the supply list">
  <div class="luna-container luna-container--narrow luna-reveal">
    <span class="luna-eyebrow" style="color: rgba(255,255,255,0.65);">{{ sl.closing.eyebrow }}</span>
    <h2 class="luna-final-cta__heading">{{ sl.closing.title }}</h2>
    <p class="luna-final-cta__sub">{{ sl.closing.text }}</p>
    <div class="luna-final-cta__buttons">
      <a href="{{ sl.pdf }}" class="luna-btn luna-btn--white luna-btn--lg" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download the PDF
      </a>
      <a href="/french-bulldog-puppies" class="luna-btn luna-btn--ghost luna-btn--lg">Meet Our Puppies</a>
    </div>
  </div>
</section>
<p class="sl-disclosure">{{ sl.closing.disclosure }} Updated {{ sl.updated }}.</p>

<div class="luna-page-bottom-spacer" aria-hidden="true"></div>

<!-- STICKY MOBILE BAR -->
<div class="luna-cta-bar" id="luna-cta-bar" aria-label="Quick actions">
  <a href="{{ sl.pdf }}" class="luna-cta-bar__btn luna-cta-bar__btn--primary" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    Get the PDF
  </a>
  <button type="button" class="luna-cta-bar__btn luna-cta-bar__btn--secondary" id="luna-mobile-chat">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    Message Us
  </button>
</div>

<script>
(function() {
  'use strict';
  var reveals = document.querySelectorAll('.luna-reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el) { io.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('is-visible'); });
  }

  var bar = document.getElementById('luna-cta-bar');
  var hero = document.querySelector('.luna-hero');
  if (bar && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { bar.classList.toggle('is-visible', !e.isIntersecting); });
    }, { threshold: 0 }).observe(hero);
  }

  var chat = document.getElementById('luna-mobile-chat');
  if (chat) {
    chat.addEventListener('click', function() {
      var ua = navigator.userAgent || '';
      var isIOS = /iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
      if (isIOS) { window.location.href = 'https://bcrw.apple.com/urn:biz:aea0f1e1-d35e-4943-a9f1-141bc4d2db78'; return; }
      var fab = document.querySelector('.heymarket-fab');
      if (fab) { fab.click(); } else { window.location.href = 'tel:212-739-0182'; }
    });
  }
})();
</script>
