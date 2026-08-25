/**
 * Scroll reveal — content flows in as sections enter the viewport.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var SELECTOR = [
    ".report-section .section-header",
    ".report-section .scope-heading",
    ".report-section .prose",
    ".report-section .prose-tight",
    ".report-section .stat-row",
    ".report-section .two-col",
    ".report-section .split-3",
    ".report-section .scope-cols",
    ".report-section .oe-table",
    ".report-section .checklist",
    ".report-section .check-list",
    ".report-section .month-compare",
    ".report-section .wilson-review",
    ".report-section .shot--zoom",
    ".report-section .evidence-grid",
    ".report-section .subhead",
    ".report-section .meta",
    ".band .lede",
  ].join(",");

  var nodes = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
  if (!nodes.length) return;

  var byParent = new Map();
  nodes.forEach(function (el) {
    var parent = el.parentElement;
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push(el);
  });

  byParent.forEach(function (kids) {
    kids.forEach(function (el, i) {
      el.classList.add("reveal");
      if (el.classList.contains("lede") || el.classList.contains("section-header")) {
        el.classList.add("reveal--fade");
      }
      el.style.setProperty("--reveal-i", String(Math.min(i, 8)));
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  nodes.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      requestAnimationFrame(function () {
        el.classList.add("is-in");
      });
    } else {
      observer.observe(el);
    }
  });
})();
