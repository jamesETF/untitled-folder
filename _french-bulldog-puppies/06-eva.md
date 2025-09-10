---
title: Eva
description: Meet Eva, our sweet, shy, and tender Blue French Bulldog puppy.
subtitle: Blue Frenchie Eva
width: xsmall
image: french-bulldog-puppies/eva/eva.webp
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
permalink: /french-bulldog-puppies/eva
hubspotneeded: true
chat: true

# --- Added fields for schema + consistency ---
gender: Female
color_coat: Blue
age_weeks: 10
dob: 2025-06-30           # optional, if you want to display actual DOB
ready_date: 2025-09-10    # optional, useful for SEO/structured data
estimated_adult_weight_lbs: "20–25"
price: 0               # optional (set 0 if you don’t want to display a rehoming fee)
status: available         # available | reserved | adopted
microchipped: true
akc_papers: true
location: New York, NY
parents: "Sire: Romeo, Dam: Bella"   # optional
date: 2025-09-10          # publish date
last_modified_at: 2025-09-10
---

{% include gallery.html
grid="1-2"
gallery="french-bulldog-puppies/eva/"
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

Meet Eva!

Eva is the gentle heart of the group—a little shy at first, but once she warms up, she’ll stay close by your side like a quiet shadow. She has a soft, patient way about her, watching the world with big, thoughtful eyes before deciding to join in. Once she feels safe, her sweetness shines through: she’ll press her head against your hand or curl up neatly at your feet, content just to be near. Eva’s calm, tender nature makes her especially easy to bond with, and she’s the type of companion who turns every moment into a soft, steady kind of joy.

## Eva's Details

| Attribute       | Description                                  |
| --------------- | -------------------------------------------- |
| Breed           | French Bulldog                               |
| Gender          | Female                                       |
| Color/Coat      | Blue                                         |
| Age             | 10 weeks (ready now)                         |
| Size            | Small breed, estimated adult weight 20–25 lbs |

 
## Health & Vaccinations

  • Vaccinations: Up-to-date on DHPP  
  • Deworming: Completed on schedule  
  • Health Check: Fully examined by a licensed veterinarian  
  • Genetic Testing: Clear panel screening

## Temperament & Training

  • Personality: Sweet, shy, gentle; warms up with patience and affection  
  • Training: Started on basic commands and early socialization; adapting well to a calm environment

## Payment & Delivery Options

  • Payment Methods: We accept Credit/Debit Cards, PayPal, Venmo, Zelle  
  • Financing: Financing options are available to help bring Eva home  
  • Nationwide Delivery: We deliver puppies anywhere in the United States, ensuring a safe and stress-free travel experience. We travel with the puppy.

## Disclaimer

All our puppies are raised with love and care, and we work to match them with the perfect families. Please note that deposits to reserve a puppy are non-refundable; however, the deposit is transferable to a different litter in the future.

{% include image.html
src="french-bulldog-puppies/eva/eva.webp"
alt="Eva the Blue Frenchie"
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
