document.addEventListener("DOMContentLoaded", function() {
    const eventCards = document.querySelectorAll('.ravenclaw-event-card, .gryffindor-event-card, .hufflepuff-event-card, .slytherin-event-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    eventCards.forEach(card => {
        observer.observe(card);
    });
});