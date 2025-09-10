---
title: Mila
description: Meet Mila, our calm, gentle, and well-behaved Lilac and Tan French Bulldog puppy.
subtitle: Lilac & Tan Frenchie Mila
width: xsmall
image: french-bulldog-puppies/mila/mila.webp
topics: [Our Puppies, Lilac and Tan French Bulldog]

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
permalink: /french-bulldog-puppies/mila
hubspotneeded: true
chat: true

# — Schema + SEO/Listing Triggers —
gender: Female
color_coat: Lilac and Tan
age_weeks: 10
dob: 2025-06-25           # example DOB — update if known
ready_date: 2025-09-10    # example ready date
estimated_adult_weight_lbs: "20–25"
price: 0                  # set to 0 for schema/SEO but hides real rehoming fee
status: available         # available | reserved | adopted
microchipped: true
akc_papers: true
location: New York, NY
parents: ""               # optional — add “Sire: ___, Dam: ___” if desired
date: 2025-09-10          # publish date
last_modified_at: 2025-09-10
---


{% include gallery.html
grid="1-2"
gallery="french-bulldog-puppies/mila/"
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

Meet Mila!

Mila is that rare little soul who seems born with good manners. She’s calm, observant, and carries herself with a quiet confidence that makes her a natural fit in any home. While her littermates tumble and dash about, Mila prefers to sit back and watch, choosing her moments to join in. When she does, she plays kindly and politely, then settles right back into a cozy nap at your side. With her soft lilac-and-tan coat and her easygoing nature, Mila feels less like a puppy you’re training and more like a gentle companion who’s been with you forever.

## Mila's Details

| Attribute       | Description                                  |
| --------------- | -------------------------------------------- |
| Breed           | French Bulldog                               |
| Gender          | Female                                       |
| Color/Coat      | Lilac and Tan                                |
| Age             | 10 weeks (ready now)                         |
| Size            | Small breed, estimated adult weight 20–25 lbs |



## Health & Vaccinations

  • Vaccinations: Up-to-date on DHPP  
  • Deworming: Completed on schedule  
  • Health Check: Fully examined by a licensed veterinarian  
  • Genetic Testing: Clear panel screening

## Temperament & Training

  • Personality: Calm, gentle, well-behaved; enjoys quiet companionship  
  • Training: Started on basic commands and early socialization; doing well with crate training and a steady potty routine

## Payment & Delivery Options

  • Payment Methods: We accept Credit/Debit Cards, PayPal, Venmo, Zelle  
  • Financing: Financing options are available to help bring Mila home  
  • Nationwide Delivery: We deliver puppies anywhere in the United States, ensuring a safe and stress-free travel experience. We travel with the puppy.

## Disclaimer

All our puppies are raised with love and care, and we work to match them with the perfect families. Please note that deposits to reserve a puppy are non-refundable; however, the deposit is transferable to a different litter in the future.

{% include image.html
src="french-bulldog-puppies/mila/mila.webp"
alt="Mila the Lilac and Tan Frenchie"
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

