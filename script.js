const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const cursorGlow = document.querySelector('.cursor-glow');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.innerHTML = isOpen ? 'Close <span>×</span>' : 'Menu <span>+</span>';
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = 'Menu <span>+</span>';
  });
});

document.addEventListener('pointermove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const contactSection = document.querySelector('.contact-section');
const emailLink = document.querySelector('.email-link');

emailLink.addEventListener('pointerenter', () => contactSection.classList.add('contact-hover'));
emailLink.addEventListener('pointerleave', () => contactSection.classList.remove('contact-hover'));
