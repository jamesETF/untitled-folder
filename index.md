---
title: Ethical Frenchie
width: full
section: large
description: A family and friends based French Bulldog Breeder. We welcome you to Learn more about us and our french bulldog puppies for sale.
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
indexfaq: true
nyc: true

---

{% if site.template == 'base' %}

{% include cards.html 
  block="abaaba" 
  section_title="Ethically Bred French Bulldog Puppies"
  section_header_align="center"
  section_size="large"
  section_background="muted"
  card_style="default"
  grid="1-1"
  gutter="small"
  section_content_align="center"
  section_padding_remove="bottom"
%}
{% include cards.html 
  block="frenchie-breeder-1" 
  media="right" 
  section_size="large"
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
  section_background="default"
  card_style="primary"
  section_padding_remove="top"
%}
{% else %}
{% endif %}
{% include cards.html 
  block="homescams" 
  section_header_align="center"
  section_size="large"
  section_background="muted"
  card_style="default"
  grid="1-1"
  gutter="small"
  section_content_align="center"
  section_padding_remove="top"
%}
{% include faqs.html 
  multiple="true" 
  category="indexfaq" 
  section_title="Quick #FACTS" 
  section_size="small"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
  section_padding_remove="top"
%}

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