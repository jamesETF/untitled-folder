---
width: full
layout: full
navbar:
  sticky: false
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: 1-1 # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: Working-Space.jpg
  background_overlay: "linear-gradient(to left top,rgba(218, 91, 197, 0.8) 0%,rgba(151, 27, 191, 0.8) 30%,rgba(2, 8, 212, 0.8) 80%)"
  color: light
  heading_size: medium
  height: full
  parallax: true
  container: small
  content:
    block: header-home

---

[comment]: # (This actually is the most platform independent comment)

[comment]: # (This actually is the most platform independent comment)

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