---
title: Ego
subtitle: I’m a Blue French Bulldog puppy for sale located in New York City. And not just a regular Blue, i'm the **cutest** blue you'll ever see.
width: xsmall
image: /ego.jpg
topics: [Our Puppies, Blue French Bulldog]
navbar:
  sticky: true
  transparent: true
  transparent_color: light
header:
  layout: center # Options: center 1-2 or 2-3
  background_image: /french-bulldog-wallpaper.jpg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: medium
  parallax: true
permalink: /puppies/ego/
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

Ego Found a Home in Brooklyn, NY with a wonderful Family.

However, we have a few litters every now and then including perfect puppies sourced within our partner puppy network.

Please view [Our Current Puppies](/french-bulldog-puppies)

{% include button.html text="View our Available puppies" url="/french-bulldog-puppies" style="primary" size="xlarge" width="full" %}



{% include gallery.html 
	grid="1-2"
	gallery="blue-french-bulldog-ego"
	caption="true"
	lightbox="true"
  section_size="medium"
  section_padding_remove="top"
%}

{% include block.html 
  block="apuppyegospecs"
  section_size="medium"
  section_container="xsmall"
  section_header_align="center"
  section_title="About Ego"
  block_title="false"
%}


{% include block.html 
  block="acespecs2"
  section_size="medium"
  section_padding_remove="top"
  section_container="xsmall"
  section_header_align="center"
  section_title="How it works (How to Apply)"
  block_title="false"
%}

{% include image.html 
	src="/ego.jpg"
  alt="Ego the Frenchie"
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
%}



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Ego",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
