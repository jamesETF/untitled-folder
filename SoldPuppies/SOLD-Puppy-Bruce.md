---
title: Bruce - Blue Pied French Bulldog
hidden: true
subtitle: Bruce Found a Home
description: Bruce is a blue pied Frenchie Pup, and a happy one in Virginia.
width: xsmall
image: blue-french-bulldog-puppy-bruce/bruce-frenchie-hoodie.jpg
navbar:
  sticky: false
  transparent: true
  transparent_color: light
header:
  layout: center # Options: center 1-2 or 2-3
  background_image: /french-bulldog-wallpaper.jpg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: xlarge
  parallax: true
permalink: /puppies/blue-french-bulldog-puppy-bruce/
pipedrive: true

status: sold
price: 0
currency: "USD"
---
{% if page.status == "available" %}
  <center>
    <a class="uk-button uk-button-danger uk-border-pill" href="/contact">
      Inquire About This Puppy
    </a>
  </center>
{% elsif page.status == "sold" %}
  <center>
    <div class="uk-alert-success uk-border-pill uk-text-bold uk-padding-small" uk-alert>
      This puppy has found a loving home ❤️
    </div>
    <p class="uk-text-center">
      <a href="/french-bulldog-puppies/" class="uk-button uk-button-primary uk-border-pill">
        View Available Puppies
      </a>
    </p>
  </center>
{% endif %}

Bruce Found a Home in Virginia! with a wonderful Family.

However, we have a few litters every now and then including perfect puppies sourced within our partner puppy network.

Please view [Our Current Puppies](/french-bulldog-puppies)

{% include button.html text="View our Available puppies" url="/french-bulldog-puppies" style="primary" size="xlarge" width="full" %}

{% include reviewsfb.html 
   layout="1-1"
  section_size="large"
  section_background="muted"
  section_container="large"
  section_content_align="center"
%}


{% include map.html 
  latitude="37.9864132" 
  longitude="-81.6639971" 
  zoom="12" 
  style="silver" 
  section_container="expand"
  %}



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Bruce - Blue Pied French Bulldog",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
