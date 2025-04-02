document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js Loaded');

    highlightActivePage();
    enableSmoothScroll();
    applyFadeInEffect(); // Now applies to all pages
});

// Highlight the active navigation link
function highlightActivePage() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Enable smooth scrolling for navigation links
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to add fade-in animation effect (Moved from recipes.js)
function applyFadeInEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.recipe-card, .fade-in-element').forEach(card => observer.observe(card));
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js Loaded');

    waitForNavToLoad();
    enableSmoothScroll();
    applyFadeInEffect(); // Now applies to all pages
});

// Function to wait for navigation to be fully loaded before highlighting active page
function waitForNavToLoad(attempts = 10) {
    const navLinks = document.querySelectorAll('nav ul li a');

    if (navLinks.length > 0) {
        highlightActivePage(); // Run once navigation is available
    } else if (attempts > 0) {
        console.warn('Navigation not loaded yet. Retrying...');
        setTimeout(() => waitForNavToLoad(attempts - 1), 100);
    } else {
        console.error('Failed to load navigation.');
    }
}

// Highlight the active navigation link
function highlightActivePage() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    console.log('Active page highlighted:', currentPage);
}

// Enable smooth scrolling for navigation links
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('Smooth scrolling enabled.');
}

// Function to add fade-in animation effect (Moved from recipes.js)
function applyFadeInEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.recipe-card, .fade-in-element');
    
    if (elements.length > 0) {
        elements.forEach(card => observer.observe(card));
        console.log('Fade-in effect applied.');
    } else {
        console.warn('No fade-in elements found.');
    }
}
