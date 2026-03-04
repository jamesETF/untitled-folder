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
permalink: /about-us-v2
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap" rel="stylesheet">

{% assign google_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" %}

<style>
/* ============================================================
   ABOUT US V2 — "EDITORIAL STORY"
   Luna V2 foundation + new editorial motifs:
   vertical timeline, oversized pull quotes, stats counter,
   comparison block, credential shelf.
   ============================================================ */

/* --- Collapse default EON hero to compact 30vh --- */
.uk-position-relative[style*="min-height: 60vh"]{min-height:30vh !important}

/* --- CSS Custom Properties (Luna V2 base + About extensions) --- */
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
  --luna-radius: 12px;
  --luna-radius-lg: 20px;
  --luna-radius-pill: 100px;
  --luna-transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --luna-font: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --luna-font-accent: 'Playfair Display', Georgia, serif;

  /* About-specific extensions */
  --about-timeline-line: rgba(144, 25, 65, 0.12);
  --about-timeline-dot: #901941;
  --about-stat-size: clamp(2.8rem, 5vw, 4rem);
}

*, *::before, *::after { box-sizing: border-box; }
html, body { overflow-x: hidden; }

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
.luna-accent {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
}

/* ============================================================
   1. CREDENTIAL BADGE SHELF — Gold-accent trust strip
   ============================================================ */
.about-credentials {
  background: var(--luna-bg-warm);
  border-top: 1px solid var(--luna-border);
  border-bottom: 1px solid var(--luna-border);
}
.about-credentials__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
@media (max-width: 768px) {
  .about-credentials__grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
.about-credential {
  display: flex;
  align-items: center;
  gap: 14px;
}
.about-credential__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--luna-gold-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.about-credential__icon svg {
  width: 22px;
  height: 22px;
  stroke: var(--luna-gold);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.about-credential__title {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0;
  line-height: 1.3;
}
.about-credential__detail {
  font-family: var(--luna-font);
  font-size: 0.75rem;
  color: var(--luna-text-light);
  margin: 2px 0 0;
  line-height: 1.3;
}

/* ============================================================
   2. EDITORIAL STORY SECTIONS — Magazine-style text + image
   ============================================================ */
.about-story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}
.about-story--reverse {
  direction: rtl;
}
.about-story--reverse > * {
  direction: ltr;
}
@media (max-width: 768px) {
  .about-story, .about-story--reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }
}
.about-story__image {
  border-radius: var(--luna-radius-lg);
  overflow: hidden;
  box-shadow: var(--luna-shadow-lg);
}
.about-story__image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}
@media (max-width: 768px) {
  .about-story__image img {
    height: 280px;
  }
}
.about-story__text h2 {
  font-family: var(--luna-font);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--luna-heading);
  margin: 0 0 8px;
  line-height: 1.2;
}
.about-story__text h2::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: var(--luna-primary);
  margin-top: 12px;
  border-radius: 2px;
}
.about-story__text p {
  font-family: var(--luna-font);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.75;
  color: var(--luna-text);
  margin: 20px 0 0;
}

/* ============================================================
   3. PULL QUOTE — Oversized editorial break
   ============================================================ */
.about-pullquote {
  position: relative;
  text-align: center;
  padding: clamp(40px, 6vw, 80px) 0;
}
.about-pullquote__mark {
  font-family: var(--luna-font-accent);
  font-size: 6rem;
  color: var(--luna-primary);
  opacity: 0.1;
  line-height: 1;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}
.about-pullquote__text {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  color: var(--luna-primary);
  line-height: 1.55;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
.about-pullquote__attribution {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
}
.about-pullquote__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--luna-primary);
}
.about-pullquote__name {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--luna-heading);
}
.about-pullquote__title {
  font-family: var(--luna-font);
  font-size: 0.8rem;
  color: var(--luna-text-light);
}

/* ============================================================
   4. VERTICAL TIMELINE — Milestones
   ============================================================ */
