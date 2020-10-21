---
title: Ethical Frenchie
width: full
section: large
description: A family and friends based French Bulldog Breeder located in New York, NY. We welcome you to Learn more about us and our ethically bred french bulldog puppies.
header:
  layout: 1-2 # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_color: "#901941"
  background_image: "../uploads/nylotto.jpg"
  color: light
  height: medium
  header_size: medium
  heading_size: large
  content:
    block: block-video
  content-2:
    block: block-video-2
    title: false
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
extraseohome: true
pipedrive: false
netlify: false
---

{% if site.template == 'base' %}


{% include cards.html 
  block="homeabout" 
  section_title="Trusted Source for Ethically Bred Frenchie Furbabies"
  section_header_align="center"
  section_size="large"
  section_padding_remove="bottom"
  section_background="muted"
  grid="1-1"
  gutter="small"
  section_content_align="center"
%}

{% include cards.html 
  block="frenchie-breeder" 
  media="top" 
  section_size="large"
  section_background="muted"
  section_content_align="center"
  card_style="default"
  grid="1-3"
%}
{% else %}
{% endif %}
{% include cards.html block="index-blog-portion" media="top" section_size="large" section_background="muted" section_content_align="center" card_style="default" grid="1-1" %}

{% include cta.html 
    section_size="small"
    section_image="header-6.jpg"
    section_overlay="rgba(0, 0, 0, 0.5)"
    section_container="small"
    section_content_align="center"
    section_content_color="light"
    layout="1"
    block="cta-4"
  %}
{% include menuz.html %}