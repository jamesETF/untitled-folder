---
title: Dolly
description: Meet Dolly, a sweet and goofy blue and tan fluffy French Bulldog — compact, charming, and guaranteed to make you smile every single day.
subtitle: Blue & Tan Fluffy Frenchie Dolly
width: full
image: french-bulldog-puppies/dolly/dolly-4.webp
topics: [Our Puppies, Blue French Bulldog]

navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light

parallax: false
permalink: /french-bulldog-puppies/dolly
hubspotneeded: true
chat: true

gender: Female
color_coat: Blue and Tan Fluffy
age_weeks: 6
dob: 2026-01-20
ready_date: 2026-03-03
estimated_adult_weight_lbs: "20-22"
price: 0
status: available
microchipped: true
akc_papers: true
parents: ""
date: 2026-03-03
last_modified_at: 2026-03-03
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">

<style>
/* ============================================================
   LUNA PUPPY PAGE V2 — CUSTOM DESIGN SYSTEM
   Bespoke components for a premium puppy listing experience.
   V2: Playfair Display accent font, mobile clipping fixes,
   first-person hero treatment.
   ============================================================ */

/* --- Hide the default EON theme hero container --- */
/* The header.html partial always renders a .uk-position-relative
   wrapper with min-height:60vh directly on body. We collapse it
   since we have our own custom hero component below. */
body > .uk-position-relative[style*="min-height"] {
  min-height: 0 !important;
  height: 0 !important;
  overflow: hidden;
  padding: 0 !important;
  margin: 0 !important;
}

/* --- CSS Custom Properties --- */
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
  --luna-shadow-lg: 0 8px 40px rgba(0,0,0,0.12);
  --luna-shadow-xl: 0 16px 64px rgba(0,0,0,0.14);
  --luna-radius: 12px;
  --luna-radius-lg: 20px;
  --luna-radius-pill: 100px;
  --luna-transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --luna-font: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --luna-font-accent: 'Playfair Display', Georgia, serif;
}

/* --- Global box-sizing fix for mobile overflow --- */
*, *::before, *::after {
  box-sizing: border-box;
}
/* Prevent any horizontal overflow on mobile */
html, body {
  overflow-x: hidden;
}

/* --- Reveal Animation System --- */
.luna-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.luna-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.luna-reveal-delay-1 { transition-delay: 0.1s; }
.luna-reveal-delay-2 { transition-delay: 0.2s; }
.luna-reveal-delay-3 { transition-delay: 0.3s; }
.luna-reveal-delay-4 { transition-delay: 0.4s; }

/* --- Section Spacing --- */
.luna-section {
  padding: clamp(48px, 8vw, 96px) 0;
}
.luna-section--compact {
  padding: clamp(32px, 5vw, 56px) 0;
}
.luna-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 40px);
}
.luna-container--narrow {
  max-width: 720px;
}
.luna-container--wide {
  max-width: 1200px;
}

/* --- Typography --- */
.luna-eyebrow {
  font-family: var(--luna-font);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--luna-primary);
  margin-bottom: 12px;
  display: block;
}
.luna-heading {
  font-family: var(--luna-font);
  color: var(--luna-heading);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 16px;
}
.luna-heading--xl {
  font-size: clamp(2rem, 5vw, 3.2rem);
}
.luna-heading--lg {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}
.luna-heading--md {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
}
.luna-body {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.7;
  color: var(--luna-text);
}
.luna-lead {
  font-size: clamp(1.05rem, 1.4vw, 1.2rem);
  line-height: 1.65;
  color: var(--luna-text-light);
}

/* --- Accent Font (Playfair Display) --- */
.luna-accent {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
}
.luna-hero__greeting {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin: 0 0 4px;
  display: block;
}
.luna-hero__name {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(2.8rem, 8vw, 5rem);
  color: #fff;
  line-height: 1.05;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}
.luna-eyebrow--accent {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--luna-primary);
  margin-bottom: 8px;
  display: block;
}

/* ============================================================
   1. HERO SECTION — Cinematic full-bleed
   ============================================================ */
.luna-hero {
  position: relative;
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: #1a1a1a;
}
@media (max-width: 768px) {
  .luna-hero {
    min-height: 65vh;
  }
}
.luna-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  z-index: 1;
}
.luna-hero__gradient {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(to top,
      rgba(0,0,0,0.78) 0%,
      rgba(0,0,0,0.45) 35%,
      rgba(0,0,0,0.08) 65%,
      transparent 100%);
}
.luna-hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 0 clamp(24px, 5vw, 48px) clamp(32px, 6vw, 56px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  flex-wrap: wrap;
}
.luna-hero__text {
  flex: 1;
  min-width: 280px;
}
/* .luna-hero__name — V2: moved to accent font section above */
.luna-hero__breed {
  font-family: var(--luna-font);
  font-size: clamp(0.9rem, 1.5vw, 1.15rem);
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.04em;
  margin: 0;
}

