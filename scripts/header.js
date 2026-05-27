const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menu');
const closeBtn = document.querySelector('.js-close-btn');

const navLinks = [
  { selector: ".js-home", target: ".hero-home" },
  { selector: ".js-about", target: ".about-section" },
  { selector: ".js-services", target: ".services-section" },
  { selector: ".js-gallery", target: ".gallery-section" },
  { selector: ".js-contact", target: ".booking-section" }
];


hamburger.addEventListener('click', () => {
  menu.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
});


function closeMenu() {
  menu.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeMenu);


document.addEventListener('click', (e) => {
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) {
    closeMenu();
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

function scrollToSection(targetSelector) {
  const section = document.querySelector(targetSelector);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


navLinks.forEach(link => {
  const elements = document.querySelectorAll(link.selector);

  elements.forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      scrollToSection(link.target);


      const mobileMenu = document.querySelector(".js-menu");
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  });
});