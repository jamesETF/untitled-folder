---
title: About Us
subtitle: About Ethical Frenchie
description: How founder James Harrison built Ethical Frenchie — a health-tested, white-glove French Bulldog breeding program in NYC, born from his own frustrating puppy-buying experience.
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light
header:
  layout: center
  background_image: header-6.jpg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  background_align: center
  color: light
  header_size: xsmall
  heading_size: small
  parallax: false
extraseoabout: true
applechat: true
hubspotneeded: true
faqschema: "aboutfaq"
permalink: /about-us/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap" rel="stylesheet">

{% assign google_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" %}

<style>
/* ============================================================
   ABOUT US V2 ALT — "WARM COMMUNITY"
   Luna V2 foundation + new community-focused motifs:
   photo mosaic, journey path, pill badges, organic shapes,
   SVG paw dividers, conversation testimonials.
   ============================================================ */

/* --- Collapse default EON hero to compact 30vh --- */
.uk-position-relative[style*="min-height: 60vh"]{min-height:30vh !important}

/* --- CSS Custom Properties (Luna V2 base + Community extensions) --- */
:root {
  --luna-primary: #901941;
  --luna-primary-light: #a82255;
  --luna-primary-dark: #6e1232;
  --luna-primary-glow: rgba(144, 25, 65, 0.10);
  --luna-bg: #fff;
  --luna-bg-warm: #faf8f6;
  --luna-bg-muted: #f5f3f0;
  --luna-bg-cream: #f7f2ec;
  --luna-text: #3d3d3d;
  --luna-text-light: #6b6b6b;
  --luna-heading: #1a1a1a;
  --luna-border: #e8e4e0;
  --luna-gold: #c9a84c;
  --luna-gold-light: #f5ecd7;
  --luna-shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
  --luna-shadow-md: 0 4px 20px rgba(0,0,0,0.07);
  --luna-shadow-lg: 0 8px 40px rgba(0,0,0,0.10);
  --luna-radius: 12px;
  --luna-radius-lg: 20px;
  --luna-radius-pill: 100px;
  --luna-transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --luna-font: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --luna-font-accent: 'Playfair Display', Georgia, serif;

  /* Community-specific extensions */
  --alt-paw-opacity: 0.06;
  --alt-card-border: 3px solid rgba(144, 25, 65, 0.15);
  --alt-journey-dot: 12px;
  --alt-journey-line: 2px dashed rgba(144, 25, 65, 0.2);
}

*, *::before, *::after { box-sizing: border-box; }
html, body { overflow-x: hidden; }

/* --- Reveal Animation System --- */
.luna-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.luna-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.luna-reveal-delay-1 { transition-delay: 0.12s; }
.luna-reveal-delay-2 { transition-delay: 0.24s; }
.luna-reveal-delay-3 { transition-delay: 0.36s; }
.luna-reveal-delay-4 { transition-delay: 0.48s; }

/* --- Shared Section & Container --- */
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
.luna-heading--xl { font-size: clamp(2rem, 5vw, 3.2rem); }
.luna-heading--lg { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }
.luna-heading--md { font-size: clamp(1.25rem, 2.5vw, 1.75rem); }
.luna-body {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.7;
  color: var(--luna-text);
}

/* ============================================================
   1. PILL TRUST BADGES — Organic, rounded credential strip
   ============================================================ */
.alt-trust-bar {
  background: var(--luna-bg-cream);
}
.alt-trust-bar__row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.alt-trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--luna-bg);
  border-radius: var(--luna-radius-pill);
  box-shadow: var(--luna-shadow-sm);
  font-family: var(--luna-font);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--luna-heading);
  transition: all var(--luna-transition);
}
.alt-trust-pill:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateY(-2px);
}
.alt-trust-pill svg {
  width: 18px;
  height: 18px;
  stroke: var(--luna-primary);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

/* ============================================================
   2. SVG PAW DIVIDER — Refined section break (not emoji)
   ============================================================ */
.alt-paw-divider {
  text-align: center;
  padding: 4px 0;
  position: relative;
}
.alt-paw-divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--luna-border), transparent);
}
.alt-paw-divider svg {
  position: relative;
  width: 28px;
  height: 28px;
  fill: var(--luna-primary);
  opacity: var(--alt-paw-opacity);
  background: var(--luna-bg-warm);
  padding: 0 6px;
}