/* Quick Stats Floating Card — V2: fixed mobile clipping */
.luna-hero__stats {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--luna-radius-lg);
  padding: 24px 28px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: var(--luna-shadow-xl);
  max-width: 100%;
}
@media (max-width: 768px) {
  .luna-hero__stats {
    width: calc(100% - 8px);
    padding: 16px 14px;
    gap: 12px;
    border-radius: var(--luna-radius);
  }
  .luna-hero__content {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 clamp(16px, 4vw, 32px) clamp(24px, 5vw, 40px);
  }
}
.luna-hero__stat {
  text-align: center;
  min-width: 64px;
}
.luna-hero__stat-value {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--luna-heading);
  display: block;
  line-height: 1.3;
}
.luna-hero__stat-label {
  font-family: var(--luna-font);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--luna-text-light);
  margin-top: 2px;
  display: block;
}
.luna-hero__stat + .luna-hero__stat {
  border-left: 1px solid var(--luna-border);
  padding-left: 24px;
}
@media (max-width: 480px) {
  .luna-hero__stat + .luna-hero__stat {
    border-left: none;
    padding-left: 0;
  }
  .luna-hero__stats {
    justify-content: space-between;
  }
}

/* ============================================================
   2. STICKY CTA BAR — Mobile bottom bar
   ============================================================ */
.luna-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--luna-border);
  padding: 12px 16px;
  padding-right: 72px; /* V2: space for Heymarket chat widget */
  display: flex;
  gap: 10px;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
}
.luna-cta-bar.is-visible {
  transform: translateY(0);
}
.luna-cta-bar__btn {
  flex: 1;
  max-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all var(--luna-transition);
  line-height: 1;
}
.luna-cta-bar__btn--primary {
  background: var(--luna-primary);
  color: #fff;
}
.luna-cta-bar__btn--primary:hover {
  background: var(--luna-primary-light);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(144,25,65,0.3);
}
.luna-cta-bar__btn--secondary {
  background: transparent;
  color: var(--luna-primary);
  border: 2px solid var(--luna-primary);
}
.luna-cta-bar__btn--secondary:hover {
  background: var(--luna-primary-glow);
  color: var(--luna-primary);
}
.luna-cta-bar__btn svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
@media (min-width: 769px) {
  .luna-cta-bar {
    display: none;
  }
}

/* ============================================================
   3. PHOTO GALLERY — Bento grid + lightbox
   ============================================================ */
.luna-gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  border-radius: var(--luna-radius-lg);
  overflow: hidden;
  aspect-ratio: 16 / 10;
}
@media (max-width: 640px) {
  .luna-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    aspect-ratio: unset;
  }
}
.luna-gallery__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--luna-bg-muted);
}
.luna-gallery__item:first-child {
  grid-row: 1 / -1;
}
@media (max-width: 640px) {
  .luna-gallery__item:first-child {
    grid-row: auto;
  }
}
.luna-gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}
.luna-gallery__item:hover .luna-gallery__img {
  transform: scale(1.04);
}
.luna-gallery__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.35s ease;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}
.luna-gallery__item:hover .luna-gallery__overlay {
  opacity: 1;
}
.luna-gallery__zoom {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--luna-heading);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.luna-gallery__item:hover .luna-gallery__zoom {
  transform: translate(-50%, -50%) scale(1);
}

/* ============================================================
   4. QUICK-INFO PILLS
   ============================================================ */
.luna-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.luna-pills--scroll {
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 4px;
}
.luna-pills--scroll::-webkit-scrollbar { display: none; }
.luna-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--luna-bg);
  border: 1.5px solid var(--luna-border);
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--luna-text);
  white-space: nowrap;
  scroll-snap-align: start;
  transition: all var(--luna-transition);
}
.luna-pill:hover {
  border-color: var(--luna-primary);
  color: var(--luna-primary);
  background: var(--luna-primary-glow);
}
.luna-pill__icon {
  font-size: 1.1em;
  line-height: 1;
}

/* ============================================================
   5. PERSONALITY CARD
   ============================================================ */
.luna-personality {
  background: var(--luna-bg-warm);
  border-radius: var(--luna-radius-lg);
  padding: clamp(32px, 5vw, 56px);
  position: relative;
  overflow: hidden;
}
.luna-personality::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  filter: blur(60px);
  pointer-events: none;
}
.luna-personality__quote {
  font-family: var(--luna-font-accent);
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  font-style: italic;
  color: var(--luna-primary);
  line-height: 1.4;
  margin: 0 0 24px;
  padding-left: 24px;
  border-left: 4px solid var(--luna-primary);
  position: relative;
}
.luna-personality__body {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.75;
  color: var(--luna-text);
  margin: 0 0 28px;
}
.luna-personality__body p {
  margin: 0 0 16px;
}
.luna-personality__body p:last-child {
  margin-bottom: 0;
}

/* Trait Tags */
.luna-traits {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 24px;
}
.luna-trait {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--luna-primary-dark);
  background: linear-gradient(135deg, var(--luna-primary-glow), rgba(144,25,65,0.06));
  border: 1px solid rgba(144,25,65,0.12);
  letter-spacing: 0.02em;
}

/* ============================================================
   6. TRUST SIGNAL STRIP
   ============================================================ */
