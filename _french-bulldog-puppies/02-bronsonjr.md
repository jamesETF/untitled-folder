---
title: Bronson Jr.
description: Meet Bronson Jr., our adventurous, curious, and playful Blue Merle French Bulldog puppy.
subtitle: Blue Merle Frenchie Bronson Jr.
width: xsmall
image: french-bulldog-puppies/bronsonjr/bronsonjr.webp
topics: [Our Puppies, Blue Merle French Bulldog]
date: 2025-09-25

# — Schema + SEO/Listing Triggers —
gender: Male
color_coat: "Blue Merle"
age_weeks: 8
dob: 2025-07-15
ready_date: 2025-09-10
estimated_adult_weight_lbs: "22–27"
price: 0
status: available
microchipped: true
akc_papers: true
location: New York, NY
last_modified_at: 2025-09-25
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
permalink: /french-bulldog-puppies/bronsonjr
hubspotneeded: true
chat: true
---

{% include gallery.html
grid="1-2"
gallery="french-bulldog-puppies/bronsonjr/"
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

# Meet Bronson Jr.!

Bronson Jr. is the explorer of his litter—always curious, always ready to check out something new. With his striking Blue Merle coat and bright, thoughtful eyes, he has the look of a pup who’s already planning his next little adventure. Whether it’s chasing a leaf in the breeze or finding the sunniest spot in the yard, Bronson Jr.’s playful spirit brings joy and energy to every moment.

Though he’s bold and full of life, Bronson Jr. balances it with loyalty and affection. After a big day of exploring, he loves to curl up for a cuddle, showing that he’s as sweet and snuggly as he is adventurous. For families wanting a companion with both spark and sweetness, Bronson Jr. is the perfect fit.

---

## Bronson Jr.’s Details

| Attribute       | Description                |
| --------------- | -------------------------- |
| Breed           | French Bulldog             |
| Gender          | Male                       |
| Color/Coat      | Blue Merle                 |
| Age             | 8 weeks (ready now)        |
| Size            | Small breed, estimated adult weight 22–27 lbs |

---

## Health & Vaccinations

- **Vaccinations:** Up-to-date on DHPP  
- **Deworming:** Completed on schedule  
- **Health Check:** Examined by a licensed veterinarian  
- **Genetic Testing:** Clear of genetic disorders based on panel screening  

---

## Temperament & Training

- **Personality:** Adventurous, curious, and playful — loves discovering new things  
- **Training:** Started on basic commands and early socialization  

---

## Payment & Delivery Options

- **Payment Methods:** We accept Credit/Debit Cards, PayPal, Venmo, Zelle  
- **Financing:** Available to help bring Bronson Jr. home  
- **Nationwide Delivery:** Safe, hand-delivery anywhere in the U.S.  

---

## Disclaimer

All our puppies are raised with love and care, and we work to match them with the perfect families. Deposits to reserve a puppy are **non-refundable** but transferable to a future litter.

---

{% include image.html
src="french-bulldog-puppies/bronsonjr/bronsonjr.webp"
alt="Bronson Jr. the Blue Merle French Bulldog puppy"
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

---

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
    "minValue": 22,
    "maxValue": 27
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
