// Simple JavaScript for enhanced interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple animation for hero section
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '0';
        heroContent.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 200);
    }, 300);
    
});
// <script>
  function scrollGallery(direction) {
    const panel = document.getElementById('photoPanel');
    const scrollAmount = 300; // píxeles por clic
    panel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
//</script>
<script>
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () = {
    navLinks.classList.toggle('active')
  });
</script>
