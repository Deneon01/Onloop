const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

const closeMobileMenu = () => {
  if (!siteHeader || !menuToggle) return;
  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
};

const openMobileMenu = () => {
  if (!siteHeader || !menuToggle) return;
  siteHeader.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
};

if (siteHeader && menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    if (siteHeader.classList.contains("menu-open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.classList.contains("menu-open")) return;
    if (siteHeader.contains(event.target)) return;
    closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}