.about-timeline {
  position: relative;
  padding-left: 80px;
}
.about-timeline::before {
  content: "";
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--about-timeline-line) 0%, rgba(144,25,65,0.04) 100%);
}
.about-timeline__entry {
  position: relative;
  margin-bottom: 48px;
}
.about-timeline__entry:last-child {
  margin-bottom: 0;
}
.about-timeline__dot {
  position: absolute;
  left: -52px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--about-timeline-dot);
  box-shadow: 0 0 0 4px var(--luna-bg), 0 0 0 6px var(--about-timeline-line);
}
.about-timeline__year {
  position: absolute;
  left: -80px;
  top: 0;
  width: 24px;
  text-align: right;
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
  font-size: 1rem;
  color: var(--luna-primary);
  line-height: 1.4;
}
.about-timeline__title {
  font-family: var(--luna-font);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 6px;
}
.about-timeline__desc {
  font-family: var(--luna-font);
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--luna-text);
  margin: 0;
}

@media (max-width: 768px) {
  .about-timeline {
    padding-left: 48px;
  }
  .about-timeline::before {
    left: 16px;
  }
  .about-timeline__dot {
    left: -32px;
  }
  .about-timeline__year {
    position: static;
    text-align: left;
    margin-bottom: 4px;
    font-size: 0.9rem;
  }
}

/* ============================================================
   5. TEAM PERSONALITY CARDS
   ============================================================ */
.about-team__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
@media (max-width: 640px) {
  .about-team__grid {
    grid-template-columns: 1fr;
  }
}
.about-team-card {
  background: var(--luna-bg);
  border-radius: var(--luna-radius-lg);
  overflow: hidden;
  box-shadow: var(--luna-shadow-sm);
  transition: all var(--luna-transition);
}
.about-team-card:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateY(-4px);
}
.about-team-card__photo {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}
@media (max-width: 640px) {
  .about-team-card__photo {
    height: 240px;
  }
}
.about-team-card__body {
  padding: 24px 28px;
}
.about-team-card__name {
  font-family: var(--luna-font);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0;
}
.about-team-card__role {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--luna-primary);
  margin: 4px 0 0;
}
.about-team-card__bio {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  color: var(--luna-text-light);
  margin: 10px 0 0;
  line-height: 1.55;
}

/* ============================================================
   6. IMPACT COUNTER STRIP — Maroon stats bar
   ============================================================ */
.about-stats {
  background: var(--luna-primary);
}
.about-stats__grid {
  display: flex;
  justify-content: center;
  gap: 0;
}
.about-stats__item {
  text-align: center;
  flex: 1;
  padding: 0 20px;
}
.about-stats__item + .about-stats__item {
  border-left: 1px solid rgba(255,255,255,0.2);
}
.about-stats__number {
  font-family: var(--luna-font);
  font-size: var(--about-stat-size);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  display: block;
}
.about-stats__label {
  font-family: var(--luna-font);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.7);
  margin-top: 4px;
  display: block;
}
@media (max-width: 640px) {
  .about-stats__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 0;
  }
  .about-stats__item + .about-stats__item {
    border-left: none;
  }
  .about-stats__item:nth-child(even) {
    border-left: 1px solid rgba(255,255,255,0.15);
  }
}

/* ============================================================
   7. COMPARISON BLOCK — "Typical" vs "Ethical Frenchie"
   ============================================================ */
