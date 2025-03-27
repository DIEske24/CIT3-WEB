document.addEventListener('DOMContentLoaded', function() {
    // Module card hover effects
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Set animation delays
    const cards = document.querySelectorAll('.module-card');
    cards.forEach((card, index) => {
        const delay = (index + 1) * 0.1;
        card.style.animationDelay = `${delay}s`;
    });
});