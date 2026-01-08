---
title: Labubu
description: Meet Labubu, our charming and affectionate Micro Fluffy Merle & Lilac French Bulldog puppy.
subtitle: Micro Fluffy Merle & Lilac Frenchie Labubu
width: xsmall
image: french-bulldog-puppies/labubu/labubu.webp
topics: [Our Puppies, Micro Fluffy Merle & Lilac French Bulldog]

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
permalink: /french-bulldog-puppies/labubu
hubspotneeded: true
chat: true

# — Schema + SEO/Listing Triggers —
gender: Female
color_coat: "Micro Fluffy Merle & Lilac"
age_weeks: 8
dob: 2025-07-15           # example — update with her actual DOB if known
ready_date: 2025-09-10    # example — update if you have a set date
estimated_adult_weight_lbs: "16–20"
price: 0               # or set to 0 if you prefer not to display
status: available         # available | reserved | adopted
microchipped: true
akc_papers: true
location: New York, NY
parents: ""               # optional — add “Sire: ___, Dam: ___” if desired
date: 2025-09-25          # publish date
last_modified_at: 2025-09-25
---

{% include gallery.html
grid="1-2"
gallery="french-bulldog-puppies/labubu/"
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

Hello to Labubu!

Labubu is our adorable and affectionate Micro Fluffy Merle & Lilac French Bulldog puppy. This cute little ball of love lights up any room with her spunky personality and can't get enough of smothering her family with snuggly soft kisses. Her unique Micro Fluffy Merle & Lilac color and sparkling eyes make her a true one-of-a-kind best buddy.

## Labubu's Details

| Attribute       | Description                |
| --------------- | -------------------------- |
| Breed           | French Bulldog             |
| Gender          | Female                     |
| Color/Coat      | Micro Fluffy Merle & Lilac |
| Age             | 8 weeks (ready now)        |
| Size            | Small breed, estimated adult weight 16-20 lbs |

  • Breed: French Bulldog
  • Gender: Female
  • Color/Coat: Micro Fluffy Merle & Lilac
  • Age: 8 weeks (ready to join her forever home now)
  • Size: Small breed, estimated adult weight 16-20 lbs

## Health & Vaccinations

  • Vaccinations: Up-to-date on DHPP
  • Deworming: Completed on schedule
  • Health Check: Fully examined by a licensed veterinarian
  • Genetic Testing: Clear of genetic disorders based on a panel screening

## Temperament & Training

  • Personality: Charming, affectionate, and playful, loves cuddles and playtime
  • Training: Started on basic commands and socialization

## Payment & Delivery Options

  • Payment Methods: We accept Credit/Debit Cards, PayPal, Venmo, Zelle
  • Financing: Financing options are available to help bring Labubu home
  • Nationwide Delivery: We deliver puppies anywhere in the United States, ensuring a safe and stress-free travel experience. We travel with the puppy.

## Disclaimer

All our puppies are raised with love and care, and we work to match them with the perfect families. Please note that deposits to reserve a puppy are non-refundable; however, the deposit is transferable to a different litter in the future.

{% include image.html
src="french-bulldog-puppies/labubu/labubu.webp"
alt="Labubu the Micro Fluffy Merle & Lilac Frenchie"
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
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ page.title }} — French Bulldog Puppy",
  "description": "{{ page.description | strip_newlines | escape }}",
  "image": [
    "{{ site.url }}{{ site.baseurl }}/{{ page.image }}"
  ],
  "sku": "{{ page.permalink | split: '/' | last }}",
  "brand": {
    "@type": "Brand",
    "name": "Ethical Frenchie"
  },
  "category": "Pets",
  "color": "{{ page.color_coat | default: '' }}",
  "gender": "{{ page.gender | default: '' }}",
  "weight": {
    "@type": "QuantitativeValue",
    "unitCode": "LBR",
    "minValue": 20,
    "maxValue": 25
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Vaccinations",
      "value": "Up-to-date on DHPP"
    },
    {
      "@type": "PropertyValue",
      "name": "Deworming",
      "value": "Completed on schedule"
    },
    {
      "@type": "PropertyValue",
      "name": "Veterinary Health Check",
      "value": "Fully examined by a licensed veterinarian"
    },
    {
      "@type": "PropertyValue",
      "name": "Genetic Testing",
      "value": "Clear panel screening"
    },
    {
      "@type": "PropertyValue",
      "name": "Microchip",
      "value": "{% if page.microchipped %}Yes{% else %}No{% endif %}"
    },
    {
      "@type": "PropertyValue",
      "name": "AKC Papers",
      "value": "{% if page.akc_papers %}Yes{% else %}No{% endif %}"
    }
  ],
  "offers": {
    "@type": "Offer",
    "url": "{{ site.url }}{{ page.permalink }}",
    "priceCurrency": "USD",
    "price": "{{ page.price | default: 0 }}",
    "availability": "https://schema.org/{% if page.status == 'available' %}InStock{% elsif page.status == 'reserved' %}PreOrder{% else %}SoldOut{% endif %}",
    "seller": {
      "@type": "Organization",
      "name": "Ethical Frenchie",
      "url": "{{ site.url }}",
      "telephone": "+1-212-739-0182",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    }
  },
  "datePublished": "{{ page.date | date_to_xmlschema }}",
  "dateModified": "{% if page.last_modified_at %}{{ page.last_modified_at | date_to_xmlschema }}{% else %}{{ page.date | date_to_xmlschema }}{% endif %}"
}
</script>