.about-compare {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}
@media (max-width: 768px) {
  .about-compare {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
.about-compare__col {
  padding: clamp(28px, 4vw, 40px);
  border-radius: var(--luna-radius-lg);
}
.about-compare__col--left {
  background: var(--luna-bg-muted);
  opacity: 0.85;
}
.about-compare__col--right {
  background: var(--luna-bg);
  border-left: 3px solid var(--luna-primary);
  box-shadow: var(--luna-shadow-sm);
}
.about-compare__header {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.about-compare__col--left .about-compare__header {
  color: var(--luna-text-light);
}
.about-compare__col--right .about-compare__header {
  color: var(--luna-primary);
}
.about-compare__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.about-compare__list li {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  line-height: 1.5;
  padding: 8px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.about-compare__list li + li {
  border-top: 1px solid rgba(0,0,0,0.04);
}
.about-compare__col--left .about-compare__list li {
  color: var(--luna-text-light);
}
.about-compare__col--right .about-compare__list li {
  color: var(--luna-text);
  font-weight: 500;
}
.about-compare__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 1px;
}
.about-compare__vs {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.about-compare__vs-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--luna-primary);
  color: #fff;
  font-family: var(--luna-font);
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--luna-shadow-md);
}
@media (max-width: 768px) {
  .about-compare__vs {
    padding: 8px 0;
  }
}

/* ============================================================
   8. TESTIMONIAL CARDS — Speech bubble style
   ============================================================ */
.about-testimonials__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 640px) {
  .about-testimonials__grid {
    grid-template-columns: 1fr;
  }
}
.about-testimonial {
  background: var(--luna-bg);
  border-radius: var(--luna-radius-lg);
  padding: 28px;
  box-shadow: var(--luna-shadow-sm);
  position: relative;
  transition: all var(--luna-transition);
}
.about-testimonial:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateY(-2px);
}
.about-testimonial::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 28px;
  width: 16px;
  height: 16px;
  background: var(--luna-bg);
  transform: rotate(45deg);
  box-shadow: 2px 2px 4px rgba(0,0,0,0.04);
}
.about-testimonial__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.about-testimonial__person {
  display: flex;
  align-items: center;
  gap: 12px;
}
.about-testimonial__initials {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--luna-primary);
  color: #fff;
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-testimonial__name {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--luna-heading);
}
.about-testimonial__location {
  font-family: var(--luna-font);
  font-size: 0.78rem;
  color: var(--luna-text-light);
}
.about-testimonial__stars {
  color: var(--luna-gold);
  font-size: 0.85rem;
  letter-spacing: 2px;
}
.about-testimonial__text {
  font-family: var(--luna-font);
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--luna-text);
  margin: 0 0 12px;
}
.about-testimonial__link {
  font-family: var(--luna-font);
  font-size: 0.8rem;
  color: var(--luna-primary);
  text-decoration: none;
  font-weight: 600;
}
.about-testimonial__link:hover {
  text-decoration: underline;
}
.about-testimonial__source {
  font-family: var(--luna-font);
  font-size: 0.7rem;
  color: var(--luna-text-light);
  margin-top: 16px;
  padding-left: 28px;
}

/* ============================================================
   9. GOOGLE REVIEW BANNER
   ============================================================ */
.about-review-banner {
  background: linear-gradient(135deg, var(--luna-bg-warm) 0%, var(--luna-bg-muted) 100%);
  text-align: center;
}
.about-review-banner__stars {
  font-size: 1.5rem;
  color: var(--luna-gold);
  letter-spacing: 3px;
}
.about-review-banner__rating {
  font-family: var(--luna-font);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--luna-heading);
  margin: 8px 0 4px;
}
.about-review-banner__count {
  font-family: var(--luna-font);
  font-size: 0.85rem;
  color: var(--luna-text-light);
}
.about-review-banner__link {
  display: inline-block;
  margin-top: 16px;
  font-family: var(--luna-font);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--luna-primary);
  text-decoration: none;
}
.about-review-banner__link:hover {
  text-decoration: underline;
}

/* ============================================================
   10. DUAL-PATH CTA — Gradient close
   ============================================================ */
.about-cta {
  background: linear-gradient(135deg, var(--luna-primary-dark), var(--luna-primary-light));
  text-align: center;
  color: #fff;
}
.about-cta__eyebrow {
  font-family: var(--luna-font-accent);
  font-style: italic;
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 8px;
}
.about-cta__heading {
  font-family: var(--luna-font);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
}
.about-cta__sub {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 28px;
}
.about-cta__buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.about-cta__btn {
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
.about-cta__btn--primary {
  background: #fff;
  color: var(--luna-primary);
}
.about-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  color: var(--luna-primary);
}
.about-cta__btn--secondary {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.6);
}
.about-cta__btn--secondary:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-color: #fff;
}
.about-cta__trust {
  font-family: var(--luna-font);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  margin-top: 20px;
}

/* ============================================================
   HEALTH SECTION — Accordion-style
   ============================================================ */
