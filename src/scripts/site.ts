// Mobile menu and a discreet fade-in. Runs on every page, including after page transitions.

function init() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("hidden", !open);
    });
  }

  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((el) => io.observe(el));
}

document.addEventListener("astro:page-load", init);
