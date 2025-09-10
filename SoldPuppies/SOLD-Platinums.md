---
title: Prince Harry & William
description: Prince Harry & William are a rare exception to the French Bulldog world, It is not often you will see a "Platinum" french bulldog, the only thing more rare is a Furry. Thes platinum puppies are 2 of 3 (one is in North Carolina). They are so rare, that We believe there are fewer than 2 in New York.

subtitle: Charles & Harry "Prince Charles & Harry" The Platinum French Bulldog Puppies of York.
width: xsmall
image: Platinum-french-bulldog-puppy/Harry-and-charles-platinum-frenchie.jpg
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
permalink: /puppies/Platinum-french-bulldog-puppy/
pipedrive: false
applechat: true
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

{% include imessagecontact.html %}
{% include image.html 
	src="Platinum-french-bulldog-puppy/Harry-and-charles-platinum-frenchie.jpg"
  alt="Blue French Bulldog Puppy"
  section_size="large"
  section_padding_remove="bottom"
  section_title="Harry & William"
  section_header_align="center"
  section_container="medium"
  lightbox="true"
%}


William and Harry found homes! with a wonderful Family.

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



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Prince Harry & William",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
