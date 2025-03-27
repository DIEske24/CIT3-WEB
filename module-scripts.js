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

    // Animate headings
    const headings = document.querySelectorAll('h2');
    headings.forEach((heading, index) => {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        heading.style.animation = `fadeIn 0.6s ease-out ${0.2 + (index * 0.1)}s forwards`;
    });

    // Back link hover effect
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(-5px)';
        });
        backLink.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    }
});