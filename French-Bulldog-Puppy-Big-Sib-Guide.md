---
title: "Meet the Big Sib: New Puppy Guide"
description: "Bringing a Frenchie puppy home to an older pup? Our free six-step Big Sib guide covers the first hello, house rules and what's normal, plus a printable PDF."
width: full
image: /uploads/big-sib-guide/big-sib-og.jpg

navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light

parallax: false
permalink: /french-bulldog-puppy-big-sib-guide/
chat: true
last_modified_at: 2026-11-06
---
{%- comment -%}
  V2 (Luna) design, same system as the puppy supply list. All content comes from
  _data/big_sib_guide.yml. Edit the data file, not this page. The PDF is a separate build
  (see the note at the top of the data file).
{%- endcomment -%}
{%- assign g = site.data.big_sib_guide -%}
{%- assign img = '/uploads/big-sib-guide/' -%}
{%- assign shared = '/uploads/supply-list/' -%}


<style>
/* ============================================================
   MEET THE BIG SIB — V2 (Luna) design system
   Tokens and components copied from the puppy supply list, plus
   guide components (bs-*). Keep them in step.
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
.luna-container { max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 40px); }
.luna-container--wide { max-width: 1200px; }

.luna-eyebrow { font-family: var(--luna-font); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--luna-primary); margin-bottom: 12px; display: block; }
.luna-eyebrow--accent { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: 1.1rem;
  letter-spacing: 0.02em; color: var(--luna-primary); margin-bottom: 8px; display: block; }
.luna-heading { font-family: var(--luna-font); color: var(--luna-heading); font-weight: 800; line-height: 1.15; margin: 0 0 16px; }
.luna-heading--lg { font-size: clamp(1.7rem, 3.5vw, 2.5rem); }
.luna-lead { font-family: var(--luna-font); font-size: clamp(1.02rem, 1.4vw, 1.15rem); line-height: 1.65; color: var(--luna-text-light); margin: 0; }
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
.bs-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
@media (max-width: 768px) {
  .luna-hero { min-height: 72vh; }
  .luna-hero__content { flex-direction: column; align-items: flex-start; padding: 0 clamp(16px, 4vw, 32px) clamp(24px, 5vw, 40px); }
  .luna-hero__stats { width: calc(100% - 8px); padding: 16px 14px; gap: 12px; border-radius: var(--luna-radius); }
  .luna-hero__gradient { background: linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.68) 45%, rgba(0,0,0,0.3) 78%, rgba(0,0,0,0.12) 100%); }
  .luna-hero__greeting { color: rgba(255,255,255,0.78); }
}
@media (max-width: 768px) {
  /* Wide two-pup photo: stack it above the text on phones so both faces show. */
  .luna-hero { display: block; min-height: 0; }
  .luna-hero__img { position: relative; inset: auto; display: block; height: auto; aspect-ratio: 3 / 2; object-position: center; }
  .luna-hero__gradient { display: none; }
  .luna-hero__content { padding-top: 22px; }
}
@media (max-width: 480px) {
  .luna-hero__stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; padding: 14px 4px; }
  .luna-hero__stat { min-width: 0; padding: 0 4px; }
  .luna-hero__stat + .luna-hero__stat { border-left: 1px solid var(--luna-border); padding-left: 4px; }
  .luna-hero__stat-label { font-size: 0.58rem; letter-spacing: 0.05em; }
  .bs-hero-actions .luna-btn { padding: 14px 22px; }
}

/* --- Status pill --- */
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
.luna-btn--white:hover { background: #fff; color: var(--luna-primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); text-decoration: none; }
.luna-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.55); }
.luna-btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.1); color: #fff; text-decoration: none; }
.bs-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 15px 30px; border-radius: var(--luna-radius-pill); background: var(--luna-primary);
  color: #fff; font-family: var(--luna-font); font-size: 0.88rem; font-weight: 700; text-decoration: none; transition: all var(--luna-transition); }
.bs-btn-primary svg { width: 18px; height: 18px; flex-shrink: 0; }
.bs-btn-primary:hover { background: var(--luna-primary-light); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(144,25,65,0.25); text-decoration: none; }

