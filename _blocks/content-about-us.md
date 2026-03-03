---
---

<style>
/* ── About Us: Refined storytelling layout ── */
.about-story { position: relative; }

/* Paw print decorations */
.about-story .paw-track {
  position: absolute;
  opacity: 0.04;
  font-size: 28px;
  color: #901941;
  pointer-events: none;
  z-index: 0;
}
.about-story .paw-track.paw-1 { top: 40px; left: -10px; transform: rotate(-25deg); }
.about-story .paw-track.paw-2 { top: 120px; left: 20px; transform: rotate(-10deg); }
.about-story .paw-track.paw-3 { top: 200px; left: -5px; transform: rotate(-30deg); }
.about-story .paw-track.paw-r1 { top: 80px; right: -10px; transform: rotate(20deg); }
.about-story .paw-track.paw-r2 { top: 180px; right: 15px; transform: rotate(35deg); }
.about-story .paw-track.paw-r3 { top: 300px; right: -5px; transform: rotate(15deg); }

/* Pull quote styling */
.about-pullquote {
  border-left: 3px solid #901941;
  padding: 12px 0 12px 24px;
  margin: 28px 0;
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #5c3a4a;
}

/* Section divider with paw */
.paw-divider {
  text-align: center;
  margin: 48px 0 40px;
  position: relative;
}
.paw-divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(144,25,65,0.15), transparent);
}
.paw-divider span {
  position: relative;
  background: #fff;
  padding: 0 20px;
  font-size: 20px;
  color: #901941;
  opacity: 0.5;
}

/* Image caption enhancement */
.about-story .uk-overlay-primary {
  background: rgba(144, 25, 65, 0.8);
}

/* Section heading accent */
.about-heading {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}
.about-heading::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: #901941;
  margin-top: 8px;
  border-radius: 2px;
}

/* Signature block */
.about-signature {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(144,25,65,0.1);
}
.about-signature img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #901941;
}
.about-signature .sig-text {
  font-size: 0.95rem;
  line-height: 1.5;
}
.about-signature .sig-name {
  font-weight: 700;
  color: #901941;
}
.about-signature .sig-title {
  color: #777;
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .about-story .paw-track { display: none; }
  .about-pullquote { font-size: 1.05rem; padding-left: 16px; }
  .about-heading { font-size: 1.35rem; }
}
</style>

<div class="about-story">

<!-- Subtle paw prints trailing down left side -->
<span class="paw-track paw-1">🐾</span>
<span class="paw-track paw-2">🐾</span>
<span class="paw-track paw-3">🐾</span>
<span class="paw-track paw-r1">🐾</span>
<span class="paw-track paw-r2">🐾</span>
<span class="paw-track paw-r3">🐾</span>

{% include image.html
	src="content-1.jpg"
  alt="James with the French Bulldog moms at Ethical Frenchie"
  align="left"
  caption="James & The Moms"
%}

<h2 class="about-heading">It Started with Vilma</h2>

When my wife wanted a dog — through little hints here and there — I picked up on it pretty quickly. So I started searching. And within about an hour I was completely overwhelmed. Every site was either an "Add Your Dog to Cart" checkout page, a Craigslist post that felt like a scam, or something in between. I spent hours weeding through the noise until I finally found our pup, Vilma. She changed everything for us.

Three or four years later, Vilma was pregnant. We asked family, we asked friends — and when we still had puppies to place, I went back to the internet to figure out where people even *advertise* puppies. Turns out that side of it was even worse. Glorified classifieds pages. No transparency. No relationship.

<div class="about-pullquote">
"There has to be an easier, trusted, seamless process for this."
</div>

That thought became Ethical Frenchie.

</div>

<div class="paw-divider"><span>🐾</span></div>

<div class="about-story" style="position: relative;">

{% include image.html
	src="about-us-2.jpg"
  alt="Renee meeting Ethical Frenchie families at a customer meetup"
  align="right"
  caption="Renee at Customer Meetup Day"
%}

<h2 class="about-heading">What We Actually Do Differently</h2>

As we started placing more puppies with more families, one thing became non-negotiable: every single person was going to get the experience I wished I'd had as a buyer. That means a transparent, white-glove process — photos and videos of your puppy as they grow, a real relationship with the people raising them, and zero anxiety from start to finish.

We don't do shopping carts. We do FaceTime calls so you can meet your puppy and the person behind it. We hand-deliver every dog ourselves — the person you talk to is the person who shows up at your door. And we stay in touch long after. Diet questions at 2 AM? Training issues at month three? We're a text away. That's not a marketing line — ask any of [our families](/happy-tails/).

</div>

<div class="paw-divider"><span>🐾</span></div>

<div class="about-story" style="position: relative;">

{% include image.html
	src="about-us-3.jpg"
  alt="James walking French Bulldog puppies in New York City"
  align="left"
  caption="James walking the pups in NYC"
%}

<h2 class="about-heading">10+ Years In, Still Refining</h2>

What you're looking at now is the result of over a decade of refining this experience, year after year. Better health testing. Better socialization protocols. Better communication. Every litter we learn something, and every family we place a puppy with teaches us how to do this even better.

This is still a family-and-friends operation. It's still personal. And we still get excited every single time one of our puppies goes home with the right family. [See where they've ended up →](/happy-tails/)

<div class="about-signature">
  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}james.jpg" alt="James Harrison" data-uk-img>
  <div class="sig-text">
    <div class="sig-name">James Harrison</div>
    <div class="sig-title">Founder, Ethical Frenchie &middot; Est. 2017</div>
  </div>
</div>

</div>


{% include button.html text="View our Available puppies" url="/french-bulldog-puppies/" style="primary" size="xlarge" width="full" %}
