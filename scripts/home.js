// hero-home.js

const bookBtn = document.querySelector(".hero-btn-primary");
const viewBtn = document.querySelector(".hero-btn-ghost");

// Scroll helper
function scrollToSection(selector) {
  const section = document.querySelector(selector);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Book button → booking section
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    scrollToSection(".booking-section"); // change to .contact-section if needed
  });
}

// View hairstyles → services section
if (viewBtn) {
  viewBtn.addEventListener("click", () => {
    scrollToSection(".services-section");
  });
}