.luna-trust {
  background: var(--luna-bg-muted);
  border-top: 1px solid var(--luna-border);
  border-bottom: 1px solid var(--luna-border);
}
.luna-trust__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
@media (max-width: 768px) {
  .luna-trust__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.luna-trust__item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 28px 20px;
  border-right: 1px solid var(--luna-border);
  transition: background 0.3s ease;
}
.luna-trust__item:last-child {
  border-right: none;
}
@media (max-width: 768px) {
  .luna-trust__item:nth-child(2) {
    border-right: none;
  }
  .luna-trust__item:nth-child(3),
  .luna-trust__item:nth-child(4) {
    border-top: 1px solid var(--luna-border);
  }
}
.luna-trust__item:hover {
  background: rgba(255,255,255,0.7);
}
.luna-trust__icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--luna-primary);
  transition: transform 0.3s ease;
}
.luna-trust__item:hover .luna-trust__icon {
  transform: scale(1.08);
}
.luna-trust__icon svg {
  width: 22px;
  height: 22px;
}
.luna-trust__text {
  font-family: var(--luna-font);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--luna-heading);
  line-height: 1.3;
}
.luna-trust__sub {
  font-family: var(--luna-font);
  font-size: 0.72rem;
  color: var(--luna-text-light);
  margin-top: 2px;
  display: block;
}

/* ============================================================
   7. PRICE DISPLAY
   ============================================================ */
.luna-price {
  background: var(--luna-bg);
  border: 1.5px solid var(--luna-border);
  border-radius: var(--luna-radius-lg);
  padding: clamp(24px, 4vw, 48px);
  text-align: center;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}
.luna-price::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--luna-primary), var(--luna-gold));
}
.luna-price__amount {
  font-family: var(--luna-font);
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--luna-primary);
  line-height: 1;
  margin: 16px 0 8px;
  letter-spacing: -0.02em;
}
.luna-price__note {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  color: var(--luna-text-light);
  margin: 0 0 24px;
}
.luna-price__includes {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  text-align: left;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 480px) {
  .luna-price__includes {
    grid-template-columns: 1fr;
  }
}
.luna-price__includes li {
  font-family: var(--luna-font);
  font-size: 0.82rem;
  color: var(--luna-text);
  display: flex;
  align-items: center;
  gap: 8px;
}
.luna-price__includes li::before {
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23901941' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: center;
}
.luna-price__divider {
  height: 1px;
  background: var(--luna-border);
  margin: 24px 0;
  border: none;
}

/* --- Buttons --- */
.luna-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all var(--luna-transition);
  line-height: 1;
}
.luna-btn--primary {
  background: var(--luna-primary);
  color: #fff;
}
.luna-btn--primary:hover {
  background: var(--luna-primary-light);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(144,25,65,0.25);
}
.luna-btn--outline {
  background: transparent;
  color: var(--luna-primary);
  border: 2px solid var(--luna-primary);
}
.luna-btn--outline:hover {
  background: var(--luna-primary-glow);
  color: var(--luna-primary);
}
.luna-btn--lg {
  padding: 18px 40px;
  font-size: 0.95rem;
}
.luna-btn--full {
  width: 100%;
}
.luna-btn svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ============================================================
   8. ACCORDION / DETAILS
   ============================================================ */
.luna-accordion {
  border: 1px solid var(--luna-border);
  border-radius: var(--luna-radius-lg);
  overflow: hidden;
}
.luna-accordion__item {
  border-bottom: 1px solid var(--luna-border);
}
.luna-accordion__item:last-child {
  border-bottom: none;
}
.luna-accordion__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: var(--luna-bg);
  border: none;
  cursor: pointer;
  font-family: var(--luna-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--luna-heading);
  text-align: left;
  transition: background 0.2s ease;
}
.luna-accordion__trigger:hover {
  background: var(--luna-bg-warm);
}
.luna-accordion__icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--luna-bg-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.35s ease, background 0.35s ease;
}
.luna-accordion__item.is-open .luna-accordion__icon {
  transform: rotate(45deg);
  background: var(--luna-primary-glow);
}
.luna-accordion__icon svg {
  width: 14px;
  height: 14px;
  color: var(--luna-text-light);
}
.luna-accordion__item.is-open .luna-accordion__icon svg {
  color: var(--luna-primary);
}
.luna-accordion__body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0 24px;
}
.luna-accordion__item.is-open .luna-accordion__body {
  max-height: 600px;
  padding: 0 24px 24px;
}
.luna-accordion__body-inner {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--luna-text);
}
.luna-accordion__body-inner ul {
  padding-left: 20px;
  margin: 8px 0 0;
}
.luna-accordion__body-inner li {
  margin-bottom: 6px;
}

/* ============================================================
   9. TESTIMONIAL CARD
   ============================================================ */
