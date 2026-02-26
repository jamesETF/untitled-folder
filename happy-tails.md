---
title: Happy Tails
subtitle: Our Puppies in Their Forever Homes
description: See where Ethical Frenchie puppies have found their forever families. AKC registered French Bulldogs placed nationwide with lifetime health guarantees.
layout: full
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
  background_overlay: "rgba(144, 25, 65, 0.55)"
  color: light
  header_size: large
  heading_size: medium
  parallax: true
permalink: /happy-tails/
applechat: true
hubspotneeded: true
happytails: true
---

<!-- Stats Bar -->
<div class="uk-section uk-section-muted uk-section-small">
  <div class="uk-container uk-container-expand">
    <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center" data-uk-grid>
      <div>
        <h3 class="uk-heading-small uk-margin-remove-bottom" style="color: #901941;"><a href="https://www.akc.org/" target="_blank" rel="noopener" style="color: #901941; text-decoration: none;">AKC</a> Registered</h3>
        <p class="uk-text-bold uk-margin-remove-top">Every puppy, every litter</p>
      </div>
      <div>
        <h3 class="uk-heading-small uk-margin-remove-bottom" style="color: #901941;"><a href="https://embarkvet.com/" target="_blank" rel="noopener" style="color: #901941; text-decoration: none;">Embark</a> DNA Tested</h3>
        <p class="uk-text-bold uk-margin-remove-top">250+ genetic conditions screened</p>
      </div>
      <div>
        <h3 class="uk-heading-small uk-margin-remove-bottom" style="color: #901941;">1-Year Guarantee</h3>
        <p class="uk-text-bold uk-margin-remove-top">Strongest in the industry</p>
      </div>
      <div>
        <h3 class="uk-heading-small uk-margin-remove-bottom" style="color: #901941;">Hand Delivered</h3>
        <p class="uk-text-bold uk-margin-remove-top">By us, personally, to your door</p>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================
     INTERACTIVE MAP — Pins with before/after photo popups
     All CSS and JS is inline — zero impact on other pages.
     ============================================================ -->

<style>
  /* --- Map container --- */
  #happy-tails-map {
    width: 100%;
    height: 70vh;
    min-height: 500px;
    max-height: 800px;
  }
  @media (max-width: 640px) {
    #happy-tails-map {
      height: 60vh;
      min-height: 400px;
    }
  }

  /* --- InfoWindow card --- */
  .ht-popup {
    font-family: 'Montserrat', sans-serif;
    max-width: 300px;
    padding: 0;
  }
  .ht-popup-name {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin: 0 0 4px 0;
  }
  .ht-popup-region {
    font-size: 13px;
    color: #901941;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  .ht-popup-quote {
    font-size: 14px;
    color: #5c5e65;
    line-height: 1.5;
    margin: 0 0 12px 0;
    font-style: italic;
  }
  .ht-popup-owner {
    font-size: 12px;
    color: #999;
    margin: 0;
  }

  /* --- Before/After slider --- */
  .ht-slider-wrap {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 12px;
    background: #f0f0f0;
    cursor: ew-resize;
    touch-action: none;
  }
  .ht-slider-wrap img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ht-slider-after {
    clip-path: inset(0 0 0 50%);
  }
  .ht-slider-divider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: #fff;
    box-shadow: 0 0 6px rgba(0,0,0,0.4);
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  .ht-slider-handle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    background: #901941;
    border: 3px solid #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    pointer-events: none;
  }
  .ht-slider-label {
    position: absolute;
    bottom: 8px;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    background: rgba(0,0,0,0.5);
    padding: 2px 8px;
    border-radius: 3px;
    z-index: 2;
    pointer-events: none;
  }
  .ht-slider-label-then { left: 8px; }
  .ht-slider-label-now { right: 8px; }

  /* --- No-photo placeholder --- */
  .ht-no-photo {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #f8f0f3 0%, #ede0e5 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #901941;
    font-size: 13px;
    font-weight: 600;
  }

  /* --- Loading state --- */
  .ht-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #901941;
    font-size: 16px;
    font-weight: 600;
  }
</style>

<!-- Map Section -->
<div class="uk-section uk-section-default uk-section-small uk-padding-remove-bottom">
  <div class="uk-container uk-container-large uk-text-center">
    <h2 class="section-title">Furever Homes, Real Stories</h2>
    <p class="uk-text-lead uk-margin-medium-bottom">Submitted by our families — and still growing</p>
  </div>
</div>

<div id="happy-tails-map">
  <div class="ht-loading">Loading map...</div>
</div>

