// app.js
// Handles navigation highlighting, smooth scrolling, and fade-in effects
document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js Loaded');
    waitForNavToLoad();
    enableSmoothScroll();
    applyFadeInEffect();
});

function waitForNavToLoad(attempts = 10) {
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0) {
        highlightActivePage();
    } else if (attempts > 0) {
        setTimeout(() => waitForNavToLoad(attempts - 1), 100);
    } else {
        console.error('Navigation failed to load.');
    }
}

function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
}

function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(this.getAttribute('href').substring(1))?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

function applyFadeInEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('fade-in'));
    }, { threshold: 0.5 });

    document.querySelectorAll('.recipe-card, .fade-in-element').forEach(el => observer.observe(el));
}