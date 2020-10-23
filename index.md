---
title: Ethical Frenchie
width: full
section: large
description: A family and friends based French Bulldog Breeder near New York, NY and North Carolina. We welcome you to Learn more about us and our french bulldog puppies for sale.
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
parallax: true
---

{% if site.template == 'base' %}


{% include cards.html 
  block="homeabout" 
  section_title="Ethically Bred French Bulldog Puppies for sale"
  section_header_align="center"
  section_size="large"
  section_background="muted"
  card_style="default"
  grid="1-1"
  gutter="small"
  section_content_align="center"
%}

{% include cards.html 
  block="frenchie-breeder-1" 
  media="right" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
  card_style="primary"
%}
{% include cards.html 
  block="frenchie-breeder-2" 
  media="left" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
  card_style="secondary"
%}
{% include cards.html 
  block="frenchie-breeder-3" 
  media="right" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
  card_style="primary"
%}
{% else %}
{% endif %}
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