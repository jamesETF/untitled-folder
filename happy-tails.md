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

{% include trust-bar.html %}

<!-- Families map: the "Where they all ended up" component (only rendered on this page) -->
{% include happy-families.html %}

<!-- Puppy Showcase Grid -->
<div class="uk-section uk-section-muted uk-section-large">
  <style>
  .ht-alumni-fade > *:nth-child(n+7) { display: none; }
  .ht-alumni-fade { -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 380px), transparent); mask-image: linear-gradient(to bottom, #000 calc(100% - 380px), transparent); }
  @media (max-width: 639.98px) { .ht-alumni-fade > *:nth-child(n+5) { display: none; } }
  </style>
  <div class="uk-container uk-container-large">
    <div class="uk-text-center uk-margin-large-bottom">
      <h2 class="section-title">Meet Our Alumni</h2>
      <p class="uk-text-lead">A few of our favorites from over the years</p>
      <p class="uk-text-small uk-text-muted">Learn more about <a href="/blog/french-bulldog-colors-explained/" style="color: #901941;">French Bulldog colors</a>, <a href="/blog/increase-french-bulldog-lifespan/" style="color: #901941;">lifespan &amp; health</a>, or <a href="/blog/best-food-for-french-bulldog/" style="color: #901941;">nutrition</a></p>
    </div>

    <style>.happy-tails-img{height:280px;overflow:hidden}.happy-tails-img img{width:100%;height:100%;object-fit:cover}.happy-tails-review{color:inherit;text-decoration:none}.happy-tails-review:hover{text-decoration:underline}</style>

    {% assign nyc_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@40.7028885,-74.0138771,17z/data=!4m8!3m7!1s0x89c25b610f061fb1:0x24ac563bf3edce66!8m2!3d40.7028885!4d-74.0138771!9m1!1b1!16s%2Fg%2F11mnghzshz" %}
    {% assign chi_reviews = "https://www.google.com/maps/place/Ethical+Frenchie/@41.8847435,-87.6363389,17z/data=!4m8!3m7!1s0x880e2d623a6a4673:0x57d3c1f249c3cd83!8m2!3d41.8847435!4d-87.6363389!9m1!1b1!16s%2Fg%2F11lgvvz659" %}

    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match ht-alumni-fade" data-uk-grid>

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
            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{ site.uploads | absolute_url }}happytails/paddington-blue-sable-fawn-french-bulldog-puppy-1.webp" alt="Paddington the Blue Sable Fawn French Bulldog" width="900" height="640" data-uk-img>
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
            <p class="uk-text-meta">Platinum Lilac Fluffy &bull; Male &bull; <a href="/illinois/chicago/">Chicago</a></p>
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
            <p class="uk-text-meta">Blue Fawn Merle &bull; Male &bull; <a href="/illinois/chicago/">Chicago</a></p>
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
            <p class="uk-text-meta">Merle &bull; Female &bull; <a href="/illinois/chicago/">Chicago</a></p>
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

<!-- Instagram (static, _includes/instagram-feed.html) -->
{% include instagram-feed.html %}

<!-- Google reviews (static, _includes/reviewsg.html) -->
{% include reviewsg.html exclude="Diego David,Hello Miss Mabel,nikol beljakovic,Kelly Lima,Rhiannon Lupo,David Kirsch" %}

<!-- Breeder Voice — short version (full story on /about-us/) -->
<div class="uk-section uk-section-muted" style="padding: 28px 0 20px;">
  <div class="uk-container uk-container-small">
    <p style="font-size: 16px; line-height: 1.8; color: #3c3c3c; text-align: center; margin: 0;">
      I started Ethical Frenchie after experiencing firsthand how broken the puppy-buying process was — scam sites, classifieds, zero transparency. Every family you see on this map went through the process I wished I'd had when I found our first Frenchie, Vilma.
    </p>
    <p style="font-size: 14px; color: #901941; font-weight: 600; text-align: center; margin: 10px 0 0 0;">— James, Founder &middot; <a href="/about-us/" style="color: #901941; text-decoration: underline;">Read our full story</a></p>
  </div>
</div>

<!-- Main CTAs -->
<div class="uk-section uk-section-default uk-section-large">
  <div class="uk-container uk-container-small uk-text-center">
    <h2 class="section-title">Ready to Join the Ethical Frenchie Family?</h2>
    <p class="uk-text-lead uk-margin-medium-bottom">Browse our available puppies or start your application today.</p>
    <div class="uk-child-width-1-2@s" data-uk-grid>
      <div>
        <a class="uk-button uk-button-xlarge uk-width-1-1" style="background-color: #901941; color: #fff; border: none;" href="/french-bulldog-puppies/">See Available Puppies</a>
      </div>
      <div>
        <a class="uk-button uk-button-xlarge uk-width-1-1" style="background-color: #901941; color: #fff; border: none;" href="/french-bulldog-puppies/">Apply Now</a>
      </div>
    </div>
  </div>
</div>

{% include menuz.html %}
