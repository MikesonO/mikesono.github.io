import Typed from 'typed.js';

function initTyped() {
  const el = document.querySelector('.typed-text');
  if (!el) return;

  new Typed(el, {
    strings: [
      'I BUILD FAST & RESPONSIVE UIs',
      'I IMPLEMENT TRACKING & ANALYTICS',
      'I INTEGRATE APIs & BACKEND SERVICES',
      'I TURN IDEAS INTO WEB EXPERIENCES',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
  });
}

initTyped();

export { initTyped };