/* ============================================================
   3. NARRATIVE STORY — Full-width prose with floating images
   ============================================================ */
.alt-narrative {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.3vw, 1.08rem);
  line-height: 1.8;
  color: var(--luna-text);
}
.alt-narrative h2 {
  font-family: var(--luna-font-accent);
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  color: var(--luna-heading);
  margin: 0 0 20px;
  line-height: 1.25;
}
.alt-narrative p {
  margin: 0 0 20px;
}
.alt-narrative p:last-child {
  margin-bottom: 0;
}
.alt-narrative__float {
  float: right;
  width: 44%;
  margin: 0 0 24px 32px;
  border-radius: var(--luna-radius-lg);
  overflow: hidden;
  box-shadow: var(--luna-shadow-md);
}
.alt-narrative__float--left {
  float: left;
  margin: 0 32px 24px 0;
}
.alt-narrative__float img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}
@media (max-width: 640px) {
  .alt-narrative__float,
  .alt-narrative__float--left {
    float: none;
    width: 100%;
    margin: 0 0 24px 0;
  }
  .alt-narrative__float img {
    height: 240px;
  }
}

/* Inline pull quote — left-border style */
.alt-inline-quote {
  border-left: var(--alt-card-border);
  padding: 16px 0 16px 24px;
  margin: 28px 0;
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  line-height: 1.55;
  color: var(--luna-primary);
}

/* Founder signature */
.alt-signature {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--luna-border);
}
.alt-signature__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--luna-primary);
  flex-shrink: 0;
}
.alt-signature__name {
  font-family: var(--luna-font);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--luna-primary);
}
.alt-signature__title {
  font-family: var(--luna-font);
  font-size: 0.82rem;
  color: var(--luna-text-light);
}

/* ============================================================
   4. DIFFERENTIATOR CARDS — Left-border accent items
   ============================================================ */
.alt-diff__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 640px) {
  .alt-diff__grid {
    grid-template-columns: 1fr;
  }
}
.alt-diff-card {
  background: var(--luna-bg);
  border-radius: var(--luna-radius);
  padding: 24px 28px;
  border-left: 3px solid var(--luna-primary);
  box-shadow: var(--luna-shadow-sm);
  transition: all var(--luna-transition);
}
.alt-diff-card:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateX(4px);
}
.alt-diff-card__title {
  font-family: var(--luna-font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.alt-diff-card__title svg {
  width: 20px;
  height: 20px;
  stroke: var(--luna-primary);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}
.alt-diff-card__text {
  font-family: var(--luna-font);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--luna-text);
  margin: 0;
}

/* ============================================================
   5. PHOTO MOSAIC — Asymmetric behind-the-scenes grid
   ============================================================ */
.alt-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 12px;
}
.alt-mosaic__item {
  border-radius: var(--luna-radius);
  overflow: hidden;
  position: relative;
}
.alt-mosaic__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.alt-mosaic__item:hover img {
  transform: scale(1.05);
}
.alt-mosaic__item--tall {
  grid-row: span 2;
}
.alt-mosaic__item--wide {
  grid-column: span 2;
}
@media (max-width: 640px) {
  .alt-mosaic {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 180px 180px;
  }
  .alt-mosaic__item--tall {
    grid-row: span 1;
  }
  .alt-mosaic__item--wide {
    grid-column: span 1;
  }
}

/* ============================================================
   6. JOURNEY PATH — Horizontal process with dotted connector
   ============================================================ */