.about-health__items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.about-health-item {
  background: var(--luna-bg);
  border-radius: var(--luna-radius);
  padding: 24px 28px;
  box-shadow: var(--luna-shadow-sm);
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.about-health-item__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--luna-primary-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.about-health-item__icon svg {
  width: 22px;
  height: 22px;
  stroke: var(--luna-primary);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.about-health-item__title {
  font-family: var(--luna-font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 6px;
}
.about-health-item__text {
  font-family: var(--luna-font);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--luna-text);
  margin: 0;
}

/* --- Blog cards --- */
.about-blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .about-blog__grid {
    grid-template-columns: 1fr;
  }
}
.about-blog-card {
  background: var(--luna-bg);
  border-radius: var(--luna-radius);
  padding: 24px;
  box-shadow: var(--luna-shadow-sm);
  text-decoration: none;
  transition: all var(--luna-transition);
  display: block;
}
.about-blog-card:hover {
  box-shadow: var(--luna-shadow-md);
  transform: translateY(-2px);
}
.about-blog-card__title {
  font-family: var(--luna-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--luna-heading);
  margin: 0 0 8px;
  line-height: 1.4;
}
.about-blog-card__meta {
  font-family: var(--luna-font);
  font-size: 0.78rem;
  color: var(--luna-text-light);
}
</style>

<!-- ═══════════ SECTION 1: CREDENTIAL BADGE SHELF ═══════════ -->
<div class="about-credentials luna-section--compact">
  <div class="luna-container">
    <div class="about-credentials__grid luna-reveal">
      <div class="about-credential">
        <div class="about-credential__icon">
          <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <div>
          <p class="about-credential__title">Embark DNA Tested</p>
          <p class="about-credential__detail">250+ conditions screened</p>
        </div>
      </div>
      <div class="about-credential">
        <div class="about-credential__icon">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <div>
          <p class="about-credential__title">1-Year Health Guarantee</p>
          <p class="about-credential__detail">Written, not verbal</p>
        </div>
      </div>
      <div class="about-credential">
        <div class="about-credential__icon">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div>
          <p class="about-credential__title">AKC Registered</p>
          <p class="about-credential__detail">Full documentation included</p>
        </div>
      </div>
      <div class="about-credential">
        <div class="about-credential__icon">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <p class="about-credential__title">In-Cabin Delivery</p>
          <p class="about-credential__detail">Hand-delivered nationwide</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 2: ORIGIN STORY — "It Started with Vilma" ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-warm)">
  <div class="luna-container">
    <div class="about-story luna-reveal">
      <div class="about-story__image">
        <img src="{{ site.uploads | absolute_url }}content-1.jpg" alt="James with the French Bulldog moms at Ethical Frenchie" loading="lazy">
      </div>
      <div class="about-story__text">
        <span class="luna-eyebrow">Our Story</span>
        <h2>It Started with Vilma</h2>
        <p>When my wife wanted a dog — through little hints here and there — I picked up on it pretty quickly. So I started searching. And within about an hour I was completely overwhelmed. Every site was either an "Add Your Dog to Cart" checkout page, a Craigslist post that felt like a scam, or something in between.</p>
        <p>I spent hours weeding through the noise until I finally found our pup, Vilma. She changed everything for us.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 3: PULL QUOTE ═══════════ -->
