/* =========================================================
   GLISS — vanilla JS
   Only handles: mobile menu toggle. No frameworks, no
   unnecessary code.
   ========================================================= */

(function mobileMenu() {
  var hamburger = document.getElementById("hamburger");
  var menu = document.getElementById("mobile-menu");
  if (!hamburger || !menu) return;

  var open = false;

  function setOpen(next) {
    open = next;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.classList.toggle("is-active", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  hamburger.addEventListener("click", function () {
    setOpen(!open);
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && open) setOpen(false);
  });
})();