.alt-journey {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  position: relative;
}
.alt-journey__step {
  flex: 1;
  max-width: 260px;
  text-align: center;
  position: relative;
  padding: 0 16px;
}
/* Dotted connector line between steps */
.alt-journey__step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 30px;
  right: -8px;
  width: calc(100% - 76px);
  height: 0;
  border-top: var(--alt-journey-line);
  z-index: 0;
  transform: translateX(50%);
}
.alt-journey__number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--luna-primary);
  color: #fff;
  font-family: var(--luna-font);
  font-size: 1.3rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(144, 25, 65, 0.25);
}
.alt-journey__title {
  font-family: var(--luna-font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 6px;
}
.alt-journey__desc {
  font-family: var(--luna-font);
  font-size: 0.82rem;
  color: var(--luna-text-light);
  line-height: 1.55;
  margin: 0;
}
@media (max-width: 640px) {
  .alt-journey {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .alt-journey__step {
    max-width: 100%;
  }
  .alt-journey__step:not(:last-child)::after {
    display: none;
  }
}

/* ============================================================
   7. TEAM — Overlapping circle layout (organic feel)
   ============================================================ */
.alt-team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}
@media (max-width: 768px) {
  .alt-team__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
.alt-team-member {
  text-align: center;
}
.alt-team-member__photo-wrap {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;
}
.alt-team-member__photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--luna-bg);
  box-shadow: var(--luna-shadow-md);
  transition: all var(--luna-transition);
}
.alt-team-member:hover .alt-team-member__photo {
  transform: scale(1.06);
  box-shadow: var(--luna-shadow-lg);
}
/* Decorative ring behind photo */
.alt-team-member__photo-wrap::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px dashed rgba(144, 25, 65, 0.12);
}
.alt-team-member__name {
  font-family: var(--luna-font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0;
}
.alt-team-member__role {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-size: 0.88rem;
  color: var(--luna-primary);
  margin: 4px 0 0;
}
.alt-team-member__bio {
  font-family: var(--luna-font);
  font-size: 0.8rem;
  color: var(--luna-text-light);
  line-height: 1.5;
  margin: 8px 0 0;
}

/* ============================================================
   8. HEALTH TESTING — Horizontal icon cards
   ============================================================ */
.alt-health__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .alt-health__grid {
    grid-template-columns: 1fr;
  }
}
.alt-health-card {
  background: var(--luna-bg);
  border-radius: var(--luna-radius-lg);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--luna-shadow-sm);
  transition: all var(--luna-transition);
  border-bottom: 3px solid transparent;
}
.alt-health-card:hover {
  box-shadow: var(--luna-shadow-md);
  border-bottom-color: var(--luna-primary);
  transform: translateY(-4px);
}
.alt-health-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--luna-bg-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.alt-health-card__icon svg {
  width: 26px;
  height: 26px;
  stroke: var(--luna-primary);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.alt-health-card__title {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 8px;
}
.alt-health-card__text {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--luna-text);
  margin: 0;
}

/* ============================================================
   9. TESTIMONIAL CONVERSATION CARDS — Google review style
   ============================================================ */
.alt-testimonials__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 640px) {
  .alt-testimonials__grid {
    grid-template-columns: 1fr;
  }
}
.alt-testimonial {
  background: var(--luna-bg);
  border-radius: var(--luna-radius-lg);
  padding: 28px;
  box-shadow: var(--luna-shadow-sm);
  position: relative;
  transition: all var(--luna-transition);
  border: 1px solid var(--luna-border);
}
.alt-testimonial:hover {
  box-shadow: var(--luna-shadow-md);
  border-color: rgba(144, 25, 65, 0.2);
}
.alt-testimonial__stars {
  color: var(--luna-gold);
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.alt-testimonial__text {
  font-family: var(--luna-font);
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--luna-text);
  margin: 0 0 16px;
}
.alt-testimonial__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.alt-testimonial__author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.alt-testimonial__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--luna-bg-cream);
  color: var(--luna-primary);
  font-family: var(--luna-font);
  font-size: 0.78rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alt-testimonial__name {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--luna-heading);
}
.alt-testimonial__location {
  font-family: var(--luna-font);
  font-size: 0.75rem;
  color: var(--luna-text-light);
}
.alt-testimonial__google {
  font-family: var(--luna-font);
  font-size: 0.72rem;
  color: var(--luna-text-light);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}
.alt-testimonial__google:hover {
  color: var(--luna-primary);
}

/* ============================================================
   10. GOOGLE REVIEW STRIP — Maroon background
   ============================================================ */
.alt-review-strip {
  background: var(--luna-primary);
  text-align: center;
  color: #fff;
}
.alt-review-strip__stars {
  font-size: 1.4rem;
  color: var(--luna-gold);
  letter-spacing: 3px;
}
.alt-review-strip__rating {
  font-family: var(--luna-font);
  font-size: 1.1rem;
  font-weight: 700;
  margin: 6px 0 2px;
}
.alt-review-strip__count {
  font-family: var(--luna-font);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.7);
}
.alt-review-strip__link {
  display: inline-block;
  margin-top: 12px;
  font-family: var(--luna-font);
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 1px;
}
.alt-review-strip__link:hover {
  color: #fff;
  border-bottom-color: #fff;
}

/* ============================================================
   11. INLINE STATS — Woven into content, not a separate strip
   ============================================================ */
