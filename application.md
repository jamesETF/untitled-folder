---
title: Application
subtitle: Because seriously, There are more inquiries than puppies. Lets make sure this is a good fit.
width: full
navbar:
  sticky: false
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_overlay: "rgba(0, 0, 0, 0.45)"
  background_align: top-center
  color: light
  header_size: xsmall
  heading_size: medium
  parallax: true
---


{% include application.html section_content_align="center" section_size="xlarge" %}
{% include reviewsfb.html 
   layout="1-1"
  section_size="large"
  section_background="muted"
  section_container="large"
  section_content_align="center"
%}
{% include faqs.html 
  multiple="true" 
  category="application" 
  section_title="Application FAQ" 
  section_size="small"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
%}
