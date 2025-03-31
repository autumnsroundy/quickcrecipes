import { displayRecipes } from './recipe-loader.js';
import { loadNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js Loaded');

    loadNav();

    const mealType = document.body.getAttribute("data-meal-type");
    displayRecipes(mealType || 'all');

    enableSmoothScroll();
});

function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));

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