.alt-stats-inline {
  display: flex;
  justify-content: center;
  gap: clamp(24px, 5vw, 56px);
  flex-wrap: wrap;
}
.alt-stat {
  text-align: center;
}
.alt-stat__number {
  font-family: var(--luna-font);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--luna-primary);
  line-height: 1.1;
  display: block;
}
.alt-stat__label {
  font-family: var(--luna-font);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--luna-text-light);
  margin-top: 4px;
  display: block;
}

/* ============================================================
   12. BLOG LINK LIST — Simple, warm card style
   ============================================================ */
.alt-blog__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.alt-blog-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--luna-bg);
  border-radius: var(--luna-radius);
  box-shadow: var(--luna-shadow-sm);
  text-decoration: none;
  transition: all var(--luna-transition);
}
.alt-blog-link:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateX(6px);
}
.alt-blog-link__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.alt-blog-link__icon svg {
  width: 18px;
  height: 18px;
  stroke: var(--luna-primary);
  fill: none;
  stroke-width: 2;
}
.alt-blog-link__title {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--luna-heading);
}
.alt-blog-link__meta {
  font-family: var(--luna-font);
  font-size: 0.78rem;
  color: var(--luna-text-light);
  margin-top: 2px;
}
.alt-blog-link__arrow {
  margin-left: auto;
  font-size: 1.2rem;
  color: var(--luna-primary);
  opacity: 0.4;
  transition: all var(--luna-transition);
}
.alt-blog-link:hover .alt-blog-link__arrow {
  opacity: 1;
  transform: translateX(4px);
}

/* ============================================================
   13. DUAL CTA — Warm cream background (not gradient)
   ============================================================ */
.alt-cta {
  background: var(--luna-bg-cream);
  text-align: center;
  position: relative;
  overflow: hidden;
}
/* Subtle decorative ring */
.alt-cta::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px dashed rgba(144, 25, 65, 0.06);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.alt-cta__eyebrow {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-size: 1rem;
  color: var(--luna-primary);
  opacity: 0.7;
  margin-bottom: 8px;
  position: relative;
}
.alt-cta__heading {
  font-family: var(--luna-font);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--luna-heading);
  margin: 0 0 8px;
  position: relative;
}
.alt-cta__sub {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  color: var(--luna-text-light);
  margin-bottom: 28px;
  position: relative;
}
.alt-cta__buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.alt-cta__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 36px;
  border-radius: var(--luna-radius-pill);
  font-family: var(--luna-font);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all var(--luna-transition);
  cursor: pointer;
  border: none;
  line-height: 1;
}
.alt-cta__btn--primary {
  background: var(--luna-primary);
  color: #fff;
}
.alt-cta__btn--primary:hover {
  background: var(--luna-primary-dark);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(144, 25, 65, 0.3);
}
.alt-cta__btn--secondary {
  background: transparent;
  color: var(--luna-primary);
  border: 2px solid var(--luna-primary);
}
.alt-cta__btn--secondary:hover {
  background: var(--luna-primary-glow);
  color: var(--luna-primary);
}
.alt-cta__trust {
  font-family: var(--luna-font);
  font-size: 0.78rem;
  color: var(--luna-text-light);
  margin-top: 20px;
  position: relative;
}
</style>

<!-- ═══════════ SECTION 1: PILL TRUST BADGES ═══════════ -->
<div class="alt-trust-bar luna-section--compact">
  <div class="luna-container">
    <div class="alt-trust-bar__row luna-reveal">
      <span class="alt-trust-pill">
        <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
        Embark DNA Tested
      </span>
      <span class="alt-trust-pill">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        1-Year Health Guarantee
      </span>
      <span class="alt-trust-pill">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        AKC Registered
      </span>
      <span class="alt-trust-pill">
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Hand-Delivered Nationwide
      </span>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 2: ORIGIN STORY (Prose with floating images) ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-warm)">
  <div class="luna-container luna-container--narrow">
    <div class="alt-narrative luna-reveal">

      <div class="alt-narrative__float">
        <img src="{{ site.uploads | absolute_url }}content-1.jpg" alt="James with the French Bulldog moms at Ethical Frenchie" loading="lazy">
      </div>

      <h2>It Started with Vilma</h2>

      <p>When my wife wanted a dog — through little hints here and there — I picked up on it pretty quickly. So I started searching. And within about an hour I was completely overwhelmed. Every site was either an "Add Your Dog to Cart" checkout page, a Craigslist post that felt like a scam, or something in between.</p>

      <p>I spent hours weeding through the noise until I finally found our pup, Vilma. She changed everything for us.</p>

      <p>Three or four years later, Vilma was pregnant. We asked family, we asked friends — and when we still had puppies to place, I went back to the internet to figure out where people even advertise puppies. Turns out that side of it was even worse. Glorified classifieds pages. No transparency. No relationship.</p>

      <div class="alt-inline-quote">
        "There has to be an easier, trusted, seamless process for this."
      </div>

      <p>That thought became Ethical Frenchie.</p>

      <div class="alt-signature">
        <img class="alt-signature__avatar" src="{{ site.uploads | absolute_url }}james.jpg" alt="James Harrison" loading="lazy">
        <div>
          <div class="alt-signature__name">James Harrison</div>
          <div class="alt-signature__title">Founder, Ethical Frenchie &middot; Est. 2017</div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════ SVG PAW DIVIDER ═══════════ -->
