document.addEventListener('DOMContentLoaded', function() {
    // Quiz card hover effects
    const quizCards = document.querySelectorAll('.quiz-card');
    
    quizCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});