<div style="background:var(--luna-bg)">
  <div class="luna-container luna-container--narrow">
    <div class="about-pullquote luna-reveal">
      <span class="about-pullquote__mark">"</span>
      <p class="about-pullquote__text">"There has to be an easier, trusted, seamless process for this."</p>
      <div class="about-pullquote__attribution">
        <img class="about-pullquote__avatar" src="{{ site.uploads | absolute_url }}james.jpg" alt="James Harrison" loading="lazy">
        <div>
          <div class="about-pullquote__name">James Harrison</div>
          <div class="about-pullquote__title">Founder, Ethical Frenchie · Est. 2017</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 4: "WHAT WE DO DIFFERENTLY" ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-muted)">
  <div class="luna-container">
    <div class="about-story about-story--reverse luna-reveal">
      <div class="about-story__image">
        <img src="{{ site.uploads | absolute_url }}about-us-2.jpg" alt="Renee meeting Ethical Frenchie families at a customer meetup" loading="lazy">
      </div>
      <div class="about-story__text">
        <span class="luna-eyebrow">The Difference</span>
        <h2>What We Actually Do Differently</h2>
        <p>Three or four years after Vilma, she was pregnant. We placed every puppy through conversations, not checkout pages. That experience became Ethical Frenchie — and every single person was going to get the experience I wished I'd had as a buyer.</p>
        <p>That means a transparent, white-glove process. We don't do shopping carts. We do FaceTime calls so you can meet your puppy and the person behind it. We hand-deliver every dog ourselves. And we stay in touch long after — ask any of <a href="/happy-tails/" style="color:var(--luna-primary);font-weight:600">our families</a>.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 5: COMPARISON BLOCK ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">Why It Matters</span>
      <h2 class="luna-heading luna-heading--lg">Not All Breeders Are the Same</h2>
    </div>

    <div class="about-compare luna-reveal luna-reveal-delay-1">
      <div class="about-compare__col about-compare__col--left">
        <div class="about-compare__header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Typical Experience
        </div>
        <ul class="about-compare__list">
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Add to cart checkout</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>No video call or FaceTime</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Shipped via cargo</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Silence after purchase</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>No health testing proof</li>
        </ul>
      </div>

      <div class="about-compare__vs">
        <div class="about-compare__vs-badge">VS</div>
      </div>

      <div class="about-compare__col about-compare__col--right">
        <div class="about-compare__header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          The Ethical Frenchie Way
        </div>
        <ul class="about-compare__list">
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Personal FaceTime introduction</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Hand-delivered to your door</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Lifetime text &amp; call support</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Embark DNA reports shared</li>
          <li><svg class="about-compare__icon" viewBox="0 0 24 24" fill="none" stroke="#901941" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>1-year written health guarantee</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 6: MILESTONES TIMELINE ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-warm)">
  <div class="luna-container luna-container--narrow">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">Our Journey</span>
      <h2 class="luna-heading luna-heading--lg">A Decade of Doing Things Differently</h2>
    </div>

    <div class="about-timeline">
      <div class="about-timeline__entry luna-reveal">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2015</div>
        <div class="about-timeline__title">Vilma Joins the Family</div>
        <p class="about-timeline__desc">After a frustrating search through scam-filled listings and impersonal checkout pages, we find our first French Bulldog. She changes everything.</p>
      </div>
      <div class="about-timeline__entry luna-reveal luna-reveal-delay-1">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2017</div>
        <div class="about-timeline__title">Ethical Frenchie Is Born</div>
        <p class="about-timeline__desc">Vilma's first litter. We place every puppy through conversations, not checkout pages. The response from families tells us we're onto something.</p>
      </div>
      <div class="about-timeline__entry luna-reveal luna-reveal-delay-2">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2019</div>
        <div class="about-timeline__title">Embark DNA Testing Adopted</div>
        <p class="about-timeline__desc">Every breeding parent is now tested for 250+ genetic health conditions through Embark. Reports shared with every buyer — full transparency.</p>
      </div>
      <div class="about-timeline__entry luna-reveal luna-reveal-delay-3">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2021</div>
        <div class="about-timeline__title">200+ Puppies Placed</div>
        <p class="about-timeline__desc">Coast to coast, all 50 states. Every single one hand-delivered by our team. No cargo, no middlemen, no exceptions.</p>
      </div>
      <div class="about-timeline__entry luna-reveal luna-reveal-delay-4">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2023</div>
        <div class="about-timeline__title">Expanded to Chicago</div>
        <p class="about-timeline__desc">A second home base to better serve Midwest families. Same standards, same team, same commitment.</p>
      </div>
      <div class="about-timeline__entry luna-reveal">
        <div class="about-timeline__dot"></div>
        <div class="about-timeline__year">2025</div>
        <div class="about-timeline__title">Still Refining</div>
        <p class="about-timeline__desc">Better health protocols. Better socialization. Better communication. Every litter we learn something, and every family teaches us how to do this even better.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 7: HEALTH & TESTING ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container luna-container--narrow">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">Health Standards</span>
      <h2 class="luna-heading luna-heading--lg">Health Isn't a Checkbox. It's Our Standard.</h2>
    </div>

    <div class="about-health__items">
      <div class="about-health-item luna-reveal">
        <div class="about-health-item__icon">
          <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <div>
          <div class="about-health-item__title">Embark DNA Testing</div>
          <p class="about-health-item__text">Every breeding parent is tested for 250+ genetic health conditions — including CMR1, DM, HUU, and JHC. Full reports are shared with every buyer before you bring your puppy home.</p>
        </div>
      </div>
      <div class="about-health-item luna-reveal luna-reveal-delay-1">
        <div class="about-health-item__icon">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <div class="about-health-item__title">1-Year Written Health Guarantee</div>
          <p class="about-health-item__text">Covers genetic and congenital conditions. This isn't a verbal promise — it's a written guarantee you can hold us to. We stand behind every puppy we place.</p>
        </div>
      </div>
      <div class="about-health-item luna-reveal luna-reveal-delay-2">
        <div class="about-health-item__icon">
          <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div>
          <div class="about-health-item__title">Full Vet Care Before Departure</div>
          <p class="about-health-item__text">Vaccinations, deworming, microchip, and a complete veterinary examination. Your puppy comes with full documentation — nothing missing, nothing to guess about.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 8: TEAM ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-muted)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">The Team</span>
      <h2 class="luna-heading luna-heading--lg">The People Behind Every Puppy</h2>
      <p class="luna-body" style="color:var(--luna-text-light);max-width:540px;margin:8px auto 0">A family-and-friends operation. Still small. Still personal.</p>
    </div>

    <div class="about-team__grid">
      <div class="about-team-card luna-reveal">
        <img class="about-team-card__photo" src="{{ site.uploads | absolute_url }}james.jpg" alt="James Harrison, Founder of Ethical Frenchie" loading="lazy">
        <div class="about-team-card__body">
          <h3 class="about-team-card__name">James Harrison</h3>
          <p class="about-team-card__role">The One Who Started It All</p>
          <p class="about-team-card__bio">Built Ethical Frenchie after his own frustrating search for a healthy Frenchie. Former tech, now full-time breeder. NYC-based.</p>
        </div>
      </div>
      <div class="about-team-card luna-reveal luna-reveal-delay-1">
        <img class="about-team-card__photo" src="{{ site.uploads | absolute_url }}renee.jpg" alt="Renee, Puppy Whisperer at Ethical Frenchie" loading="lazy">
        <div class="about-team-card__body">
          <h3 class="about-team-card__name">Renee</h3>
          <p class="about-team-card__role">The Puppy Whisperer</p>
          <p class="about-team-card__bio">Co-founder. Hands-on with every litter from birth through placement. The one who answers your 2 AM puppy questions.</p>
        </div>
      </div>
      <div class="about-team-card luna-reveal luna-reveal-delay-2">
        <img class="about-team-card__photo" src="{{ site.uploads | absolute_url }}david.jpg" alt="David, Puppy Whisperer at Ethical Frenchie" loading="lazy">
        <div class="about-team-card__body">
          <h3 class="about-team-card__name">David</h3>
          <p class="about-team-card__role">Puppy Whisperer</p>
          <p class="about-team-card__bio">Socialization and early development. Every puppy gets individual attention from day one.</p>
        </div>
      </div>
      <div class="about-team-card luna-reveal luna-reveal-delay-3">
        <img class="about-team-card__photo" src="{{ site.uploads | absolute_url }}ely.jpg" alt="Ely, Logistics Manager at Ethical Frenchie" loading="lazy">
        <div class="about-team-card__body">
          <h3 class="about-team-card__name">Ely</h3>
          <p class="about-team-card__role">Keeps Everything Moving</p>
          <p class="about-team-card__bio">Coordinates hand deliveries nationwide. The person who makes sure your puppy arrives safe and stress-free.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 9: IMPACT COUNTER STRIP ═══════════ -->