<div style="background:var(--luna-bg)">
  <div class="alt-paw-divider">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="7" cy="5" rx="2.5" ry="3"/><ellipse cx="17" cy="5" rx="2.5" ry="3"/><ellipse cx="3.5" cy="11" rx="2.2" ry="2.8"/><ellipse cx="20.5" cy="11" rx="2.2" ry="2.8"/><path d="M12 22c-2.5 0-5-3-6.5-5.5S4 11 6.5 10s4 1.5 5.5 3 3-1.5 5.5-3 5 2 3.5 6.5S14.5 22 12 22z"/></svg>
  </div>
</div>

<!-- ═══════════ SECTION 3: WHAT WE DO DIFFERENTLY (Border-accent cards) ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">The Difference</span>
      <h2 class="luna-heading luna-heading--lg">What We Actually Do Differently</h2>
      <p class="luna-body" style="color:var(--luna-text-light);max-width:560px;margin:8px auto 0">Every single person gets the experience I wished I'd had as a buyer.</p>
    </div>

    <div class="alt-narrative luna-reveal" style="margin-bottom:32px">
      <div class="alt-narrative__float alt-narrative__float--left">
        <img src="{{ site.uploads | absolute_url }}about-us-2.jpg" alt="Renee meeting Ethical Frenchie families at a customer meetup" loading="lazy">
      </div>
      <p>As we started placing more puppies with more families, one thing became non-negotiable: transparency. That means a white-glove process — photos and videos of your puppy as they grow, a real relationship with the people raising them, and zero anxiety from start to finish.</p>
      <p>We don't do shopping carts. We do FaceTime calls so you can meet your puppy and the person behind it. We hand-deliver every dog ourselves — the person you talk to is the person who shows up at your door. And we stay in touch long after. Ask any of <a href="/happy-tails/" style="color:var(--luna-primary);font-weight:600">our families</a>.</p>
    </div>

    <div class="alt-diff__grid">
      <div class="alt-diff-card luna-reveal">
        <div class="alt-diff-card__title">
          <svg viewBox="0 0 24 24"><path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"/></svg>
          FaceTime Before You Commit
        </div>
        <p class="alt-diff-card__text">Meet your puppy and us on a live video call. No deposits until you're sure — and we're sure you're the right fit.</p>
      </div>
      <div class="alt-diff-card luna-reveal luna-reveal-delay-1">
        <div class="alt-diff-card__title">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Hand-Delivered to Your Door
        </div>
        <p class="alt-diff-card__text">Every puppy travels in-cabin with our team. No cargo. No middlemen. The person you spoke with is the person handing you the leash.</p>
      </div>
      <div class="alt-diff-card luna-reveal luna-reveal-delay-2">
        <div class="alt-diff-card__title">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Lifetime Support
        </div>
        <p class="alt-diff-card__text">Diet questions at 2 AM? Training issues at month three? We're a text away. That's not a marketing line — it's how we operate.</p>
      </div>
      <div class="alt-diff-card luna-reveal luna-reveal-delay-3">
        <div class="alt-diff-card__title">
          <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
          Embark DNA Reports Shared
        </div>
        <p class="alt-diff-card__text">Every breeding parent tested for 250+ genetic conditions. You get the full report before your puppy comes home — no hidden surprises.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 4: INLINE STATS ═══════════ -->
