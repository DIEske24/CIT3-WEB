document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => {
        const randomX = Math.random() * 80 + 10;
        const randomY = Math.random() * 80 + 10;
        const randomDuration = Math.random() * 20 + 10;
        const randomDelay = Math.random() * 5;
        
        el.style.left = `${randomX}%`;
        el.style.top = `${randomY}%`;
        el.style.animationDuration = `${randomDuration}s`;
        el.style.animationDelay = `${randomDelay}s`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});