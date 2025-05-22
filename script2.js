// Animação de fade nos conteúdos conforme o scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
});
