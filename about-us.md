---
title: About Us
subtitle: About Ethical Frenchie
description: About Us and Our Mission to Match the Right Families with the Right Puppy
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-6.jpg
  background_overlay: "rgba(0, 0, 0, 0.05)"
  color: light
  header_size: large
  heading_size: medium
  parallax: true
extraseoabout: true
applechat: true
hubspotneeded: true
faqschema: "aboutfaq"
---
{% include block.html 
  block="content-about-us"
  block_title="false"
  section_size="large"
  section_title="How it all began"
  section_padding_remove="bottom"
  section_container="xsmall"
  section_header_align="center"
%}

{% include 
  team.html 
  authors="james, renee, david, ely" 
  section_title="A Family & Friends Run Business" 
  section_subtitle="We're here to answer any questions" 
  section_size="large"
  section_container="expand"
  section_header_align="center"
  section_background="muted"
%}

{% include faqs.html
  multiple="true"
  category="aboutfaq"
  section_title="Frequently Asked Questions"
  section_size="large"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
%}

{% include menuz.html %}