// Import the recipes.json file as a module (ensure your server supports module imports)
import recipesData from './recipes.json' assert { type: 'json' };

// Function to display recipes on the page
function displayRecipes(mealType = 'all') {
    const container = document.getElementById('recipes-container');
    if (!container) return; // Ensure the container exists before modifying

    container.innerHTML = ''; // Clear previous content

    Object.keys(recipesData).forEach(category => {
        if (mealType !== 'all' && category !== mealType) return; // Filter by meal type

        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;

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

// Function to populate the dropdown menu with recipes
function populateDropdown() {
    const dropdown = document.getElementById('recipe-dropdown');
    if (!dropdown) return; // Ensure dropdown exists before modifying

    dropdown.innerHTML = '<option value="all">All Recipes</option>';
    Object.keys(recipesData).forEach(mealType => {
        recipesData[mealType].forEach(recipe => {
            const option = document.createElement('option');
            option.value = recipe.name;
            option.textContent = recipe.name;
            dropdown.appendChild(option);
        });
    });

    dropdown.addEventListener('change', (event) => {
        filterRecipes(event.target.value);
    });
}

// Function to filter and display selected recipes from dropdown
function filterRecipes(selectedRecipe) {
    const container = document.getElementById('recipes-container');
    if (!container) return; // Ensure container exists before modifying

    container.innerHTML = '';

    if (selectedRecipe === 'all') {
        displayRecipes();
        return;
    }

    Object.keys(recipesData).forEach(mealType => {
        recipesData[mealType].forEach(recipe => {
            if (recipe.name === selectedRecipe) {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe-card');
                recipeDiv.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <p><strong>Ingredients:</strong></p>
                    <ul>${recipe.ingredients.map(ing => `<li>${ing.name}: ${ing.amount}</li>`).join('')}</ul>
                    <p><strong>Directions:</strong></p>
                    <ol>${recipe.directions.map(step => `<li>${step}</li>`).join('')}</ol>
                `;
                container.appendChild(recipeDiv);
            }
        });
    });

    applyFadeInEffect();
}

// Function to handle navbar dropdown clicks for meal type selection
function setupNavDropdown() {
    document.querySelectorAll('.dropdown-menu li a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = event.target.getAttribute('data-category');
            displayRecipes(selectedCategory);
        });
    });
}

// Function to add fade-in animation effect
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

// Initialize scripts when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(); // Show all recipes by default
    populateDropdown(); // Populate dropdown with recipe names
    setupNavDropdown(); // Handle navbar dropdown clicks
});
