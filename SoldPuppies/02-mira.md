---
title: Mira
description: Meet Mira, our active and friendly Blue French Bulldog puppy.
subtitle: Blue Frenchie Mira
width: xsmall
image: french-bulldog-puppies/mira/mira.webp
topics: [Our Puppies, Blue French Bulldog]
navbar:
 sticky: true
 scroll_up: true
 animation: true
 transparent: false
 transparent_color: light
header:
 layout: center
 background_image: /french-bulldog-wallpaper.jpg
 background_overlay: "rgba(0, 0, 0, 0.07)"
 color: light
 header_size: medium
parallax: false
permalink: /french-bulldog-puppies/mira
hubspotneeded: true
chat: true
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

{% include gallery.html
grid="1-2"
gallery="french-bulldog-puppies/mira/"
caption="true"
lightbox="true"
section_size="large"
%}

<center><a class="uk-button uk-button-danger uk-border-pill uk-button-xlarge my-border-rounded" href="tel:212-739-0182">
    <span data-uk-icon="phone" class="uk-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
    </span>
    Contact Us
</a>
</center>
{% include alert.html text="Interested in Mira? Send us an iMessage! (Or use the contact form at the end of the page)" style="danger" %}

About The Puppy!
Meet Mira, our active and friendly blue French Bulldog. Her sweet and sassy nature, combined with her stunning blue color, makes her an irresistible companion. Mira is full of energy and loves to play, ensuring that there is never a dull moment when she is around.

Mira is a social butterfly, making friends with everyone she meets, both humans and other pets. Her friendly nature makes her a great fit for families, and her sassy personality ensures she always stands out in the best way possible.

Not only is Mira active and friendly, but she is also smart and quick to learn new tricks. Her responsiveness to training and adaptability to different environments make her a joy to have around. She brings a sense of fun and excitement to any household.

Whether you're looking for an energetic playmate or a loving companion, Mira is the perfect choice. She brings joy and laughter to every moment, ready to fill your home with love and happiness.

Mira is eagerly waiting to join her forever family and share her lively spirit and playful antics. With her, every day is an adventure filled with fun and affection.

{% include image.html
src="french-bulldog-puppies/mira/mira.webp"
alt="Mira the Blue Frenchie"
section_size="medium"
section_padding_remove="top"
section_container="small"
%}

{% include reviewsg.html
layout="1-1"
section_size="large"
section_background="muted"
section_container="large"
section_content_align="center"
%}
%}
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
{% include hubspotform.html %}



<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Mira",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/SoldOut"
  }
}
</script>
