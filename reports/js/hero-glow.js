/**
 * Subtle blue/mint glow drift — synced on hero + August Report pill.
 * Responds to pointer hover and scroll through the banner.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var hero = document.querySelector(".hero");
  if (!hero) return;

  var targetX = 0;
  var targetY = 0;
  var curX = 0;
  var curY = 0;
  var scrollAmt = 0;
  var hovering = false;
  var raf = 0;

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function onPointerMove(e) {
    var r = hero.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return;
    hovering = true;
    targetX = clamp((e.clientX - r.left) / r.width, 0, 1) * 2 - 1;
    targetY = clamp((e.clientY - r.top) / r.height, 0, 1) * 2 - 1;
  }

  function onPointerLeave() {
    hovering = false;
    targetX = 0;
    targetY = 0;
  }

  function onScroll() {
    var r = hero.getBoundingClientRect();
    var h = r.height || 1;
    // -1 when mostly above, 0 centered in view, 1 when scrolled past
    scrollAmt = clamp(-r.top / h, -1, 1.25);
  }

  function apply(sx, sy, sx2, sy2) {
    hero.style.setProperty("--glow-x", sx.toFixed(2) + "px");
    hero.style.setProperty("--glow-y", sy.toFixed(2) + "px");
    hero.style.setProperty("--glow-x2", sx2.toFixed(2) + "px");
    hero.style.setProperty("--glow-y2", sy2.toFixed(2) + "px");
  }

  function tick() {
    var ease = hovering ? 0.08 : 0.045;
    curX += (targetX - curX) * ease;
    curY += (targetY - curY) * ease;

    var sx = curX * 28 + scrollAmt * 22;
    var sy = curY * 20 + scrollAmt * 36;
    var sx2 = -curX * 20 - scrollAmt * 14;
    var sy2 = -curY * 16 - scrollAmt * 26;

    apply(sx, sy, sx2, sy2);
    raf = requestAnimationFrame(tick);
  }

  hero.addEventListener("pointermove", onPointerMove, { passive: true });
  hero.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  onScroll();
  raf = requestAnimationFrame(tick);

  window.addEventListener(
    "pagehide",
    function () {
      cancelAnimationFrame(raf);
    },
    { once: true }
  );
})();