.luna-testimonial {
  background: var(--luna-bg);
  border: 1.5px solid var(--luna-border);
  border-radius: var(--luna-radius-lg);
  padding: clamp(28px, 4vw, 40px);
  position: relative;
}
.luna-testimonial::before {
  content: '\201C';
  font-family: Georgia, serif;
  font-size: 5rem;
  color: var(--luna-primary-glow);
  position: absolute;
  top: 8px;
  left: 20px;
  line-height: 1;
  pointer-events: none;
}
.luna-testimonial__stars {
  display: flex;
  gap: 3px;
  margin-bottom: 16px;
}
.luna-testimonial__star {
  color: var(--luna-gold);
}
.luna-testimonial__star svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}
.luna-testimonial__text {
  font-family: var(--luna-font);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--luna-text);
  margin: 0 0 20px;
  position: relative;
  z-index: 1;
}
.luna-testimonial__author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.luna-testimonial__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--luna-primary);
}
.luna-testimonial__name {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--luna-heading);
}
.luna-testimonial__source {
  font-family: var(--luna-font);
  font-size: 0.75rem;
  color: var(--luna-text-light);
}

/* ============================================================
   10. APPLICATION CTA SECTION
   ============================================================ */
.luna-final-cta {
  background: linear-gradient(135deg, var(--luna-primary-dark) 0%, var(--luna-primary) 50%, var(--luna-primary-light) 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.luna-final-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%);
  pointer-events: none;
}
.luna-final-cta__heading {
  font-family: var(--luna-font);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 12px;
  position: relative;
}
.luna-final-cta__sub {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  color: rgba(255,255,255,0.8);
  margin: 0 0 36px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.luna-final-cta__buttons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.luna-btn--white {
  background: #fff;
  color: var(--luna-primary);
}
.luna-btn--white:hover {
  background: #fff;
  color: var(--luna-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.luna-btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.5);
}
.luna-btn--ghost:hover {
  border-color: #fff;
  background: rgba(255,255,255,0.1);
  color: #fff;
}

/* ============================================================
   DIVIDER
   ============================================================ */
.luna-divider {
  width: 48px;
  height: 3px;
  background: var(--luna-primary);
  border: none;
  border-radius: 2px;
  margin: 20px 0 24px;
}
.luna-divider--center {
  margin-left: auto;
  margin-right: auto;
}

/* ============================================================
   TWO-COLUMN LAYOUT
   ============================================================ */
.luna-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
@media (max-width: 768px) {
  .luna-two-col {
    grid-template-columns: 1fr;
  }
}
.luna-two-col--reverse {
  direction: rtl;
}
.luna-two-col--reverse > * {
  direction: ltr;
}

/* ============================================================
   STATUS BADGE
   ============================================================ */
.luna-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.luna-status--available {
  background: #e8f5e9;
  color: #2e7d32;
}
.luna-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: luna-pulse 2s infinite;
}
@keyframes luna-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ============================================================
   GOOGLE REVIEW STRIP
   ============================================================ */
.luna-review-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  background: var(--luna-bg-muted);
  border-radius: var(--luna-radius);
  font-family: var(--luna-font);
}
.luna-review-strip__stars {
  display: flex;
  gap: 2px;
  color: var(--luna-gold);
}
.luna-review-strip__stars svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}
.luna-review-strip__text {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--luna-text);
}
.luna-review-strip__link {
  font-size: 0.78rem;
  color: var(--luna-primary);
  text-decoration: none;
  font-weight: 600;
}
.luna-review-strip__link:hover {
  text-decoration: underline;
  color: var(--luna-primary);
}

/* ============================================================
   EXISTING INCLUDE OVERRIDES (reviewsg, hubspot, acespecs2)
   Keep their layouts but harmonize with our design language.
   ============================================================ */
.luna-include-wrap {
  /* Let the includes breathe inside our design */
}
.luna-include-wrap .elfsight-app-ca69e58c-686b-41a6-a53d-dc911996b5fd {
  margin: 0 auto;
}

/* Hide the default header that the layout renders  */
/* Since width:full is set, the page layout doesn't wrap in article.
   We handle the header ourselves with the custom hero. */

/* Push content below sticky CTA bar on mobile */
@media (max-width: 768px) {
  .luna-page-bottom-spacer {
    height: 80px;
  }
}
</style>

<!-- ═══════════════════════════════════════════════════════════
     HERO SECTION — Full-bleed cinematic
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-hero" aria-label="Dolly hero">
  <img
    src="/uploads/french-bulldog-puppies/dolly/dolly-4.webp"
    alt="Dolly, a Blue and Tan Fluffy French Bulldog puppy available from Ethical Frenchie"
    class="luna-hero__img"
    fetchpriority="high"
    width="1200"
    height="800"
  >
  <div class="luna-hero__gradient" aria-hidden="true"></div>
  <div class="luna-hero__content">
    <div class="luna-hero__text">
      <span class="luna-status luna-status--available">
        <span class="luna-status__dot" aria-hidden="true"></span>
        Available Now
      </span>
      <span class="luna-hero__greeting">Meet</span>
      <h1 class="luna-hero__name">Hi, I'm Dolly!</h1>
      <p class="luna-hero__breed">Blue &amp; Tan Fluffy French Bulldog</p>
    </div>
    <div class="luna-hero__stats">
      <div class="luna-hero__stat">
        <span class="luna-hero__stat-value">6 Weeks</span>
        <span class="luna-hero__stat-label">Age</span>
      </div>
      <div class="luna-hero__stat">
        <span class="luna-hero__stat-value">Female</span>
        <span class="luna-hero__stat-label">Gender</span>
      </div>
      <div class="luna-hero__stat">
        <span class="luna-hero__stat-value">20-22 lbs</span>
        <span class="luna-hero__stat-label">Adult Size</span>
      </div>
      <div class="luna-hero__stat">
        <span class="luna-hero__stat-value">Ready</span>
        <span class="luna-hero__stat-label">Status</span>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     QUICK-INFO PILLS
     ═══════════════════════════════════════════════════════════ -->
