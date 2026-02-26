---
title: About Us
subtitle: About Ethical Frenchie
description: About Us and Our Mission to Match the Right Families with the Right Puppy
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-6.jpg
  background_overlay: "rgba(0, 0, 0, 0.05)"
  color: light
  header_size: large
  heading_size: medium
  parallax: true
extraseoabout: true
applechat: true
hubspotneeded: true
faqschema: "aboutfaq"
---
{% include block.html 
  block="content-about-us"
  block_title="false"
  section_size="large"
  section_title="How it all began"
  section_padding_remove="bottom"
  section_container="xsmall"
  section_header_align="center"
%}

{% include 
  team.html 
  authors="james, renee, david, ely" 
  section_title="A Family & Friends Run Business" 
  section_subtitle="We're here to answer any questions" 
  section_size="large"
  section_container="expand"
  section_header_align="center"
  section_background="muted"
%}

<div class="uk-section uk-section-default uk-section-large">
  <div class="uk-container uk-container-small uk-text-center">
    <h2 class="section-title">Why Families Trust Ethical Frenchie</h2>
    <p class="uk-text-lead uk-margin-medium-bottom">Every puppy we place comes with our full commitment</p>

    <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match uk-margin-large-top" data-uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-text-center">
          <span data-uk-icon="icon: check; ratio: 2.5" style="color: #901941;" class="uk-margin-small-bottom"></span>
          <h4><a href="https://embarkvet.com/" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">Embark</a> DNA Tested</h4>
          <p class="uk-text-small">Think 23&Me, but for dogs. Every parent is tested for 250+ genetic health conditions. Reports shared with every buyer.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-text-center">
          <span data-uk-icon="icon: receiver; ratio: 2.5" style="color: #901941;" class="uk-margin-small-bottom"></span>
          <h4>Lifetime Support</h4>
          <p class="uk-text-small">We're a text or call away — forever. Questions about diet, training, health? We're here.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-text-center">
          <span data-uk-icon="icon: location; ratio: 2.5" style="color: #901941;" class="uk-margin-small-bottom"></span>
          <h4>Hand Delivery</h4>
          <p class="uk-text-small">We personally deliver every puppy. The person you FaceTime with is the person you meet. No middlemen. Ever.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-text-center">
          <span data-uk-icon="icon: users; ratio: 2.5" style="color: #901941;" class="uk-margin-small-bottom"></span>
          <h4>Community</h4>
          <p class="uk-text-small">Join hundreds of Ethical Frenchie families. We love getting puppy updates!</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% include faqs.html
  multiple="true"
  category="aboutfaq"
  section_title="Frequently Asked Questions"
  section_size="large"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
%}

{% include menuz.html %}