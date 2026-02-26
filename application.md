---
title: Application
subtitle: Application Process
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
<div class="uk-section uk-section-muted uk-section-large">
  <div class="uk-container uk-container-small uk-text-center">
    <h2 class="section-title">What Our Families Say</h2>
    <p class="uk-text-lead uk-margin-medium-bottom">Hundreds of families have trusted Ethical Frenchie. Here's what they have to say.</p>
    <a class="uk-button uk-button-xlarge" style="background-color: #901941; color: #fff; border: none;" href="/happy-tails/">See Our Happy Tails</a>
  </div>
</div>

{% include faqs.html
  multiple="true"
  category="application" 
  section_title="Application FAQ" 
  section_size="small"
  section_background="default"
  section_container="xsmall"
  section_header_align="center"
%}
{% include menuz.html %}