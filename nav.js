/**
 * Navigation behavior
 * - Hide on scroll down, show on scroll up
 * - Mobile menu toggle
 * - Active section highlight
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  let lastScrollY = 0;
  let ticking = false;

  // ── Scroll hide/show ───────────────────
  function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });

  // ── Mobile menu ────────────────────────
  menuBtn.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    menuBtn.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ── Active section tracking ────────────
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = '';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateActiveLink);
  });
})();