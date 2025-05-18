export const initAnimations = () => {
  // Function to check if an element is in view
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
  };

  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation, { passive: true });
  
  // Initial check for elements in viewport
  setTimeout(handleScrollAnimation, 100);
};