<div class="luna-section--compact" style="background: var(--luna-bg);">
  <div class="luna-container luna-reveal">
    <ul class="luna-pills luna-pills--scroll" aria-label="Quick details about Dolly">
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#128054;</span> French Bulldog</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#9792;&#65039;</span> Female</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#127912;</span> Blue &amp; Tan Fluffy</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#128197;</span> 6 Weeks Old</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#10003;</span> Ready Now</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#128272;</span> Microchipped</li>
      <li class="luna-pill"><span class="luna-pill__icon" aria-hidden="true">&#128220;</span> AKC Registered</li>
    </ul>
  </div>
</div>


<!-- ═══════════════════════════════════════════════════════════
     TRUST SIGNAL STRIP
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-trust luna-section--compact" aria-label="Trust signals">
  <div class="luna-container--wide" style="margin: 0 auto; padding: 0;">
    <div class="luna-trust__grid">
      <div class="luna-trust__item luna-reveal">
        <div class="luna-trust__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <span class="luna-trust__text">Vet Examined</span>
          <span class="luna-trust__sub">Licensed veterinarian certified</span>
        </div>
      </div>
      <div class="luna-trust__item luna-reveal luna-reveal-delay-1">
        <div class="luna-trust__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <span class="luna-trust__text">1-Year Health Guarantee</span>
          <span class="luna-trust__sub">Written, not verbal</span>
        </div>
      </div>
      <div class="luna-trust__item luna-reveal luna-reveal-delay-2">
        <div class="luna-trust__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div>
          <span class="luna-trust__text">Nationwide Delivery</span>
          <span class="luna-trust__sub">Hand-delivered to your door</span>
        </div>
      </div>
      <div class="luna-trust__item luna-reveal luna-reveal-delay-3">
        <div class="luna-trust__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div>
          <span class="luna-trust__text">4.8/5 on Google</span>
          <span class="luna-trust__sub">87 verified reviews</span>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     PHOTO GALLERY — Bento grid layout
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-section" style="background: var(--luna-bg);" aria-label="Dolly's photos">
  <div class="luna-container luna-reveal">
    <div class="luna-gallery" data-uk-lightbox="animation: slide">
      <a href="/uploads/french-bulldog-puppies/dolly/dolly-4.webp" class="luna-gallery__item" data-caption="Dolly - Blue and Tan Fluffy French Bulldog">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src="/uploads/french-bulldog-puppies/dolly/dolly-4.webp"
          alt="Dolly the French Bulldog - Photo 1"
          class="luna-gallery__img"
          data-uk-img
          loading="lazy"
        >
        <div class="luna-gallery__overlay" aria-hidden="true">
          <div class="luna-gallery__zoom">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
          </div>
        </div>
      </a>
      <a href="/uploads/french-bulldog-puppies/dolly/dolly-updated-1.webp" class="luna-gallery__item" data-caption="Dolly - Blue and Tan Fluffy French Bulldog">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src="/uploads/french-bulldog-puppies/dolly/dolly-updated-1.webp"
          alt="Dolly the French Bulldog - Photo 2"
          class="luna-gallery__img"
          data-uk-img
          loading="lazy"
        >
        <div class="luna-gallery__overlay" aria-hidden="true">
          <div class="luna-gallery__zoom">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
          </div>
        </div>
      </a>
      <a href="/uploads/french-bulldog-puppies/dolly/dolly-updated-2.webp" class="luna-gallery__item" data-caption="Dolly - Blue and Tan Fluffy French Bulldog">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src="/uploads/french-bulldog-puppies/dolly/dolly-updated-2.webp"
          alt="Dolly the French Bulldog - Photo 3"
          class="luna-gallery__img"
          data-uk-img
          loading="lazy"
        >
        <div class="luna-gallery__overlay" aria-hidden="true">
          <div class="luna-gallery__zoom">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     PERSONALITY CARD + PRICE — Two column layout
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-section" style="background: var(--luna-bg-muted);" aria-label="About Dolly">
  <div class="luna-container">
    <div class="luna-two-col">

      <!-- Personality Card -->
      <div class="luna-reveal">
        <span class="luna-eyebrow--accent">Meet Dolly</span>
        <div class="luna-personality">
          <p class="luna-personality__quote">She wins everyone over before they even realize it's happening.</p>
          <div class="luna-personality__body">
            <p>Dolly is the one who walks into a room and suddenly everyone's smiling. There's something about her velvet-soft fluffy coat and those soulful eyes that makes people melt — and she knows it. She's sweet without being needy, playful without being chaotic, and has the kind of gentle presence that makes her <strong>impossible not to love</strong>.</p>
            <p>What makes Dolly truly special is how she <strong>connects</strong>. She reads the room like she's been doing it for years — playful when you want energy, calm when you need quiet. She's the kind of puppy who'll curl up next to you during a movie and still be the life of the party five minutes later.</p>
            <p>Blue and tan fluffy, compact, endlessly charming, and completely one of a kind — Dolly is 6 weeks old and <strong>ready to find her forever home</strong>. A fluffy this sweet doesn't come around often.</p>
          </div>
          <div class="luna-traits">
            <span class="luna-trait">&#129504; Observant</span>
            <span class="luna-trait">&#128514; Hilarious</span>
            <span class="luna-trait">&#128021; Social</span>
            <span class="luna-trait">&#127919; Clever</span>
            <span class="luna-trait">&#10084;&#65039; Affectionate</span>
            <span class="luna-trait">&#127918; Playful</span>
          </div>
        </div>
      </div>

      <!-- Price Card -->
      <div class="luna-reveal luna-reveal-delay-2">
        <span class="luna-eyebrow--accent">Investment</span>
        <div class="luna-price">
          <span class="luna-status luna-status--available" style="margin-bottom:8px;">
            <span class="luna-status__dot" aria-hidden="true"></span>
            Available
          </span>
          <!-- PRICING REMOVED — A/B test later. Original: $4,000 – $5,500 -->
          <div class="luna-price__amount" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">Inquire for Pricing</div>
          <p class="luna-price__note">Individually priced based on coat, markings &amp; overall quality</p>
          <hr class="luna-price__divider">
          <ul class="luna-price__includes">
            <li>Embark DNA screening</li>
            <li>Vet health certificate</li>
            <li>1-year health guarantee</li>
            <li>AKC registration</li>
            <li>Microchipped</li>
            <li>Age-appropriate vaccines</li>
            <li>Deworming complete</li>
            <li>Puppy starter kit</li>
          </ul>
          <a href="/application/" class="luna-btn luna-btn--primary luna-btn--full luna-btn--lg" style="margin-bottom:12px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Reserve Dolly — Apply Now
          </a>
          <a href="tel:212-739-0182" class="luna-btn luna-btn--outline luna-btn--full">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call (212) 739-0182
          </a>
          <div class="luna-review-strip" style="margin-top:20px;">
            <div class="luna-review-strip__stars" aria-label="4.8 out of 5 stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <span class="luna-review-strip__text">4.8/5</span>
            <a href="https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" target="_blank" rel="noopener" class="luna-review-strip__link">87 Google Reviews</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     DETAILS ACCORDION
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-section" style="background: var(--luna-bg);" aria-label="Dolly's details">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal" style="text-align: center; margin-bottom: 40px;">
      <span class="luna-eyebrow">Everything You Need to Know</span>
      <h2 class="luna-heading luna-heading--lg">Dolly's Details</h2>
    </div>

    <div class="luna-accordion luna-reveal" id="luna-accordion" role="region" aria-label="Puppy details accordion">
      <!-- Health & Vaccinations -->
      <div class="luna-accordion__item is-open">
        <button class="luna-accordion__trigger" aria-expanded="true">
          <span>Health &amp; Vaccinations</span>
          <span class="luna-accordion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </span>
        </button>
        <div class="luna-accordion__body">
          <div class="luna-accordion__body-inner">
            <p>Dolly has been thoroughly examined by a licensed veterinarian and comes with a clean bill of health.</p>
            <ul>
              <li><strong>Vaccinations:</strong> Up-to-date on DHPP</li>
              <li><strong>Deworming:</strong> Completed on schedule</li>
              <li><strong>Health Check:</strong> Fully examined by a licensed veterinarian</li>
              <li><strong>Microchipped:</strong> Yes, registered to new owner</li>
              <li><strong>DNA Health Screening:</strong> Embark tested (parents tested)</li>
              <li><strong>Health Guarantee:</strong> 1-year written health guarantee</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Temperament & Training -->
      <div class="luna-accordion__item">
        <button class="luna-accordion__trigger" aria-expanded="false">
          <span>Temperament &amp; Training</span>
          <span class="luna-accordion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </span>
        </button>
        <div class="luna-accordion__body">
          <div class="luna-accordion__body-inner">
            <ul>
              <li><strong>Personality:</strong> Observant, hilarious, and wonderfully social — a blue and tan thinker who loves playtime and gets along beautifully with other dogs</li>
              <li><strong>Ideal Home:</strong> Perfect for multi-pet households, families with children, or single owners looking for a clever companion</li>
              <li><strong>Training:</strong> Started on basic commands, crate training, and early socialization</li>
              <li><strong>Energy Level:</strong> Moderate — playful when it's time to play, calm when it's time to relax</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Breed Details -->
      <div class="luna-accordion__item">
        <button class="luna-accordion__trigger" aria-expanded="false">
          <span>Breed Details</span>
          <span class="luna-accordion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </span>
        </button>
        <div class="luna-accordion__body">
          <div class="luna-accordion__body-inner">
            <ul>
              <li><strong>Breed:</strong> French Bulldog</li>
              <li><strong>Gender:</strong> Female</li>
              <li><strong>Color:</strong> Blue and Tan</li>
              <li><strong>Age:</strong> 9 weeks old (ready now)</li>
              <li><strong>Estimated Adult Weight:</strong> 20-22 lbs (compact build)</li>
              <li><strong>Date of Birth:</strong> December 30, 2025</li>
              <li><strong>AKC Registration:</strong> Full AKC papers included</li>
              <li><strong>Microchipped:</strong> Yes</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Payment & Delivery -->
      <div class="luna-accordion__item">
        <button class="luna-accordion__trigger" aria-expanded="false">
          <span>Payment &amp; Delivery Options</span>
          <span class="luna-accordion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </span>
        </button>
        <div class="luna-accordion__body">
          <div class="luna-accordion__body-inner">
            <ul>
              <li><strong>Payment Methods:</strong> Credit/Debit Cards, PayPal, Venmo, Zelle</li>
              <li><strong>Financing:</strong> Available to approved families</li>
              <li><strong>Deposit:</strong> Required to reserve Dolly (non-refundable, transferable to future litter)</li>
              <li><strong>Nationwide Delivery:</strong> We hand-deliver anywhere in the U.S. via in-cabin flight nanny for a safe, low-stress experience</li>
              <li><strong>Local Pickup:</strong> Available in New York or Chicago</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="luna-accordion__item">
        <button class="luna-accordion__trigger" aria-expanded="false">
          <span>Important Disclaimer</span>
          <span class="luna-accordion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </span>
        </button>
        <div class="luna-accordion__body">
          <div class="luna-accordion__body-inner">
            <p>All our puppies are raised with love and care, and we work to match them with the perfect families. Please note that deposits to reserve a puppy are non-refundable; however, the deposit is transferable to a different litter in the future.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     FEATURED TESTIMONIAL
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-section" style="background: var(--luna-bg-muted);" aria-label="Customer review">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal" style="text-align:center; margin-bottom: 36px;">
      <span class="luna-eyebrow">What Our Families Say</span>
      <h2 class="luna-heading luna-heading--lg">Real Reviews From Real Families</h2>
    </div>

    <div class="luna-two-col" style="gap: 20px;">
      <div class="luna-testimonial luna-reveal">
        <div class="luna-testimonial__stars" aria-label="5 stars">
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
        </div>
        <p class="luna-testimonial__text">James and his team made the entire process seamless. From our first FaceTime call to the day our puppy arrived, we felt completely supported. Our Frenchie is healthy, happy, and exactly what we hoped for.</p>
        <div class="luna-testimonial__author">
          <div class="luna-testimonial__avatar">NB</div>
          <div>
            <span class="luna-testimonial__name">Nikol B.</span>
            <span class="luna-testimonial__source">Google Review</span>
          </div>
        </div>
      </div>

      <div class="luna-testimonial luna-reveal luna-reveal-delay-2">
        <div class="luna-testimonial__stars" aria-label="5 stars">
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="luna-testimonial__star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
        </div>
        <p class="luna-testimonial__text">Best decision we ever made. Ethical Frenchie was transparent, communicative, and genuinely cared about matching us with the right puppy. Worth every penny.</p>
        <div class="luna-testimonial__author">
          <div class="luna-testimonial__avatar">KL</div>
          <div>
            <span class="luna-testimonial__name">Kelly L.</span>
            <span class="luna-testimonial__source">Google Review</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     GOOGLE REVIEWS (Elfsight Widget)
     ═══════════════════════════════════════════════════════════ -->
