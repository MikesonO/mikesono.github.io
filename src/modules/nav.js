// nav.js — Hamburger menu toggle

function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!hamburger || !navList) return;

  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('hamburger--open');
    navList.classList.toggle('nav__list--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('hamburger--open');
    navList.classList.remove('nav__list--open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navList.classList.contains('nav__list--open') &&
        !hamburger.contains(e.target) &&
        !navList.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header')?.offsetHeight ?? 75;

    window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - (window.innerHeight / 2);
        if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
        }
    });
    }, { passive: true });
}

// Scroll indicator
const scrollIndicator = document.querySelector('.hero__scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
}

initNav();

export { initNav };