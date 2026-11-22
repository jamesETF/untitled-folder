/* Seasonal snowfall for the holiday theme (_includes/holiday/). Loaded by holiday/banner.html
   after the page has finished loading, and only while the theme is showing, the visitor allows
   motion and has not paused it. One fixed canvas that ignores taps and clicks, so it cannot
   shift the layout or block anything. Mostly soft flakes, a few six-armed crystals, and now
   and then a paw print. Starts as a light flurry and thins out after a few seconds. */
(function () {
  "use strict";
  if (window.efSnow) return;

  var FROST = "214,226,238"; // flake body: reads as white over photos, as a soft shape on white
  var EDGE = "160,184,208";  // flake edge: what makes a flake visible on a white page
  var CORE = "198,214,231";  // soft round flakes: one even tone, so they are dots, not rings, on white
  var TAU = Math.PI * 2;

  var canvas, ctx, W = 0, H = 0, dpr = 1;
  var sprites = null, flakes = [], full = 0;
  var raf = 0, wanted = false, last = 0, born = 0, resizeTimer = 0;
  var mq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function sprite(kind, px) {
    var s = Math.ceil(px * dpr), c = document.createElement("canvas");
    c.width = c.height = s;
    var g = c.getContext("2d");
    g.translate(s / 2, s / 2);
    g.scale(s / 2, s / 2); // draw in a -1..1 box
    if (kind === "dot") {
      var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      rg.addColorStop(0, "rgba(" + CORE + ",1)");
      rg.addColorStop(0.5, "rgba(" + CORE + ",.92)");
      rg.addColorStop(1, "rgba(" + EDGE + ",0)");
      g.fillStyle = rg;
      g.beginPath(); g.arc(0, 0, 1, 0, TAU); g.fill();
    } else if (kind === "crystal") {
      g.lineCap = "round";
      for (var pass = 0; pass < 2; pass++) {
        g.strokeStyle = pass ? "rgba(255,255,255,.96)" : "rgba(" + EDGE + ",.95)";
        g.lineWidth = pass ? 0.085 : 0.19;
        for (var i = 0; i < 6; i++) {
          g.save(); g.rotate(i * Math.PI / 3);
          g.beginPath();
          g.moveTo(0, 0); g.lineTo(0, -0.88);
          g.moveTo(0, -0.48); g.lineTo(0.23, -0.72);
          g.moveTo(0, -0.48); g.lineTo(-0.23, -0.72);
          g.stroke(); g.restore();
        }
      }
    } else { // paw print: one pad, four toes
      g.fillStyle = "rgba(" + FROST + ",.98)";
      g.strokeStyle = "rgba(" + EDGE + ",.95)";
      g.lineWidth = 0.075;
      var parts = [[0, 0.34, 0.5, 0.4, 0], [-0.6, -0.1, 0.19, 0.26, -0.5], [-0.23, -0.52, 0.2, 0.28, -0.15],
                   [0.23, -0.52, 0.2, 0.28, 0.15], [0.6, -0.1, 0.19, 0.26, 0.5]];
      for (var p = 0; p < parts.length; p++) {
        g.beginPath();
        g.ellipse(parts[p][0], parts[p][1], parts[p][2], parts[p][3], parts[p][4], 0, TAU);
        g.fill(); g.stroke();
      }
    }
    return c;
  }

  function measure() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = document.documentElement.clientWidth || window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    full = W < 600 ? 14 : W < 1100 ? 24 : 38;
    sprites = { dot: sprite("dot", 16), crystal: sprite("crystal", 29), paw: sprite("paw", 29) };
  }

  function place(f, first) {
    var roll = Math.random();
    f.kind = roll < 0.74 ? "dot" : roll < 0.92 ? "crystal" : "paw";
    var depth = Math.random(); // 0 far, 1 near: near flakes are bigger, faster, clearer
    f.size = f.kind === "dot" ? 6.6 + depth * 8.8 : 17.6 + depth * 11;
    f.vy = 20 + depth * 34 + rand(0, 8);
    f.alpha = f.kind === "dot" ? 0.55 + depth * 0.4 : 0.6 + depth * 0.35;
    f.sway = rand(6, 20);
    f.freq = rand(0.4, 1.1);
    f.phase = rand(0, TAU);
    f.spin = f.kind === "crystal" ? rand(-0.5, 0.5) : 0;
    f.rot = rand(0, TAU);
    f.x = rand(-10, W + 10);
    // first flurry drifts in from above over a few seconds instead of popping in mid-screen
    f.y = first ? rand(-H * 0.9, -12) : rand(-40, -12);
    return f;
  }

  function frame(t) {
    raf = window.requestAnimationFrame(frame);
    var dt = t - last;
    if (dt < 30) return; // about 30 frames a second is plenty for slow snow
    last = t;
    dt = Math.min(dt, 90) / 1000;
    var target = t - born > 14000 ? Math.ceil(full * 0.55) : full;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (var i = flakes.length - 1; i >= 0; i--) {
      var f = flakes[i];
      f.phase += f.freq * dt;
      f.y += f.vy * dt;
      f.x += Math.sin(f.phase) * f.sway * dt;
      if (f.y > H + 14) {
        if (flakes.length > target) { flakes.splice(i, 1); continue; }
        place(f, false);
      }
      ctx.globalAlpha = f.alpha;
      if (f.kind === "dot") {
        ctx.drawImage(sprites.dot, f.x - f.size / 2, f.y - f.size / 2, f.size, f.size);
      } else {
        var a = f.kind === "paw" ? Math.sin(f.phase) * 0.35 : (f.rot += f.spin * dt);
        var cos = Math.cos(a) * dpr, sin = Math.sin(a) * dpr;
        ctx.setTransform(cos, sin, -sin, cos, f.x * dpr, f.y * dpr);
        ctx.drawImage(sprites[f.kind], -f.size / 2, -f.size / 2, f.size, f.size);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }
    ctx.globalAlpha = 1;
  }

  function run() {
    if (raf || !wanted || document.hidden || (mq && mq.matches)) return;
    last = window.performance.now();
    raf = window.requestAnimationFrame(frame);
  }

  function halt() {
    if (raf) { window.cancelAnimationFrame(raf); raf = 0; }
  }

  function start() {
    if (mq && mq.matches) return;
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "ef-snow";
      canvas.setAttribute("aria-hidden", "true");
      ctx = canvas.getContext("2d");
      if (!ctx) { canvas = null; return; }
      document.body.appendChild(canvas);
      window.addEventListener("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(function () { if (wanted) measure(); }, 150);
      });
      document.addEventListener("visibilitychange", function () { if (document.hidden) halt(); else run(); });
      if (mq) {
        var onMotion = function () { if (mq.matches) stop(); };
        if (mq.addEventListener) mq.addEventListener("change", onMotion); else if (mq.addListener) mq.addListener(onMotion);
      }
    }
    wanted = true;
    canvas.style.display = "";
    measure();
    flakes = [];
    for (var i = 0; i < full; i++) flakes.push(place({}, true));
    born = window.performance.now();
    run();
  }

  function stop() {
    wanted = false;
    halt();
    flakes = [];
    if (canvas) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = "none"; }
  }

  window.efSnow = { start: start, stop: stop };
  start();
})();
