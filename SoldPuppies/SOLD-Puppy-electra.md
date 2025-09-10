---
title: Electra
hidden: true
subtitle: Electra Is Sold
width: full
image: /merle-french-bulldog-diamond/diamond.jpg
topics: [Our Puppies, sold]
draft: true
navbar:
  sticky: false
  transparent: true
  transparent_color: light
header:
  layout: center # Options: center 1-2 or 2-3
  background_image: / 
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: xlarge
  parallax: true
permalink: /puppies/electra/
pipedrive: true
redirect_from:
- /puppies/Lemon


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
  block="sold-electra"
  section_size="medium"
  section_container="xsmall"
  section_header_align="center"
  section_title="Found a home!"
  block_title="false"
%}



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Electra",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