<div class="about-stats luna-section--compact">
  <div class="luna-container">
    <div class="about-stats__grid luna-reveal">
      <div class="about-stats__item">
        <span class="about-stats__number" data-count="200">200+</span>
        <span class="about-stats__label">Puppies Placed</span>
      </div>
      <div class="about-stats__item">
        <span class="about-stats__number">2017</span>
        <span class="about-stats__label">Year Founded</span>
      </div>
      <div class="about-stats__item">
        <span class="about-stats__number">4.8</span>
        <span class="about-stats__label">Google Rating</span>
      </div>
      <div class="about-stats__item">
        <span class="about-stats__number">50</span>
        <span class="about-stats__label">States Served</span>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 10: TESTIMONIALS ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(32px,5vw,48px)" class="luna-reveal">
      <span class="luna-eyebrow">What Our Families Say</span>
      <h2 class="luna-heading luna-heading--lg">Don't Take Our Word for It</h2>
    </div>

    <div class="about-testimonials__grid">
      <div class="luna-reveal">
        <div class="about-testimonial">
          <div class="about-testimonial__header">
            <div class="about-testimonial__person">
              <div class="about-testimonial__initials">NB</div>
              <div>
                <div class="about-testimonial__name">Nikol B.</div>
                <div class="about-testimonial__location">NYC</div>
              </div>
            </div>
            <div class="about-testimonial__stars">★★★★★</div>
          </div>
          <p class="about-testimonial__text">"Had the best possible experience. As it was my first dog they guided me and educated me every step of the way. My Benny has been super healthy!"</p>
          <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="about-testimonial__link">Read on Google →</a>
        </div>
        <div class="about-testimonial__source">Google</div>
      </div>

      <div class="luna-reveal luna-reveal-delay-1">
        <div class="about-testimonial">
          <div class="about-testimonial__header">
            <div class="about-testimonial__person">
              <div class="about-testimonial__initials">KL</div>
              <div>
                <div class="about-testimonial__name">Kelly L.</div>
                <div class="about-testimonial__location">Repeat Family</div>
              </div>
            </div>
            <div class="about-testimonial__stars">★★★★★</div>
          </div>
          <p class="about-testimonial__text">"We could not have had a better experience with Ethical Frenchie. We now have two amazing Frenchies from them and wouldn't go anywhere else."</p>
          <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="about-testimonial__link">Read on Google →</a>
        </div>
        <div class="about-testimonial__source">Google</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 11: GOOGLE REVIEW BANNER ═══════════ -->
