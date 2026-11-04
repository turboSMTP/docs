// Almond-style Previous / Next cards for maple, with each target page's full title.
// Depends on Mintlify's #pagination markup: check it after a Mintlify update.
(function () {
  var titles = new Map();

  function fetchTitle(href) {
    if (!titles.has(href)) {
      titles.set(
        href,
        fetch(href, { credentials: "same-origin" })
          .then(function (res) { return res.ok ? res.text() : ""; })
          .then(function (html) {
            var doc = new DOMParser().parseFromString(html, "text/html");
            var h1 = doc.getElementById("page-title");
            return h1 ? h1.textContent.trim() : "";
          })
          .catch(function () { return ""; })
      );
    }
    return titles.get(href);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function card(direction, source, fallbackTitle) {
    var href = source.getAttribute("href");
    var link = el("a", "ts-pagination__card ts-pagination__card--" + direction);
    link.href = href;
    link.rel = direction;

    var title = el("span", "ts-pagination__title", fallbackTitle);
    var label = el("span", "ts-pagination__label");
    var arrow = source.querySelector("svg");
    if (arrow) label.appendChild(arrow.cloneNode(true));
    label.appendChild(el("span", "", direction === "prev" ? "Previous" : "Next"));

    link.append(title, label);

    fetchTitle(href).then(function (full) {
      if (full) {
        title.textContent = full;
        link.title = full;
      }
    });

    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      if (window.mintlify && typeof window.mintlify.navigate === "function") {
        window.mintlify.navigate(href);
      } else {
        source.click();
      }
    });

    return link;
  }

  function render() {
    var original = document.getElementById("pagination");
    var existing = document.querySelector(".ts-pagination");
    if (!original) {
      if (existing) existing.remove();
      return;
    }

    var prev = original.querySelector('a[rel="prev"]');
    var next = original.querySelector('a[rel="next"]');
    var key = (prev ? prev.getAttribute("href") : "") + "|" + (next ? next.getAttribute("href") : "");
    if (existing && existing.dataset.key === key && existing.previousElementSibling === original) return;
    if (existing) existing.remove();
    if (!prev && !next) return;

    var nav = el("nav", "ts-pagination");
    nav.setAttribute("aria-label", "Pagination");
    nav.dataset.key = key;

    if (prev) {
      nav.appendChild(card("prev", prev, (prev.getAttribute("aria-label") || "").replace(/^Previous:\s*/, "")));
    }
    if (next) {
      var nextTitle = next.querySelector('[data-component-part="pagination-title"]');
      nav.appendChild(card("next", next, nextTitle ? nextTitle.textContent : ""));
    }

    original.insertAdjacentElement("afterend", nav);
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      render();
    });
  }

  schedule();
  window.addEventListener("mintlify:navigate", schedule);
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
})();
