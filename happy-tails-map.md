---
title: Happy Tails Map
subtitle: Our Puppies Across the Country
description: See where Ethical Frenchie puppies have found their forever families on our interactive map. 40+ French Bulldogs placed nationwide.
layout: full
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: light
header:
  layout: center
  background_image: header-6.jpg
  background_overlay: "rgba(144, 25, 65, 0.55)"
  color: light
  header_size: medium
  heading_size: medium
  parallax: true
permalink: /happy-tails-map/
applechat: false
hubspotneeded: false
---

<!-- ============================================================
     HAPPY TAILS INTERACTIVE MAP
     All CSS and JS is inline — zero global impact on other pages.
     ============================================================ -->

<style>
  /* --- Map container --- */
  #happy-tails-map {
    width: 100%;
    height: 70vh;
    min-height: 500px;
    max-height: 800px;
  }
  @media (max-width: 640px) {
    #happy-tails-map {
      height: 60vh;
      min-height: 400px;
    }
  }

  /* --- InfoWindow card --- */
  .ht-popup {
    font-family: 'Montserrat', sans-serif;
    max-width: 300px;
    padding: 0;
  }
  .ht-popup-name {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin: 0 0 4px 0;
  }
  .ht-popup-region {
    font-size: 13px;
    color: #901941;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  .ht-popup-quote {
    font-size: 14px;
    color: #5c5e65;
    line-height: 1.5;
    margin: 0 0 12px 0;
    font-style: italic;
  }
  .ht-popup-owner {
    font-size: 12px;
    color: #999;
    margin: 0;
  }

  /* --- Before/After slider --- */
  .ht-slider-wrap {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 12px;
    background: #f0f0f0;
    cursor: ew-resize;
    touch-action: none;
  }
  .ht-slider-wrap img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ht-slider-after {
    clip-path: inset(0 0 0 50%);
  }
  .ht-slider-divider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: #fff;
    box-shadow: 0 0 6px rgba(0,0,0,0.4);
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  .ht-slider-handle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    background: #901941;
    border: 3px solid #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    pointer-events: none;
  }
  .ht-slider-label {
    position: absolute;
    bottom: 8px;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    background: rgba(0,0,0,0.5);
    padding: 2px 8px;
    border-radius: 3px;
    z-index: 2;
    pointer-events: none;
  }
  .ht-slider-label-then { left: 8px; }
  .ht-slider-label-now { right: 8px; }

  /* --- No-photo placeholder --- */
  .ht-no-photo {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #f8f0f3 0%, #ede0e5 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #901941;
    font-size: 13px;
    font-weight: 600;
  }

  /* --- Stats bar --- */
  .ht-stats {
    background: #f8f8f8;
    padding: 20px 0;
    text-align: center;
  }
  .ht-stats-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .ht-stat-num {
    font-size: 28px;
    font-weight: 700;
    color: #901941;
    margin: 0;
  }
  .ht-stat-label {
    font-size: 13px;
    font-weight: 600;
    color: #5c5e65;
    margin: 4px 0 0 0;
  }

  /* --- Loading state --- */
  .ht-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #901941;
    font-size: 16px;
    font-weight: 600;
  }

  /* --- Bottom CTA --- */
  .ht-cta-section {
    padding: 60px 20px;
    text-align: center;
  }
  .ht-cta-title {
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin: 0 0 12px 0;
  }
  .ht-cta-sub {
    font-size: 16px;
    color: #5c5e65;
    margin: 0 0 30px 0;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .ht-cta-btn {
    display: inline-block;
    background: #901941;
    color: #fff !important;
    padding: 14px 32px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none !important;
    margin: 0 8px 12px;
  }
  .ht-cta-btn:hover { opacity: 0.9; }
  .ht-cta-btn--outline {
    background: transparent;
    color: #901941 !important;
    border: 2px solid #901941;
  }
</style>

<!-- Stats Bar -->
<div class="ht-stats">
  <div class="ht-stats-grid">
    <div>
      <p class="ht-stat-num">40+</p>
      <p class="ht-stat-label">Furever Homes Found</p>
    </div>
    <div>
      <p class="ht-stat-num">All 50</p>
      <p class="ht-stat-label">States Served</p>
    </div>
    <div>
      <p class="ht-stat-num">Lifetime</p>
      <p class="ht-stat-label">Health Guarantee</p>
    </div>
  </div>
</div>

<!-- Map -->
<div id="happy-tails-map">
  <div class="ht-loading">Loading map...</div>
</div>

<!-- Submit CTA -->
<div style="background: #901941; padding: 30px 20px; text-align: center;">
  <p style="color: #fff; font-size: 20px; font-weight: 700; margin: 0 0 8px 0;">Have an Ethical Frenchie at Home?</p>
  <p style="color: rgba(255,255,255,0.85); font-size: 15px; margin: 0 0 20px 0;">Submit your pup's before & after photos for our map!</p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSehuypnX_BbJ1NzjxW8-cmyLgTldJuaWib804EXitC4fYKleA/viewform" target="_blank" style="display:inline-block; background:#fff; color:#901941; padding:12px 28px; border-radius:4px; font-weight:700; font-size:15px; text-decoration:none;">Submit Your Photos</a>
</div>

<!-- Bottom CTAs -->
<div class="ht-cta-section">
  <p class="ht-cta-title">Ready to Start Your Own Happy Tail?</p>
  <p class="ht-cta-sub">Browse our available puppies or apply to join the Ethical Frenchie family.</p>
  <a class="ht-cta-btn" href="/french-bulldog-puppies/">See Available Puppies</a>
  <a class="ht-cta-btn ht-cta-btn--outline" href="/puppies/">Apply Now</a>
</div>

<!-- ============================================================
     MAP JAVASCRIPT — All inline, only loaded on this page
     ============================================================ -->
<script>
(function() {
  // --- Config ---
  var API_URL = 'https://script.google.com/macros/s/AKfycbyv-m5LjiKZJuU1nGzO-J_lFaeTm2WzNNKVr5oWywe9A3qh2EqG1qsEPqve-743hPJ8/exec';
  var MAP_CENTER = { lat: 38.5, lng: -96.5 }; // center of US
  var MAP_ZOOM = 4;
  var BRAND_COLOR = '#901941';

  // --- Silver map style (from existing map.html) ---
  var silverStyle = [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
    { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
    { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
  ];

  // --- Custom marker SVG ---
  function createMarkerIcon() {
    return {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">' +
        '<path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 24 14 24s14-13.5 14-24C28 6.268 21.732 0 14 0z" fill="' + BRAND_COLOR + '"/>' +
        '<circle cx="14" cy="13" r="6" fill="white"/>' +
        '<text x="14" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="' + BRAND_COLOR + '">&#x1f43e;</text>' +
        '</svg>'
      ),
      scaledSize: new google.maps.Size(28, 38),
      anchor: new google.maps.Point(14, 38)
    };
  }

  // --- Build InfoWindow HTML ---
  function buildPopupHTML(puppy) {
    var html = '<div class="ht-popup">';

    // Before/after slider (if photos exist)
    if (puppy.thenPhoto && puppy.nowPhoto) {
      html += '<div class="ht-slider-wrap" data-slider>' +
        '<img class="ht-slider-before" src="' + puppy.thenPhoto + '" alt="' + puppy.name + ' then">' +
        '<img class="ht-slider-after" src="' + puppy.nowPhoto + '" alt="' + puppy.name + ' now">' +
        '<div class="ht-slider-divider"></div>' +
        '<div class="ht-slider-handle"></div>' +
        '<span class="ht-slider-label ht-slider-label-then">Then</span>' +
        '<span class="ht-slider-label ht-slider-label-now">Now</span>' +
        '</div>';
    } else {
      html += '<div class="ht-no-photo">Photos coming soon</div>';
    }

    html += '<p class="ht-popup-name">' + puppy.name + '</p>' +
      '<p class="ht-popup-region">' + puppy.region + '</p>' +
      '<p class="ht-popup-quote">"' + puppy.quote + '"</p>' +
      '<p class="ht-popup-owner">— ' + puppy.owner + '</p>' +
      '</div>';

    return html;
  }

  // --- Initialize slider drag behavior ---
  function initSlider(infoWindow) {
    // Wait for DOM to render
    google.maps.event.addListenerOnce(infoWindow, 'domready', function() {
      var sliders = document.querySelectorAll('[data-slider]');
      sliders.forEach(function(wrap) {
        if (wrap._sliderInit) return;
        wrap._sliderInit = true;

        var afterImg = wrap.querySelector('.ht-slider-after');
        var divider = wrap.querySelector('.ht-slider-divider');
        var handle = wrap.querySelector('.ht-slider-handle');
        var dragging = false;

        function updatePosition(x) {
          var rect = wrap.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
          var pctStr = (pct * 100) + '%';
          afterImg.style.clipPath = 'inset(0 0 0 ' + pctStr + ')';
          divider.style.left = pctStr;
          handle.style.left = pctStr;
        }

        wrap.addEventListener('mousedown', function(e) { dragging = true; updatePosition(e.clientX); });
        document.addEventListener('mousemove', function(e) { if (dragging) updatePosition(e.clientX); });
        document.addEventListener('mouseup', function() { dragging = false; });

        wrap.addEventListener('touchstart', function(e) { dragging = true; updatePosition(e.touches[0].clientX); }, { passive: true });
        document.addEventListener('touchmove', function(e) { if (dragging) updatePosition(e.touches[0].clientX); }, { passive: true });
        document.addEventListener('touchend', function() { dragging = false; });
      });
    });
  }

  // --- Main init ---
  window.initHappyTailsMap = function() {
    var mapEl = document.getElementById('happy-tails-map');
    mapEl.innerHTML = ''; // clear loading

    var map = new google.maps.Map(mapEl, {
      zoom: MAP_ZOOM,
      center: MAP_CENTER,
      styles: silverStyle,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Fetch puppy data from Apps Script proxy
    fetch(API_URL)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.puppies || !data.puppies.length) {
          mapEl.innerHTML = '<div class="ht-loading">No puppies found yet!</div>';
          return;
        }

        var openInfoWindow = null;
        var markerIcon = createMarkerIcon();

        data.puppies.forEach(function(puppy) {
          var marker = new google.maps.Marker({
            position: { lat: puppy.lat, lng: puppy.lng },
            map: map,
            icon: markerIcon,
            title: puppy.name + ' — ' + puppy.region
          });

          var infoWindow = new google.maps.InfoWindow({
            content: buildPopupHTML(puppy),
            maxWidth: 320
          });

          marker.addListener('click', function() {
            if (openInfoWindow) openInfoWindow.close();
            infoWindow.open(map, marker);
            openInfoWindow = infoWindow;
            initSlider(infoWindow);
          });
        });

        // Update pin count
        var countEl = document.getElementById('ht-pin-count');
        if (countEl) countEl.textContent = data.puppies.length;
      })
      .catch(function(err) {
        console.error('Happy Tails Map error:', err);
        mapEl.innerHTML = '<div class="ht-loading">Could not load map data. Please try again later.</div>';
      });
  };
})();
</script>

<!-- Load Google Maps API (only on this page) -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key={{ site.google_maps_api_key }}&callback=initHappyTailsMap"></script>