<div class="about-review-banner luna-section--compact">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal">
      <div class="about-review-banner__stars">★★★★★</div>
      <div class="about-review-banner__rating">4.8 out of 5</div>
      <div class="about-review-banner__count">Based on 87 Google Reviews</div>
      <a href="{{ google_reviews }}" target="_blank" rel="noopener" class="about-review-banner__link">Read All Reviews on Google →</a>
    </div>
  </div>
</div>

<!-- ═══════════ SECTION 12: BLOG LINKS — "Published by James" ═══════════ -->
<div class="luna-section" style="background:var(--luna-bg-muted)">
  <div class="luna-container">
    <div style="text-align:center;margin-bottom:clamp(24px,4vw,40px)" class="luna-reveal">
      <span class="luna-eyebrow">Expert Guides by James Harrison</span>
      <h2 class="luna-heading luna-heading--lg">From the Blog</h2>
    </div>

    <div class="about-blog__grid">
      <a href="/blog/french-bulldog-colors-explained" class="about-blog-card luna-reveal">
        <h3 class="about-blog-card__title">French Bulldog Colors Explained</h3>
        <p class="about-blog-card__meta">Written by James Harrison</p>
      </a>
      <a href="/blog/french-bulldog-health-risks-welfare-problems-behind-the-cute-face/" class="about-blog-card luna-reveal luna-reveal-delay-1">
        <h3 class="about-blog-card__title">Top 5 Health Concerns Every Owner Should Know</h3>
        <p class="about-blog-card__meta">Written by James Harrison</p>
      </a>
      <a href="/blog/4-types-of-french-bulldog-breeders-near-you/" class="about-blog-card luna-reveal luna-reveal-delay-2">
        <h3 class="about-blog-card__title">4 Types of Breeders Near You</h3>
        <p class="about-blog-card__meta">Written by James Harrison</p>
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

<!-- ═══════════ SECTION 14: DUAL-PATH CTA ═══════════ -->
<div class="about-cta luna-section">
  <div class="luna-container luna-container--narrow">
    <div class="luna-reveal">
      <div class="about-cta__eyebrow">Ready to Take the Next Step?</div>
      <h2 class="about-cta__heading">Meet Our Available Puppies</h2>
      <p class="about-cta__sub">Or start a conversation. We're here whenever you're ready.</p>
      <div class="about-cta__buttons">
        <a href="/french-bulldog-puppies/" class="about-cta__btn about-cta__btn--primary">Browse Puppies</a>
        <a href="/application/" class="about-cta__btn about-cta__btn--secondary">Start Your Application</a>
      </div>
      <p class="about-cta__trust">Hand-delivered nationwide · 1-year health guarantee · Embark DNA tested</p>
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
