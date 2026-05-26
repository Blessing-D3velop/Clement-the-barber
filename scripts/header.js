const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menu');
const closeBtn = document.querySelector('.js-close-btn');

// Open menu
hamburger.addEventListener('click', () => {
  menu.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
});

// Close menu
function closeMenu() {
  menu.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeMenu);

// Close when clicking outside the menu
document.addEventListener('click', (e) => {
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) {
    closeMenu();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});