<div class="luna-include-wrap">
{% include reviewsg.html
layout="1-1"
section_size="large"
section_background="default"
section_container="large"
section_content_align="center"
%}
</div>


<!-- ═══════════════════════════════════════════════════════════
     HOW IT WORKS (acespecs2 block)
     ═══════════════════════════════════════════════════════════ -->
{% include block.html
block="acespecs2"
section_size="medium"
section_padding_remove="top"
section_container="xsmall"
section_header_align="center"
section_title="How it works (How to Apply)"
block_title="false"
%}


<!-- ═══════════════════════════════════════════════════════════
     FINAL CTA — Conversion section
     ═══════════════════════════════════════════════════════════ -->
<section class="luna-final-cta luna-section" aria-label="Apply for Dolly">
  <div class="luna-container luna-container--narrow luna-reveal">
    <span class="luna-eyebrow" style="color: rgba(255,255,255,0.6);">Don't Wait</span>
    <h2 class="luna-final-cta__heading">Dolly Is Ready for Her Forever Home</h2>
    <p class="luna-final-cta__sub">A puppy this special won't be available long. Start your application today and take the first step toward bringing Dolly home.</p>
    <div class="luna-final-cta__buttons">
      <a href="/application/" class="luna-btn luna-btn--white luna-btn--lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Apply Now
      </a>
      <button type="button" class="luna-btn luna-btn--ghost luna-btn--lg" id="luna-chat-cta" onclick="(function(){var f=document.querySelector('.heymarket-fab');if(f){f.click()}else{window.location.href='tel:212-739-0182'}})()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Message Us
      </button>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════
     HUBSPOT FORM
     ═══════════════════════════════════════════════════════════ -->
{% include hubspotform.html %}


