/**
 * Scroll-triggered reveal animations
 * Uses IntersectionObserver for performance
 */

(function () {
  'use strict';

  const revealElements = document.querySelectorAll('[data-reveal]');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach(function (el, index) {
    // Stagger delay based on position
    el.style.transitionDelay = (index % 3) * 100 + 'ms';
    observer.observe(el);
  });
})();