// Import the recipes.json file as a module
import recipesData from './recipes.json' assert { type: 'json' };

// Function to display breakfast recipes
function displayRecipes(mealType = 'all') {
    const container = document.getElementById('recipes-container');
    if (!container) return; // Ensure the container exists before modifying

    container.innerHTML = ''; // Clear previous content

    // Iterate through the meal categories (e.g., 'breakfast', 'lunch', etc.)
    Object.keys(recipesData).forEach(category => {
        if (mealType !== 'all' && category !== mealType) return; // Filter by selected meal type

        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;

        // Display each recipe in the selected category
        recipesData[category].forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-card');
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>${recipe.ingredients.map(ing => `<li>${ing.name}: ${ing.amount}</li>`).join('')}</ul>
                <p><strong>Directions:</strong></p>
                <ol>${recipe.directions.map(step => `<li>${step}</li>`).join('')}</ol>
            `;
            section.appendChild(recipeDiv);
        });

        container.appendChild(section);
    });

    applyFadeInEffect();
}

// Function to handle fade-in animation effect
function applyFadeInEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.recipe-card').forEach(card => observer.observe(card));
}

// Initialize the recipes when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('breakfast'); // Show only breakfast recipes for this page
});