/* The site's global CSS fills SVGs; these icons are stroke-only. */
.luna-trust__icon svg, .luna-btn svg, .bs-btn-primary svg, .luna-cta-bar__btn svg { fill: none; }

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
.bs-welcome-img { width: 100%; height: auto; display: block;
  -webkit-mask-image: radial-gradient(closest-side, #000 72%, transparent 100%); mask-image: radial-gradient(closest-side, #000 72%, transparent 100%); }
@media (max-width: 768px) { .luna-two-col { grid-template-columns: 1fr; } }

/* --- What's inside --- */
.bs-contents { margin-top: clamp(36px, 5vw, 56px); }
.bs-contents__title { font-family: var(--luna-font); color: var(--luna-heading); font-weight: 800; line-height: 1.2; font-size: clamp(1.35rem, 2.6vw, 1.8rem); margin: 0 0 20px; }
.bs-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; list-style: none; padding: 0; margin: 0; }
.bs-tile { display: flex; flex-direction: column; gap: 3px; height: 100%; padding: 16px 20px; background: #fff; border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius);
  text-decoration: none; transition: transform var(--luna-transition), box-shadow var(--luna-transition), border-color var(--luna-transition); }
.bs-tile:hover { transform: translateY(-3px); box-shadow: var(--luna-shadow-md); border-color: rgba(144,25,65,0.28); text-decoration: none; }
.bs-tile__emoji { font-size: 1.35rem; line-height: 1.25; }
.bs-tile__label { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: 0.95rem; color: var(--luna-primary); }
.bs-tile__title { font-family: var(--luna-font); font-weight: 700; font-size: 0.9rem; line-height: 1.3; color: var(--luna-heading); }
.bs-tile--cta { background: linear-gradient(135deg, var(--luna-primary-dark) 0%, var(--luna-primary) 100%); border-color: transparent; }
.bs-tile--cta .bs-tile__label, .bs-tile--cta .bs-tile__title { color: #fff; }
.bs-howto { font-family: var(--luna-font); font-size: 0.9rem; line-height: 1.6; color: var(--luna-text-light); margin: 18px 0 0; }
@media (max-width: 640px) {
  .bs-tiles { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .bs-tile { padding: 14px; }
  .bs-tiles li:last-child { grid-column: 1 / -1; }
}

/* --- Section heads --- */
.bs-anchor { scroll-margin-top: 90px; }
.bs-section--warm { background: var(--luna-bg-warm); }
.bs-head { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(28px, 5vw, 48px); }
.bs-head__cartoon { display: block; height: 72px; width: auto; margin: 0 0 10px; }
.bs-head__media { border-radius: var(--luna-radius-lg); overflow: hidden; aspect-ratio: 3 / 2; background: #fff; box-shadow: var(--luna-shadow-md); }
.bs-head__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
#rules .bs-head__media img { object-fit: contain; padding: 14px; }
#home .bs-head__media img { object-position: center 25%; }
@media (max-width: 768px) {
  .bs-head { grid-template-columns: 1fr; }
  .bs-head__media { order: -1; aspect-ratio: 16 / 10; }
  .bs-head__cartoon { height: 56px; }
}

/* --- Groups --- */
.bs-group { margin-top: clamp(32px, 4vw, 44px); }
.bs-group__head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
.bs-group__title { font-family: var(--luna-font); font-weight: 800; font-size: clamp(1.15rem, 2vw, 1.4rem); color: var(--luna-heading); margin: 0; }
.bs-tag { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: var(--luna-radius-pill);
  background: var(--luna-primary-glow); color: var(--luna-primary-dark); font-family: var(--luna-font); font-size: 0.76rem; font-weight: 700; }
.bs-note { font-family: var(--luna-font); color: var(--luna-text-light); font-size: 0.92rem; line-height: 1.6; margin: 14px 0 0; }
.bs-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; }
.bs-checks li { font-family: var(--luna-font); font-size: 0.92rem; line-height: 1.55; color: var(--luna-text); display: flex; gap: 10px; align-items: flex-start; }
.bs-checks li > span { flex: 1; min-width: 0; }
.bs-checks b { color: var(--luna-heading); }
.bs-checks li::before { content: ''; width: 20px; height: 20px; margin-top: 1px; border-radius: 50%; flex-shrink: 0; background-color: var(--luna-primary-glow);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901941' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E");
  background-size: 12px; background-repeat: no-repeat; background-position: center; }
.bs-checks--one { grid-template-columns: 1fr; }
.bs-checks--x li::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901941' stroke-width='3' stroke-linecap='round'%3E%3Cpath d='M6 6l12 12M18 6L6 18'/%3E%3C/svg%3E"); }
@media (max-width: 640px) { .bs-checks { grid-template-columns: 1fr; } }

/* --- Ethical Frenchie tip --- */
.bs-eftip { display: flex; align-items: flex-start; gap: 14px 20px; background: #fff; border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius-lg);
  padding: 22px 24px; margin-top: clamp(28px, 4vw, 40px); position: relative; overflow: hidden; }
.bs-eftip::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--luna-primary), var(--luna-gold)); }
.bs-must { display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; border-radius: var(--luna-radius-pill); background: var(--luna-gold-light); white-space: nowrap;
  color: #7a5c12; font-family: var(--luna-font); font-size: 0.68rem; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; flex-shrink: 0; }
.bs-eftip p { font-family: var(--luna-font); font-size: 0.95rem; line-height: 1.6; color: var(--luna-text); margin: 0; }
.bs-eftip b { color: var(--luna-primary-dark); }
@media (max-width: 640px) { .bs-eftip { flex-direction: column; align-items: flex-start; } }

/* --- Reading the room --- */
.bs-signs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.bs-sign { background: #fff; border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius-lg); padding: clamp(22px, 3vw, 30px); }
.bs-sign--warn { border-color: rgba(144,25,65,0.28); }
.bs-sign__title { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; color: var(--luna-primary); font-size: 1.35rem; margin: 0 0 14px; }
@media (max-width: 768px) { .bs-signs { grid-template-columns: 1fr; } }

/* --- What to skip --- */
.bs-avoid { display: flex; align-items: center; gap: 14px 22px; flex-wrap: wrap; background: #fff; border: 1.5px solid rgba(144,25,65,0.2);
  border-radius: var(--luna-radius-lg); padding: 18px 24px; margin-top: clamp(28px, 4vw, 40px); }
.bs-avoid__title { font-family: var(--luna-font); font-weight: 800; font-size: 0.92rem; color: var(--luna-primary-dark); margin: 0; }
.bs-avoid ul { display: flex; gap: 10px; flex-wrap: wrap; list-style: none; margin: 0; padding: 0; }
.bs-avoid li { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: var(--luna-radius-pill); background: var(--luna-bg-warm);
  font-family: var(--luna-font); font-size: 0.82rem; font-weight: 600; color: var(--luna-text); }
.bs-avoid li::before { content: '\2715'; font-weight: 800; color: var(--luna-primary); }

/* --- Timeline --- */
.bs-stops { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; list-style: none; padding: 0; margin: 0 0 clamp(28px, 4vw, 40px); position: relative; }
.bs-stops::before { content: ''; position: absolute; left: 8%; right: 8%; top: 17px; height: 2px; background: rgba(144,25,65,0.25); }
.bs-stop { position: relative; text-align: center; }
.bs-stop__dot { width: 36px; height: 36px; border-radius: 50%; background: #fff; border: 2px solid var(--luna-primary); color: var(--luna-primary);
  display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 0.9rem; line-height: 1; }
.bs-stop__when { display: block; font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: 1.02rem; color: var(--luna-primary); margin-bottom: 4px; }
.bs-stop__what { display: block; font-family: var(--luna-font); font-size: 0.82rem; line-height: 1.5; color: var(--luna-text); }
.bs-numbers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.bs-number { background: var(--luna-bg-warm); border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius); padding: 18px 20px; }
.bs-section--warm .bs-number { background: #fff; }
.bs-number__value { display: block; font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; font-size: 1.45rem; color: var(--luna-primary); line-height: 1.2; margin-bottom: 4px; }
.bs-number__label { display: block; font-family: var(--luna-font); font-size: 0.82rem; line-height: 1.45; color: var(--luna-text); }
@media (max-width: 768px) {
  .bs-stops { grid-template-columns: 1fr; gap: 0; }
  .bs-stops::before { left: 17px; right: auto; top: 8px; bottom: 24px; width: 2px; height: auto; }
  .bs-stop { display: grid; grid-template-columns: 36px 1fr; column-gap: 14px; text-align: left; padding-bottom: 16px; }
  .bs-stop:last-child { padding-bottom: 0; }
  .bs-stop__dot { grid-row: 1 / span 2; margin: 0; }
  .bs-numbers { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .bs-number { padding: 14px; }
}

/* --- Fridge list --- */
.bs-fridge { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: clamp(24px, 4vw, 36px); }
.bs-fridge__col { background: var(--luna-bg-warm); border: 1.5px solid var(--luna-border); border-radius: var(--luna-radius-lg); padding: clamp(22px, 3vw, 32px); }
.bs-fridge__col--dont { background: #fff; border-color: rgba(144,25,65,0.28); }
.bs-fridge__title { font-family: var(--luna-font-accent); font-style: italic; font-weight: 700; color: var(--luna-primary); font-size: 1.5rem; margin: 0 0 14px; }
.bs-fridge__actions { margin-top: 24px; }
@media (max-width: 768px) { .bs-fridge { grid-template-columns: 1fr; } }

/* --- Closing CTA --- */
.luna-final-cta { background: linear-gradient(135deg, var(--luna-primary-dark) 0%, var(--luna-primary) 50%, var(--luna-primary-light) 100%);
  color: #fff; text-align: center; position: relative; overflow: hidden; }
.luna-final-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%); pointer-events: none; }
.luna-final-cta__heading { font-family: var(--luna-font-accent); font-style: italic; font-size: clamp(2rem, 4.4vw, 3rem); font-weight: 700; color: #fff; margin: 0 0 12px; position: relative; }
.luna-final-cta__sub { font-family: var(--luna-font); font-size: clamp(0.95rem, 1.3vw, 1.1rem); color: rgba(255,255,255,0.82); margin: 0 auto 32px; max-width: 560px; position: relative; }
.luna-final-cta__buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; }
.bs-sources { font-family: var(--luna-font); font-size: 0.74rem; line-height: 1.6; color: var(--luna-text-light); text-align: center; max-width: 860px; margin: 0 auto; padding: 22px 20px; }

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
<section class="luna-hero" aria-label="Meet the Big Sib guide">
  <img src="{{ img }}{{ g.hero.image }}" alt="{{ g.hero.image_alt }}" class="luna-hero__img" fetchpriority="high" width="1500" height="1000">
  <div class="luna-hero__gradient" aria-hidden="true"></div>
  <div class="luna-hero__content">
    <div class="luna-hero__text">
      <span class="luna-status luna-status--must">{{ g.hero.pill }}</span>
      <span class="luna-hero__greeting">{{ g.hero.eyebrow }}</span>
      <h1 class="luna-hero__name">{{ g.hero.title }}</h1>
      <p class="luna-hero__breed">{{ g.hero.subtitle }}</p>
      <div class="bs-hero-actions">
        <a href="{{ g.pdf }}" class="luna-btn luna-btn--white" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download the PDF
        </a>
        <a href="#{{ g.sections.first.id }}" class="luna-btn luna-btn--ghost">Start the guide</a>
      </div>
    </div>
    <div class="luna-hero__stats">
      {%- for st in g.stats %}
      <div class="luna-hero__stat"><span class="luna-hero__stat-value">{{ st.value }}</span><span class="luna-hero__stat-label">{{ st.label }}</span></div>
      {%- endfor %}
    </div>
  </div>
</section>


<!-- TRUST STRIP -->
<section class="luna-trust" aria-label="About this guide">
  <div class="luna-trust__grid">
    {%- for t in g.trust %}
    <div class="luna-trust__item">
      <div class="luna-trust__icon" aria-hidden="true">
        {%- case t.icon -%}
        {%- when 'check' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        {%- when 'heart' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        {%- when 'chat' -%}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
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


<!-- WELCOME + WHAT'S INSIDE -->
<section class="luna-section" aria-label="Welcome">
  <div class="luna-container luna-reveal">
    <div class="luna-personality">
      <div class="luna-two-col">
        <div>
          <span class="luna-eyebrow">{{ g.welcome.eyebrow }}</span>
          <p class="luna-personality__quote">{{ g.welcome.quote }}</p>
          <div class="luna-personality__body">
            {%- for p in g.welcome.body %}
            <p>{{ p }}</p>
            {%- endfor %}
          </div>
        </div>
        <img class="bs-welcome-img" src="{{ shared }}{{ g.welcome.image }}" alt="{{ g.welcome.image_alt }}" loading="lazy" width="1400" height="1023">
      </div>
    </div>
    <div class="bs-contents">
      <span class="luna-eyebrow">{{ g.contents.eyebrow }}</span>
      <h2 class="bs-contents__title">{{ g.contents.title }}</h2>
      <ul class="bs-tiles">
        {%- for s in g.sections %}
        <li><a class="bs-tile" href="#{{ s.id }}"><span class="bs-tile__emoji" aria-hidden="true">{{ s.emoji }}</span><span class="bs-tile__label">{{ s.label }}</span><span class="bs-tile__title">{{ s.title }}</span></a></li>
        {%- endfor %}
        <li><a class="bs-tile" href="#{{ g.fridge.id }}"><span class="bs-tile__emoji" aria-hidden="true">{{ g.fridge.emoji }}</span><span class="bs-tile__label">{{ g.fridge.label }}</span><span class="bs-tile__title">{{ g.fridge.title }}</span></a></li>
        <li><a class="bs-tile bs-tile--cta" href="sms:+12127390182"><span class="bs-tile__emoji" aria-hidden="true">&#128241;</span><span class="bs-tile__label">Questions?</span><span class="bs-tile__title">Text 212-739-0182</span></a></li>
      </ul>
      <p class="bs-howto">{{ g.contents.howto }}</p>
    </div>
  </div>
</section>


<!-- STEPS + TIMELINE -->
{%- for s in g.sections %}
<section id="{{ s.id }}" class="luna-section bs-anchor{% cycle ' bs-section--warm', '' %}" aria-labelledby="{{ s.id }}-title">
  <div class="luna-container luna-container--wide">

    <div class="bs-head luna-reveal">
      <div>
        {%- if s.cartoon %}
        <img class="bs-head__cartoon" src="{{ shared }}{{ s.cartoon }}" alt="" aria-hidden="true" loading="lazy">
        {%- endif %}
        <span class="luna-eyebrow--accent">{{ s.label }}</span>
        <h2 id="{{ s.id }}-title" class="luna-heading luna-heading--lg">{{ s.title }}</h2>
        <hr class="luna-divider">
        <p class="luna-lead">{{ s.intro }}</p>
      </div>
      <div class="bs-head__media">
        <img src="{{ img }}{{ s.image }}" alt="{{ s.image_alt }}" loading="lazy">
      </div>
    </div>

    {%- if s.signs %}
    <div class="bs-signs">
      {%- for c in s.signs %}
      <div class="bs-sign bs-sign--{{ c.kind }}">
        <h3 class="bs-sign__title">{{ c.title }}</h3>
        <ul class="bs-checks bs-checks--one{% if c.kind == 'warn' %} bs-checks--x{% endif %}">
          {%- for i in c.items %}
          <li><span>{{ i }}</span></li>
          {%- endfor %}
        </ul>
        {%- if c.note %}
        <p class="bs-note">{{ c.note }}</p>
        {%- endif %}
      </div>
      {%- endfor %}
    </div>
    {%- endif %}

    {%- if s.stops %}
    <ol class="bs-stops">
      {%- for st in s.stops %}
      <li class="bs-stop">
        <div class="bs-stop__dot" aria-hidden="true">&#9829;</div>
        <span class="bs-stop__when">{{ st.when }}</span>
        <span class="bs-stop__what">{{ st.what }}</span>
      </li>
      {%- endfor %}
    </ol>
    {%- endif %}

    {%- if s.numbers %}
    <div class="bs-numbers">
      {%- for n in s.numbers %}
      <div class="bs-number"><span class="bs-number__value">{{ n.value }}</span><span class="bs-number__label">{{ n.label }}</span></div>
      {%- endfor %}
    </div>
    {%- endif %}

    {%- for gr in s.groups %}
    <div class="bs-group">
      <div class="bs-group__head">
        <h3 class="bs-group__title">{{ gr.title }}</h3>
        {%- if gr.tag %}<span class="bs-tag">{{ gr.tag }}</span>{% endif %}
      </div>
      <ul class="bs-checks">
        {%- for i in gr.items %}
        <li><span>{{ i }}</span></li>
        {%- endfor %}
      </ul>
    </div>
    {%- endfor %}

    {%- if s.avoid %}
    <div class="bs-avoid">
      <p class="bs-avoid__title">{{ s.avoid.title }}</p>
      <ul>
        {%- for a in s.avoid.items %}
        <li>{{ a }}</li>
        {%- endfor %}
      </ul>
    </div>
    {%- endif %}

    {%- if s.note %}
    <p class="bs-note">{{ s.note }}</p>
    {%- endif %}

    {%- if s.tip %}
    <div class="bs-eftip">
      <span class="bs-must">&#9733; Ethical Frenchie tip</span>
      <p>{{ s.tip }}</p>
    </div>
    {%- endif %}

  </div>
</section>
{%- endfor %}


<!-- FRIDGE LIST -->
<section id="{{ g.fridge.id }}" class="luna-section bs-anchor" aria-labelledby="{{ g.fridge.id }}-title">
  <div class="luna-container luna-container--wide">
    <span class="luna-eyebrow">{{ g.fridge.eyebrow }}</span>
    <h2 id="{{ g.fridge.id }}-title" class="luna-heading luna-heading--lg">{{ g.fridge.title }}</h2>
    <hr class="luna-divider">
    <p class="luna-lead">{{ g.fridge.intro }}</p>
    <div class="bs-fridge">
      <div class="bs-fridge__col bs-fridge__col--do">
        <h3 class="bs-fridge__title">{{ g.fridge.do.title }}</h3>
        <ul class="bs-checks bs-checks--one">
          {%- for i in g.fridge.do.items %}
          <li><span>{{ i }}</span></li>
          {%- endfor %}
        </ul>
      </div>
      <div class="bs-fridge__col bs-fridge__col--dont">
        <h3 class="bs-fridge__title">{{ g.fridge.dont.title }}</h3>
        <ul class="bs-checks bs-checks--one bs-checks--x">
          {%- for i in g.fridge.dont.items %}
          <li><span>{{ i }}</span></li>
          {%- endfor %}
        </ul>
      </div>
    </div>
    <div class="bs-fridge__actions">
      <a class="bs-btn-primary" href="{{ g.pdf }}#page=10" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Print the fridge list
      </a>
    </div>
  </div>
</section>


<!-- CLOSING CTA -->
<section class="luna-final-cta luna-section" aria-label="Download the guide">
  <div class="luna-container luna-reveal">
    <span class="luna-eyebrow" style="color: rgba(255,255,255,0.65);">{{ g.closing.eyebrow }}</span>
    <h2 class="luna-final-cta__heading">{{ g.closing.title }}</h2>
    <p class="luna-final-cta__sub">{{ g.closing.text }}</p>
    <div class="luna-final-cta__buttons">
      <a href="{{ g.pdf }}" class="luna-btn luna-btn--white luna-btn--lg" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download the PDF
      </a>
      <a href="/french-bulldog-puppies" class="luna-btn luna-btn--ghost luna-btn--lg">Meet Our Puppies</a>
      <a href="tel:+12127390182" class="luna-btn luna-btn--ghost luna-btn--lg">Text or call 212-739-0182</a>
    </div>
  </div>
</section>
<p class="bs-sources">{{ g.sources }} Updated {{ g.updated }}.</p>

<div class="luna-page-bottom-spacer" aria-hidden="true"></div>

<!-- STICKY MOBILE BAR -->
<div class="luna-cta-bar" id="luna-cta-bar" aria-label="Quick actions">
  <a href="{{ g.pdf }}" class="luna-cta-bar__btn luna-cta-bar__btn--primary" target="_blank" rel="noopener">
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

{%- comment -%}
  STRUCTURED DATA. Built from _data/big_sib_guide.yml, so it always matches the page.
  BreadcrumbList + HowTo (the six steps). The WebPage block comes from jekyll-seo-tag in head.html.
{%- endcomment -%}
{%- assign page_abs = page.url | absolute_url -%}
{%- assign pos = 0 -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "{{ '/' | absolute_url }}" },
        { "@type": "ListItem", "position": 2, "name": {{ g.title | jsonify }}, "item": "{{ page_abs }}" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "{{ page_abs }}#guide",
      "name": {{ g.title | jsonify }},
      "description": {{ page.description | jsonify }},
      "url": "{{ page_abs }}",
      "mainEntityOfPage": "{{ page_abs }}",
      "image": "{{ img | append: g.hero.image | absolute_url }}",
      "step": [
{%- for s in g.sections -%}
  {%- if s.step -%}
    {%- assign pos = pos | plus: 1 -%}
    {%- if pos > 1 %},{% endif %}
        { "@type": "HowToStep", "position": {{ pos }}, "name": {{ s.title | jsonify }}, "url": "{{ page_abs }}#{{ s.id }}", "text": {{ s.intro | jsonify }}, "image": "{{ img | append: s.image | absolute_url }}" }
  {%- endif -%}
{%- endfor %}
      ]
    }
  ]
}
</script>