<!-- Submit Photos CTA -->
<div style="background: #901941; padding: 30px 20px; text-align: center;">
  <p style="color: #fff; font-size: 20px; font-weight: 700; margin: 0 0 8px 0;">Have an Ethical Frenchie at Home?</p>
  <p style="color: rgba(255,255,255,0.85); font-size: 15px; margin: 0 0 20px 0;">Submit your pup's before & after photos for our map!</p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSehuypnX_BbJlNzjxW8-cmyLgTldJuaWib8O4EXitC4fYKleA/viewform" target="_blank" rel="noopener" style="display:inline-block; background:#fff; color:#901941; padding:12px 28px; border-radius:4px; font-weight:700; font-size:15px; text-decoration:none;">Submit Your Photos</a>
</div>

<!-- Puppy Showcase Grid -->
<div class="uk-section uk-section-muted uk-section-large">
  <div class="uk-container uk-container-large">
    <div class="uk-text-center uk-margin-large-bottom">
      <h2 class="section-title">Meet Our Alumni</h2>
      <p class="uk-text-lead">A few of our favorites from over the years</p>
      <p class="uk-text-small uk-text-muted">Learn more about <a href="/blog/french-bulldog-colors-explained/" style="color: #901941;">French Bulldog colors</a>, <a href="/blog/increase-french-bulldog-lifespan/" style="color: #901941;">lifespan &amp; health</a>, or <a href="/blog/best-food-for-french-bulldog/" style="color: #901941;">nutrition</a></p>
    </div>

    <style>.happy-tails-img{height:280px;overflow:hidden}.happy-tails-img img{width:100%;height:100%;object-fit:cover}.happy-tails-review{color:inherit;text-decoration:none}.happy-tails-review:hover{text-decoration:underline}</style>

    {% assign nyc_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" %}
    {% assign chi_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@41.8847435,-87.6363389,17z/data=!4m8!3m7!1s0x880e2d623a6a4673:0x57d3c1f249c3cd83!8m2!3d41.8847435!4d-87.6363389!9m1!1b1!16s%2Fg%2F11lgvvz659" %}

    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" data-uk-grid>

      <!-- Bean — quote from Diego David, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/bean/bean.webp" alt="Bean the Blue French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Bean</h3>
            <p class="uk-text-meta">Blue &bull; Female &bull; New York</p>
            <p><em>"They've both been absolutely amazing. Healthy, happy, and such a joy to have."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Diego D., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Rosie — quote from Hello Miss Mabel, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/rosie/rosie-French-Bulldog-Puppy-01.webp" alt="Rosie the Blue Merle French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Rosie</h3>
            <p class="uk-text-meta">Blue Merle &bull; Female &bull; New York</p>
            <p><em>"I knew at first glance my puppy was impeccably bred. Her proportions, her jet black coat — I highly recommend Ethical Frenchie!"</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Mabel, NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Lucas — quote from nikol beljakovic, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/lucas/french-bulldog-puppy-lucas.webp" alt="Lucas the Lilac French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Lucas</h3>
            <p class="uk-text-meta">Lilac &bull; Male &bull; New York</p>
            <p><em>"Had the best possible experience. As it was my first dog they guided me and educated me every step of the way. My Benny has been super healthy!"</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Nikol B., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Paddington — quote from Kelly Lima, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/paddington/paddington-blue-sable-fawn-french-bulldog-puppy-1.webp" alt="Paddington the Blue Sable Fawn French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Paddington</h3>
            <p class="uk-text-meta">Blue Sable Fawn &bull; Male &bull; New York</p>
            <p><em>"We could not have had a better experience. We have 2 amazing, healthy and ridiculously cute babies. Would never get another Frenchie anywhere else!"</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Kelly L., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Brioche — quote from Rhiannon Lupo, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/brioche/brioche-lilac-fawn-french-bulldog-puppy-1.webp" alt="Brioche the Lilac Fawn French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Brioche</h3>
            <p class="uk-text-meta">Lilac Fawn &bull; Female &bull; New York</p>
            <p><em>"Ethical Frenchie is truly the best! They provided me with plenty of information as a first time dog owner and helpful tips."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Rhiannon L., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Blue Ivy — quote from David Kirsch, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/blue-ivy/blue-ivy-blue-merle-french-bulldog-puppy-1.webp" alt="Blue Ivy the Blue Merle French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Blue Ivy</h3>
            <p class="uk-text-meta">Blue Merle &bull; Female &bull; New York</p>
            <p><em>"Getting my Frenchie from Ethical Frenchie was the BEST decision! They answered all my questions through emails, phone calls, and even FaceTime."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— David K., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Regina — quote from Alexa Petratos, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/regina/regina.webp" alt="Regina the Lilac and Tan French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Regina</h3>
            <p class="uk-text-meta">Lilac &amp; Tan &bull; Female &bull; New York</p>
            <p><em>"I cannot recommend Ethical Frenchie enough! They've been absolutely amazing since the beginning. I still cannot thank them enough for their constant support."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Alexa P., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Mona — quote from Mint Kongphat, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/mona/french-bulldog-puppy-mona.webp" alt="Mona the Lilac French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Mona</h3>
            <p class="uk-text-meta">Lilac &bull; Female &bull; New York</p>
            <p><em>"I have my two boys from Ethical Frenchie. We get complimented by strangers about how healthy they look all the time."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Mint K., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Polar Bear — quote from James Burden, Chicago Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/polar-bear/polar-bear.webp" alt="Polar Bear the Platinum Lilac Fluffy French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Polar Bear</h3>
            <p class="uk-text-meta">Platinum Lilac Fluffy &bull; Male &bull; Chicago</p>
            <p><em>"The team at Ethical Frenchie is excellent, from starting the process of adopting my dog to the after care tips. They check in on my pup from time to time."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ chi_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— James B., Chicago &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Winnie — quote from Angela Walton, Chicago Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/winnie/IMG_6186.webp" alt="Winnie the Blue Fawn Merle French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Winnie</h3>
            <p class="uk-text-meta">Blue Fawn Merle &bull; Male &bull; Chicago</p>
            <p><em>"I had lots of questions and they've been the best! They sent me several emails with links on what to buy for food, toys, everything."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ chi_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Angela W., Chicago &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Daisy Mae — quote from Rachel Drefs, Chicago Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/daisy-mae/daisy-mae.webp" alt="Daisy Mae the Merle French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Daisy Mae</h3>
            <p class="uk-text-meta">Merle &bull; Female &bull; Chicago</p>
            <p><em>"I bought a beautiful, healthy, well socialized and somewhat trained puppy. When I brought her home she found her pad, knew her name, and the next day played fetch!"</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ chi_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Rachel D., Chicago &middot; Google Review</a></p>
          </div>
        </div>
      </div>

      <!-- Peanut — quote from Lisa Phelan, NYC Google review -->
      <div>
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top happy-tails-img">
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}french-bulldog-puppies/peanut/peanut-isabella-french-bulldog-puppy-1.webp" alt="Peanut the Isabella French Bulldog" width="900" height="640" data-uk-img>
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Peanut</h3>
            <p class="uk-text-meta">Isabella &bull; Male &bull; New York</p>
            <p><em>"They were wonderful to work with, very responsive to my questions and also interviewed me to make sure their puppy was going to a good, loving home."</em></p>
            <p class="uk-text-small uk-text-muted"><a href="{{ nyc_reviews }}" target="_blank" rel="noopener" class="happy-tails-review">— Lisa P., NYC &middot; Google Review</a></p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- Main CTAs -->
<div class="uk-section uk-section-default uk-section-large">
  <div class="uk-container uk-container-small uk-text-center">
    <h2 class="section-title">Ready to Join the Ethical Frenchie Family?</h2>
    <p class="uk-text-lead uk-margin-medium-bottom">Browse our available puppies or start your application today.</p>
    <div style="margin-bottom: 24px; font-size: 15px; color: #5c5e65;">
      <strong style="color: #901941;">&#9733; 4.7</strong> out of 5 on <a href="https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" target="_blank" rel="noopener" style="color: #901941; font-weight: 700;">Google</a> &middot; 87 Reviews
    </div>
    <div class="uk-child-width-1-2@s" data-uk-grid>
      <div>
        <a class="uk-button uk-button-xlarge uk-width-1-1" style="background-color: #901941; color: #fff; border: none;" href="/french-bulldog-puppies/">See Available Puppies</a>
      </div>
      <div>
        <a class="uk-button uk-button-xlarge uk-width-1-1" style="background-color: #901941; color: #fff; border: none;" href="/puppies/">Apply Now</a>
      </div>
    </div>
  </div>
</div>

{% include menuz.html %}

<!-- ============================================================
     MAP JAVASCRIPT — All inline, only loaded on this page
     ============================================================ -->
<script>
(function() {
  // --- Config ---
  var API_URL = 'https://script.google.com/macros/s/AKfycbyv-m5LjiKZJuU1nGzO-J_lFaeTm2WzNNKVr5oWywe9A3qh2EqG1qsEPqve-743hPJ8/exec';
  var MAP_CENTER = { lat: 38.5, lng: -96.5 };
  var MAP_ZOOM = 4;
  var BRAND_COLOR = '#901941';

  // --- Silver map style ---
  var silverStyle = [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
    { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
    { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
  ];

  // --- Custom marker SVG ---
  function createMarkerIcon() {
    return {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">' +
        '<path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 24 14 24s14-13.5 14-24C28 6.268 21.732 0 14 0z" fill="' + BRAND_COLOR + '"/>' +
        '<circle cx="14" cy="13" r="6" fill="white"/>' +
        '<text x="14" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="' + BRAND_COLOR + '">&#x1f43e;</text>' +
        '</svg>'
      ),
      scaledSize: new google.maps.Size(28, 38),
      anchor: new google.maps.Point(14, 38)
    };
  }

  // --- Build InfoWindow HTML ---
  function buildPopupHTML(puppy) {
    var html = '<div class="ht-popup">';

    if (puppy.thenPhoto && puppy.nowPhoto) {
      html += '<div class="ht-slider-wrap" data-slider>' +
        '<img class="ht-slider-before" src="' + puppy.thenPhoto + '" alt="' + puppy.name + ' then">' +
        '<img class="ht-slider-after" src="' + puppy.nowPhoto + '" alt="' + puppy.name + ' now">' +
        '<div class="ht-slider-divider"></div>' +
        '<div class="ht-slider-handle"></div>' +
        '<span class="ht-slider-label ht-slider-label-then">Then</span>' +
        '<span class="ht-slider-label ht-slider-label-now">Now</span>' +
        '</div>';
    } else {
      html += '<div class="ht-no-photo">Photos coming soon</div>';
    }

    html += '<p class="ht-popup-name">' + puppy.name + '</p>' +
      '<p class="ht-popup-region">' + puppy.region + '</p>' +
      '<p class="ht-popup-quote">"' + puppy.quote + '"</p>' +
      '<p class="ht-popup-owner">— ' + puppy.owner + '</p>' +
      '</div>';

    return html;
  }

  // --- Initialize slider drag behavior ---
  function initSlider(infoWindow) {
    google.maps.event.addListenerOnce(infoWindow, 'domready', function() {
      var sliders = document.querySelectorAll('[data-slider]');
      sliders.forEach(function(wrap) {
        if (wrap._sliderInit) return;
        wrap._sliderInit = true;

        var afterImg = wrap.querySelector('.ht-slider-after');
        var divider = wrap.querySelector('.ht-slider-divider');
        var handle = wrap.querySelector('.ht-slider-handle');
        var dragging = false;

        function updatePosition(x) {
          var rect = wrap.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
          var pctStr = (pct * 100) + '%';
          afterImg.style.clipPath = 'inset(0 0 0 ' + pctStr + ')';
          divider.style.left = pctStr;
          handle.style.left = pctStr;
        }

        wrap.addEventListener('mousedown', function(e) { dragging = true; updatePosition(e.clientX); });
        document.addEventListener('mousemove', function(e) { if (dragging) updatePosition(e.clientX); });
        document.addEventListener('mouseup', function() { dragging = false; });

        wrap.addEventListener('touchstart', function(e) { dragging = true; updatePosition(e.touches[0].clientX); }, { passive: true });
        document.addEventListener('touchmove', function(e) { if (dragging) updatePosition(e.touches[0].clientX); }, { passive: true });
        document.addEventListener('touchend', function() { dragging = false; });
      });
    });
  }

  // --- Main init ---
  window.initHappyTailsMap = function() {
    var mapEl = document.getElementById('happy-tails-map');
    mapEl.innerHTML = '';

    var map = new google.maps.Map(mapEl, {
      zoom: MAP_ZOOM,
      center: MAP_CENTER,
      styles: silverStyle,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    fetch(API_URL)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.puppies || !data.puppies.length) {
          mapEl.innerHTML = '<div class="ht-loading">No puppies found yet!</div>';
          return;
        }

        var openInfoWindow = null;
        var markerIcon = createMarkerIcon();

        data.puppies.forEach(function(puppy) {
          var marker = new google.maps.Marker({
            position: { lat: puppy.lat, lng: puppy.lng },
            map: map,
            icon: markerIcon,
            title: puppy.name + ' — ' + puppy.region
          });

          var infoWindow = new google.maps.InfoWindow({
            content: buildPopupHTML(puppy),
            maxWidth: 320
          });

          marker.addListener('click', function() {
            if (openInfoWindow) openInfoWindow.close();
            infoWindow.open(map, marker);
            openInfoWindow = infoWindow;
            initSlider(infoWindow);
          });
        });
      })
      .catch(function(err) {
        console.error('Happy Tails Map error:', err);
        mapEl.innerHTML = '<div class="ht-loading">Could not load map data. Please try again later.</div>';
      });
  };
})();
</script>

<!-- Load Google Maps API (only on this page) -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key={{ site.google_maps_api_key }}&callback=initHappyTailsMap"></script>