<div class="luna-section--compact" style="background:var(--luna-bg-warm)">
  <div class="luna-container">
    <div class="alt-stats-inline luna-reveal">
      <div class="alt-stat">
        <span class="alt-stat__number">200+</span>
        <span class="alt-stat__label">Puppies Placed</span>
      </div>
      <div class="alt-stat">
        <span class="alt-stat__number">2017</span>
        <span class="alt-stat__label">Year Founded</span>
      </div>
      <div class="alt-stat">
        <span class="alt-stat__number">4.8</span>
        <span class="alt-stat__label">Google Rating</span>
      </div>
      <div class="alt-stat">
        <span class="alt-stat__number">50</span>
        <span class="alt-stat__label">States Served</span>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 5: PHOTO MOSAIC ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container luna-container--wide">
    <div style="text-align:center;margin-bottom:clamp(24px,4vw,40px)" class="luna-reveal">
      <span class="luna-eyebrow">Behind the Scenes</span>
      <h2 class="luna-heading luna-heading--lg">Life at Ethical Frenchie</h2>
    </div>

    <div class="alt-mosaic luna-reveal">
      <div class="alt-mosaic__item alt-mosaic__item--tall">
        <img src="{{ site.uploads | absolute_url }}content-1.jpg" alt="James with the French Bulldog moms" loading="lazy">
      </div>
      <div class="alt-mosaic__item">
        <img src="{{ site.uploads | absolute_url }}about-us-2.jpg" alt="Renee at a customer meetup" loading="lazy">
      </div>
      <div class="alt-mosaic__item">
        <img src="{{ site.uploads | absolute_url }}about-us-3.jpg" alt="Walking the pups in NYC" loading="lazy">
      </div>
      <div class="alt-mosaic__item alt-mosaic__item--wide">
        <img src="{{ site.uploads | absolute_url }}header-6.jpg" alt="Our French Bulldogs" loading="lazy">
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 6: JOURNEY PATH (Apply → Meet → Welcome) ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-cream)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">The Process</span>
      <h2 class="luna-heading luna-heading--lg">How It Works</h2>
    </div>

    <div class="alt-journey luna-reveal">
      <div class="alt-journey__step">
        <div class="alt-journey__number">1</div>
        <div class="alt-journey__title">Apply Online</div>
        <p class="alt-journey__desc">Fill out a short application so we can learn about your home, lifestyle, and what you're looking for.</p>
      </div>
      <div class="alt-journey__step">
        <div class="alt-journey__number">2</div>
        <div class="alt-journey__title">Meet Us on FaceTime</div>
        <p class="alt-journey__desc">We'll introduce you to available puppies on a live video call. No pressure, no deposits until you're sure.</p>
      </div>
      <div class="alt-journey__step">
        <div class="alt-journey__number">3</div>
        <div class="alt-journey__title">Welcome Home</div>
        <p class="alt-journey__desc">We hand-deliver your puppy in-cabin, with full health records, DNA reports, and lifetime support.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 7: HEALTH & TESTING ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">Health Standards</span>
      <h2 class="luna-heading luna-heading--lg">The Testing Behind Every Puppy</h2>
      <p class="luna-body" style="color:var(--luna-text-light);max-width:560px;margin:8px auto 0">Health isn't a checkbox — it's the foundation of everything we do.</p>
    </div>

    <div class="alt-health__grid">
      <div class="alt-health-card luna-reveal">
        <div class="alt-health-card__icon">
          <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <div class="alt-health-card__title">Embark DNA Testing</div>
        <p class="alt-health-card__text">Every breeding parent is tested for 250+ conditions — CMR1, DM, HUU, JHC. Full reports shared with every buyer.</p>
      </div>
      <div class="alt-health-card luna-reveal luna-reveal-delay-1">
        <div class="alt-health-card__icon">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="alt-health-card__title">1-Year Written Guarantee</div>
        <p class="alt-health-card__text">Covers genetic and congenital conditions. A written guarantee you can hold us to — not a verbal promise.</p>
      </div>
      <div class="alt-health-card luna-reveal luna-reveal-delay-2">
        <div class="alt-health-card__icon">
          <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="alt-health-card__title">Complete Vet Care</div>
        <p class="alt-health-card__text">Vaccinations, deworming, microchip, and full veterinary examination — documented and ready before departure.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SVG PAW DIVIDER ═══════════ -->
