// Main Application Entry Point
// Initializes all modules and components

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized! 🚀');

  // Initialize Navigation
  const navigation = new Navigation();

  // Initialize Typewriter Animation
  const phrases = [
    "Full Stack Software Engineer",
    "Building Scalable Systems",
    "Creating Seamless Digital Experiences",
    "Cloud & DevOps Expert",
    "React & Laravel Developer",
    "Microservices Architect",
    "Real-Time Systems Builder",
    "API Integration Specialist"
  ];

  const typewriter = new Typewriter('typewriter', phrases, {
    typeSpeed: 100,      // Speed of typing (ms per character)
    deleteSpeed: 50,     // Speed of deleting (ms per character)
    pauseEnd: 2000,      // Pause at end of phrase (ms)
    pauseStart: 500      // Pause before starting new phrase (ms)
  });

  // Initialize Scroll Animations
  const scrollAnimations = new ScrollAnimations({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Add smooth scrolling behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Optional: Add analytics or other initialization code here
  // Example: initializeAnalytics();
  // Example: loadContactForm();

  console.log('All modules loaded successfully! ✨');
});

// Optional: Window load event for additional initialization
window.addEventListener('load', () => {
  // Add any code that should run after all resources are loaded
  console.log('All resources loaded! 🎉');
});

// Optional: Handle window resize events
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    console.log('Window resized');
    // Add any resize-specific logic here
  }, 250);
});

// Optional: Detect if user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  console.log('User prefers reduced motion - adjusting animations');
  // You could disable or reduce animations here
}