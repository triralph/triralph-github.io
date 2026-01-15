// Neo-Brutalist Dark Mode JavaScript
// Minimal interactions for enhanced UX

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
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

  // Add cursor trail effect (optional)
  const createCursorTrail = () => {
    let lastX = 0;
    let lastY = 0;
    
    document.addEventListener('mousemove', (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 50) {
        lastX = e.clientX;
        lastY = e.clientY;
      }
    });
  };

  // Initialize
  createCursorTrail();
});