<div style="background:var(--luna-bg-warm)">
  <div class="alt-paw-divider">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="7" cy="5" rx="2.5" ry="3"/><ellipse cx="17" cy="5" rx="2.5" ry="3"/><ellipse cx="3.5" cy="11" rx="2.2" ry="2.8"/><ellipse cx="20.5" cy="11" rx="2.2" ry="2.8"/><path d="M12 22c-2.5 0-5-3-6.5-5.5S4 11 6.5 10s4 1.5 5.5 3 3-1.5 5.5-3 5 2 3.5 6.5S14.5 22 12 22z"/></svg>
  </div>
</div>

<!-- ═══════════ SECTION 8: TEAM ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-warm)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">The Team</span>
      <h2 class="luna-heading luna-heading--lg">Small Team. Big Commitment.</h2>
      <p class="luna-body" style="color:var(--luna-text-light);max-width:480px;margin:8px auto 0">A family-and-friends operation. Still personal after hundreds of puppies.</p>
    </div>

    <div class="alt-team__grid">
      <div class="alt-team-member luna-reveal">
        <div class="alt-team-member__photo-wrap">
          <img class="alt-team-member__photo" src="{{ site.uploads | absolute_url }}james.jpg" alt="James Harrison" loading="lazy">
        </div>
        <h3 class="alt-team-member__name">James Harrison</h3>
        <p class="alt-team-member__role">Founder</p>
        <p class="alt-team-member__bio">Built this program after his own frustrating search. Former tech, now full-time breeder. NYC-based.</p>
      </div>
      <div class="alt-team-member luna-reveal luna-reveal-delay-1">
        <div class="alt-team-member__photo-wrap">
          <img class="alt-team-member__photo" src="{{ site.uploads | absolute_url }}renee.jpg" alt="Renee" loading="lazy">
        </div>
        <h3 class="alt-team-member__name">Renee</h3>
        <p class="alt-team-member__role">The Puppy Whisperer</p>
        <p class="alt-team-member__bio">Hands-on with every litter from birth through placement. The one who answers your 2 AM puppy questions.</p>
      </div>
      <div class="alt-team-member luna-reveal luna-reveal-delay-2">
        <div class="alt-team-member__photo-wrap">
          <img class="alt-team-member__photo" src="{{ site.uploads | absolute_url }}david.jpg" alt="David" loading="lazy">
        </div>
        <h3 class="alt-team-member__name">David</h3>
        <p class="alt-team-member__role">Puppy Whisperer</p>
        <p class="alt-team-member__bio">Socialization and early development. Every puppy gets individual attention from day one.</p>
      </div>
      <div class="alt-team-member luna-reveal luna-reveal-delay-3">
        <div class="alt-team-member__photo-wrap">
          <img class="alt-team-member__photo" src="{{ site.uploads | absolute_url }}ely.jpg" alt="Ely" loading="lazy">
        </div>
        <h3 class="alt-team-member__name">Ely</h3>
        <p class="alt-team-member__role">Logistics</p>
        <p class="alt-team-member__bio">Coordinates hand deliveries nationwide. Makes sure your puppy arrives safe and stress-free.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 9: TESTIMONIALS ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">What Our Families Say</span>
      <h2 class="luna-heading luna-heading--lg">Don't Take Our Word for It</h2>
    </div>

    <div class="alt-testimonials__grid">
      <div class="alt-testimonial luna-reveal">
        <div class="alt-testimonial__stars">★★★★★</div>
        <p class="alt-testimonial__text">"Had the best possible experience. As it was my first dog they guided me and educated me every step of the way. My Benny has been super healthy!"</p>
        <div class="alt-testimonial__footer">
          <div class="alt-testimonial__author">
            <div class="alt-testimonial__avatar">NB</div>
            <div>
              <div class="alt-testimonial__name">Nikol B.</div>
              <div class="alt-testimonial__location">NYC</div>
            </div>
          </div>
          <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="alt-testimonial__google">
            Google Review →
          </a>
        </div>
      </div>

      <div class="alt-testimonial luna-reveal luna-reveal-delay-1">
        <div class="alt-testimonial__stars">★★★★★</div>
        <p class="alt-testimonial__text">"We could not have had a better experience with Ethical Frenchie. We now have two amazing Frenchies from them and wouldn't go anywhere else."</p>
        <div class="alt-testimonial__footer">
          <div class="alt-testimonial__author">
            <div class="alt-testimonial__avatar">KL</div>
            <div>
              <div class="alt-testimonial__name">Kelly L.</div>
              <div class="alt-testimonial__location">Repeat Family</div>
            </div>
          </div>
          <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="alt-testimonial__google">
            Google Review →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 10: GOOGLE REVIEW STRIP ═══════════ -->
