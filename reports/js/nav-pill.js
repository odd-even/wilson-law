/**
 * Sliding nav pill + scroll progress bar under the sticky nav.
 */
(function () {
  "use strict";

  var linksRoot = document.getElementById("report-nav-links");
  var pill = document.getElementById("report-nav-pill");
  var progressBar = document.getElementById("report-nav-progress");
  if (!linksRoot || !pill) return;

  var links = Array.prototype.slice.call(linksRoot.querySelectorAll("a[data-nav]"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-nav-group]"));
  if (!links.length || !sections.length) return;

  var linkByNav = {};
  links.forEach(function (a) {
    linkByNav[a.getAttribute("data-nav")] = a;
  });

  var current = null;
  var moving = false;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function movePill(link, animate) {
    if (!link) return;
    var rootBox = linksRoot.getBoundingClientRect();
    var box = link.getBoundingClientRect();
    var x = box.left - rootBox.left + linksRoot.scrollLeft;
    var w = box.width;

    if (!animate) {
      pill.style.transition = "none";
    } else {
      pill.style.transition = "";
    }

    pill.style.width = w + "px";
    pill.style.transform = "translateX(" + x + "px)";
    pill.classList.add("is-ready");

    if (!animate) {
      void pill.offsetWidth;
      pill.style.transition = "";
    }
  }

  function setActive(nav) {
    if (!nav || !linkByNav[nav] || nav === current) return;
    current = nav;
    links.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === nav);
    });
    movePill(linkByNav[nav], true);

    var active = linkByNav[nav];
    if (active && linksRoot.scrollWidth > linksRoot.clientWidth) {
      var left = active.offsetLeft - 24;
      linksRoot.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }

  function syncFromScroll() {
    if (moving) return;
    var marker = window.innerHeight * 0.28;
    var best = null;
    var bestDist = Infinity;

    sections.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      if (rect.bottom < 80 || rect.top > window.innerHeight) return;
      var dist = Math.abs(rect.top - marker);
      if (rect.top <= marker && rect.bottom > marker) dist = 0;
      if (dist < bestDist) {
        bestDist = dist;
        best = sec.getAttribute("data-nav-group");
      }
    });

    if (best) setActive(best);
  }

  function updateProgress() {
    if (!progressBar) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    progressBar.style.transform = "scaleX(" + p + ")";
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      syncFromScroll();
      updateProgress();
    });
  }

  links.forEach(function (a) {
    a.addEventListener("click", function () {
      var nav = a.getAttribute("data-nav");
      moving = true;
      setActive(nav);
      window.setTimeout(function () {
        moving = false;
        syncFromScroll();
        updateProgress();
      }, 700);
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    if (current && linkByNav[current]) movePill(linkByNav[current], false);
    updateProgress();
  });

  if (reduced && progressBar) {
    progressBar.style.transform = "scaleX(1)";
  } else {
    updateProgress();
  }

  setActive(links[0].getAttribute("data-nav"));
  movePill(links[0], false);
  syncFromScroll();
})();
