/**
 * O+E report lightbox — open evidence / shot images larger.
 * Triggers: [data-lightbox] buttons or links with data-src + data-caption
 */
(function () {
  "use strict";

  var triggers = Array.prototype.slice.call(
    document.querySelectorAll("[data-lightbox]")
  );
  if (!triggers.length) return;

  var root = document.createElement("div");
  root.className = "lightbox";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-hidden", "true");
  root.setAttribute("aria-label", "Image viewer");
  root.innerHTML =
    '<div class="lightbox__dialog">' +
    '<p class="lightbox__count" data-lb-count></p>' +
    '<button type="button" class="lightbox__close" data-lb-close aria-label="Close">&times;</button>' +
    '<button type="button" class="lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Previous">&#8249;</button>' +
    '<button type="button" class="lightbox__nav lightbox__nav--next" data-lb-next aria-label="Next">&#8250;</button>' +
    '<figure class="lightbox__figure">' +
    '<img class="lightbox__img" data-lb-img alt="" />' +
    '<figcaption class="lightbox__caption" data-lb-caption></figcaption>' +
    '<a class="lightbox__open" data-lb-open href="#" target="_blank" rel="noopener">Open full file</a>' +
    "</figure>" +
    "</div>";
  document.body.appendChild(root);

  var imgEl = root.querySelector("[data-lb-img]");
  var captionEl = root.querySelector("[data-lb-caption]");
  var countEl = root.querySelector("[data-lb-count]");
  var openEl = root.querySelector("[data-lb-open]");
  var closeBtn = root.querySelector("[data-lb-close]");
  var prevBtn = root.querySelector("[data-lb-prev]");
  var nextBtn = root.querySelector("[data-lb-next]");
  var index = 0;
  var lastFocus = null;

  function itemAt(i) {
    var el = triggers[i];
    return {
      src: el.getAttribute("data-src") || el.getAttribute("href") || "",
      caption: el.getAttribute("data-caption") || el.getAttribute("aria-label") || "",
      alt: el.getAttribute("data-alt") || el.getAttribute("data-caption") || "",
    };
  }

  function render() {
    var item = itemAt(index);
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    captionEl.textContent = item.caption;
    openEl.href = item.src;
    countEl.textContent = index + 1 + " / " + triggers.length;
    prevBtn.hidden = triggers.length < 2;
    nextBtn.hidden = triggers.length < 2;
  }

  function openAt(i) {
    index = (i + triggers.length) % triggers.length;
    lastFocus = document.activeElement;
    render();
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeBtn.focus();
  }

  function close() {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    imgEl.removeAttribute("src");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function next() {
    openAt(index + 1);
  }

  function prev() {
    openAt(index - 1);
  }

  triggers.forEach(function (el, i) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openAt(i);
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    prev();
  });
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    next();
  });

  root.addEventListener("click", function (e) {
    if (e.target === root) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!root.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
})();
