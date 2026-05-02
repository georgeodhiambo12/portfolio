// Scroll Animations Module
// Handles fade-in animations when elements enter viewport

class ScrollAnimations {
  constructor(options = {}) {
    this.threshold = options.threshold || 0.1;
    this.rootMargin = options.rootMargin || '0px 0px -100px 0px';
    this.animationClass = options.animationClass || 'animate-fade-in-up';
    
    this.init();
  }

  init() {
    // Create intersection observer
    const observerOptions = {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    };

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      observerOptions
    );

    // Observe all animatable elements
    this.observeElements();
  }

  observeElements() {
    // Select elements to animate
    const selectors = [
      '.project-card',
      '.experience-card',
      '.stat-card',
      '.skill-item'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => this.observer.observe(el));
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters viewport
        entry.target.classList.add(this.animationClass);
        
        // Optional: Stop observing after animation (one-time animation)
        // this.observer.unobserve(entry.target);
      }
    });
  }

  // Method to add new elements to observer
  observe(element) {
    this.observer.observe(element);
  }

  // Method to remove element from observer
  unobserve(element) {
    this.observer.unobserve(element);
  }

  // Cleanup method
  destroy() {
    this.observer.disconnect();
  }
}

// Export or initialize
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollAnimations;
} else {
  window.ScrollAnimations = ScrollAnimations;
}