<div class="alt-review-strip luna-section--compact">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal">
      <div class="alt-review-strip__stars">★★★★★</div>
      <div class="alt-review-strip__rating">4.8 out of 5</div>
      <div class="alt-review-strip__count">Based on 87 Google Reviews</div>
      <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="alt-review-strip__link">Read All Reviews on Google →</a>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 11: "STILL REFINING" + 10+ YEARS ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-warm)">
  <div class="luna-container luna-container--narrow">
    <div class="alt-narrative luna-reveal">
      <div class="alt-narrative__float">
        <img src="{{ site.uploads | absolute_url }}about-us-3.jpg" alt="James walking French Bulldog puppies in New York City" loading="lazy">
      </div>

      <h2>10+ Years In, Still Refining</h2>

      <p>What you're looking at now is the result of over a decade of refining this experience, year after year. Better health testing. Better socialization protocols. Better communication. Every litter we learn something, and every family we place a puppy with teaches us how to do this even better.</p>

      <p>This is still a family-and-friends operation. It's still personal. And we still get excited every single time one of our puppies goes home with the right family. <a href="/happy-tails/" style="color:var(--luna-primary);font-weight:600">See where they've ended up →</a></p>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 12: BLOG LINKS ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container luna-container--narrow">
    <div style="text-align:center;margin-bottom:clamp(24px,4vw,32px)" class="luna-reveal">
      <span class="luna-eyebrow">Expert Guides by James Harrison</span>
      <h2 class="luna-heading luna-heading--lg">From the Blog</h2>
    </div>

    <div class="alt-blog__list">
      <a href="/blog/french-bulldog-colors-explained" class="alt-blog-link luna-reveal">
        <div class="alt-blog-link__icon">
          <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <div>
          <div class="alt-blog-link__title">French Bulldog Colors Explained</div>
          <div class="alt-blog-link__meta">Written by James Harrison</div>
        </div>
        <span class="alt-blog-link__arrow">→</span>
      </a>
      <a href="/blog/french-bulldog-health-risks-welfare-problems-behind-the-cute-face/" class="alt-blog-link luna-reveal luna-reveal-delay-1">
        <div class="alt-blog-link__icon">
          <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <div>
          <div class="alt-blog-link__title">Top 5 Health Concerns Every Owner Should Know</div>
          <div class="alt-blog-link__meta">Written by James Harrison</div>
        </div>
        <span class="alt-blog-link__arrow">→</span>
      </a>
      <a href="/blog/4-types-of-french-bulldog-breeders-near-you/" class="alt-blog-link luna-reveal luna-reveal-delay-2">
        <div class="alt-blog-link__icon">
          <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <div>
          <div class="alt-blog-link__title">4 Types of Breeders Near You</div>
          <div class="alt-blog-link__meta">Written by James Harrison</div>
        </div>
        <span class="alt-blog-link__arrow">→</span>
      </a>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 13: FAQs ═══════════ -->
{% include faqs.html
  multiple="true"
  category="aboutfaq"
  section_title="Frequently Asked Questions"
  section_size="large"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
%}

<!-- ═══════════ SECTION 14: DUAL CTA (Warm cream, not gradient) ═══════════ -->
<div class="alt-cta luna-section">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal">
      <div class="alt-cta__eyebrow">Ready to Take the Next Step?</div>
      <h2 class="alt-cta__heading">Meet Our Available Puppies</h2>
      <p class="alt-cta__sub">Or start a conversation. We're here whenever you're ready.</p>
      <div class="alt-cta__buttons">
        <a href="/french-bulldog-puppies/" class="alt-cta__btn alt-cta__btn--primary">Browse Puppies</a>
        <a href="/application/" class="alt-cta__btn alt-cta__btn--secondary">Start Your Application</a>
      </div>
      <p class="alt-cta__trust">Hand-delivered nationwide · 1-year health guarantee · Embark DNA tested</p>
    </div>
  </div>
</div>

{% include menuz.html %}

<!-- ═══════════ SCROLL REVEAL JS ═══════════ -->
<script>
(function(){
  var els = document.querySelectorAll('.luna-reveal');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el){ obs.observe(el); });
})();
</script>
