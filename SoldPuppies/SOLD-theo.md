---
title: Theo Found a home
subtitle: 
image: /blue-french-bulldog-puppy-theo/blue-frenchie-puppy-theo.jpg
width: full
navbar:
  transparent: true
  transparent_color: light
header:
  layout: center # Options: center 1-2 or 2-3
  background_image: blue-french-bulldog-puppy-theo/blue-frenchie-puppy-theo.jpg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: xlarge
  parallax: true
permalink: /puppies/blue-french-bulldog-puppy-theo/
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

{% include block.html 
  block="theosold"
  section_container="xsmall"
  section_size="medium"
  block_title="false"
%}

{% include map.html 
  latitude="35.843965" 
  longitude="-78.7851394" 
  zoom="12" 
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
  height="large"
%}



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Theo Found a home",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