<!-- Bottom spacer for mobile sticky CTA bar -->
<div class="luna-page-bottom-spacer" aria-hidden="true"></div>


<!-- ═══════════════════════════════════════════════════════════
     STICKY CTA BAR (Mobile only)
     ═══════════════════════════════════════════════════════════ -->
<div class="luna-cta-bar" id="luna-cta-bar" aria-label="Quick actions">
  <button type="button" class="luna-cta-bar__btn luna-cta-bar__btn--primary" id="luna-mobile-chat" aria-label="Message us about Dolly">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    Message Us
  </button>
  <a href="tel:212-739-0182" class="luna-cta-bar__btn luna-cta-bar__btn--secondary" aria-label="Call us about Dolly">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Call Us
  </a>
</div>


<!-- ═══════════════════════════════════════════════════════════
     VANILLA JS — Scroll reveal + Accordion + Sticky CTA
     ═══════════════════════════════════════════════════════════ -->
<script>
(function() {
  'use strict';

  /* --- IntersectionObserver Scroll Reveal --- */
  var reveals = document.querySelectorAll('.luna-reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });
    reveals.forEach(function(el) {
      revealObserver.observe(el);
    });
  } else {
    /* Fallback: show everything immediately */
    reveals.forEach(function(el) {
      el.classList.add('is-visible');
    });
  }

  /* --- Custom Accordion --- */
  var accordion = document.getElementById('luna-accordion');
  if (accordion) {
    var items = accordion.querySelectorAll('.luna-accordion__item');
    items.forEach(function(item) {
      var trigger = item.querySelector('.luna-accordion__trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function() {
        var isOpen = item.classList.contains('is-open');
        /* Close all */
        items.forEach(function(otherItem) {
          otherItem.classList.remove('is-open');
          var btn = otherItem.querySelector('.luna-accordion__trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        /* Toggle clicked */
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* --- Sticky CTA Bar (mobile) — show after scrolling past hero --- */
  var ctaBar = document.getElementById('luna-cta-bar');
  var hero = document.querySelector('.luna-hero');
  if (ctaBar && hero && 'IntersectionObserver' in window) {
    var ctaObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
          ctaBar.classList.add('is-visible');
        } else {
          ctaBar.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0
    });
    ctaObserver.observe(hero);
  }

  /* --- Mobile Chat Button — iOS iMessage / Heymarket fallback --- */
  var mobileChat = document.getElementById('luna-mobile-chat');
  if (mobileChat) {
    mobileChat.addEventListener('click', function() {
      /* Check for iOS */
      var ua = navigator.userAgent || '';
      var isIOS = /iPhone|iPod/.test(ua) ||
        (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); /* iPadOS */
      if (isIOS) {
        window.location.href = 'https://bcrw.apple.com/urn:biz:aea0f1e1-d35e-4943-a9f1-141bc4d2db78';
        return;
      }
      /* Heymarket fallback */
      var fab = document.querySelector('.heymarket-fab');
      if (fab) {
        fab.click();
      } else {
        window.location.href = 'tel:212-739-0182';
      }
    });
  }

})();
</script>


<!-- ═══════════════════════════════════════════════════════════
     STRUCTURED DATA (JSON-LD)
     ═══════════════════════════════════════════════════════════ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Dolly - Blue and Tan Fluffy French Bulldog Puppy",
  "description": "Dolly is the one who wins everyone over before they even realize it. A blue and tan fluffy French Bulldog with velvet-soft fur, soulful eyes, and a personality that fills the room. Available from Ethical Frenchie.",
  "image": [
    "https://ethicalfrenchie.com/uploads/french-bulldog-puppies/dolly/dolly-4.webp",
    "https://ethicalfrenchie.com/uploads/french-bulldog-puppies/dolly/dolly-updated-1.webp",
    "https://ethicalfrenchie.com/uploads/french-bulldog-puppies/dolly/dolly-updated-2.webp"
  ],
  "sku": "dolly-2026",
  "brand": { "@type": "Organization", "name": "Ethical Frenchie" },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Breed", "value": "French Bulldog" },
    { "@type": "PropertyValue", "name": "Gender", "value": "Female" },
    { "@type": "PropertyValue", "name": "Color/Coat", "value": "Blue and Tan" },
    { "@type": "PropertyValue", "name": "Age", "value": "9 weeks" },
    { "@type": "PropertyValue", "name": "Estimated Adult Weight", "value": "20-22 lbs" },
    { "@type": "PropertyValue", "name": "Microchipped", "value": "Yes" }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://ethicalfrenchie.com/french-bulldog-puppies/dolly",
    "priceCurrency": "USD",
    "availability": "https://schema.org/LimitedAvailability"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "87",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
