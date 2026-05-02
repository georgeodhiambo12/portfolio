// Navigation Module
// Handles mobile menu toggle and smooth scrolling

class Navigation {
  constructor() {
    this.menuToggle = document.getElementById('menuToggle');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.navLinks = document.querySelectorAll('a[href^="#"]');
    
    this.init();
  }

  init() {
    // Toggle mobile menu
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
    }

    // Smooth scroll and close menu on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          this.closeMenu();
        }
      });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => this.updateActiveLink());

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.mobileMenu.classList.toggle('hidden');
    this.mobileMenu.classList.toggle('active');
  }

  closeMenu() {
    this.mobileMenu.classList.add('hidden');
    this.mobileMenu.classList.remove('active');
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('text-cyan-400');
        });

        // Add active class to current link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('text-cyan-400');
        }
      }
    });
  }
}

// Export or initialize
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
} else {
  window.Navigation = Navigation;
}