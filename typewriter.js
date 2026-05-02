// Typewriter Animation Module
// Creates typing and deleting effect for dynamic text

class Typewriter {
  constructor(elementId, phrases, options = {}) {
    this.element = document.getElementById(elementId);
    this.phrases = phrases;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    
    // Configurable speeds
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseEnd = options.pauseEnd || 2000;
    this.pauseStart = options.pauseStart || 500;
    
    this.init();
  }

  init() {
    if (!this.element) {
      console.error('Typewriter element not found');
      return;
    }

    // Start animation after a short delay
    setTimeout(() => this.type(), 1000);
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];
    let speed = this.typeSpeed;

    if (this.isDeleting) {
      // Deleting characters
      this.element.textContent = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
      speed = this.deleteSpeed;
    } else {
      // Typing characters
      this.element.textContent = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
      speed = this.typeSpeed;
    }

    // Check if phrase is complete
    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      // Pause at end of phrase
      speed = this.pauseEnd;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Move to next phrase
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      speed = this.pauseStart;
    }

    // Continue animation
    setTimeout(() => this.type(), speed);
  }
}

// Export or initialize
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Typewriter;
} else {
  window.Typewriter = Typewriter;
}