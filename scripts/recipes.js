// Import the recipes.json file as a module (ensure your server supports module imports)
import recipesData from './recipes.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
    console.log('Recipes loaded:', recipesData);
    displayRecipes(recipesData);
    populateDropdown(recipesData);
});

// Function to display recipes
function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';
    Object.keys(recipes).forEach(mealType => {
        const section = document.createElement('section');
        section.innerHTML = `<h2>${mealType}</h2>`;
        recipes[mealType].forEach(recipe => {
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

    // Move fade-in effect to app.js (global behavior)
    applyFadeInEffect();
}

// Function to populate the dropdown menu
function populateDropdown(recipes) {
    const dropdown = document.getElementById('recipe-dropdown');
    dropdown.innerHTML = '<option value="all">All Recipes</option>';
    Object.keys(recipes).forEach(mealType => {
        recipes[mealType].forEach(recipe => {
            const option = document.createElement('option');
            option.value = recipe.name;
            option.textContent = recipe.name;
            dropdown.appendChild(option);
        });
    });

    dropdown.addEventListener('change', (event) => {
        filterRecipes(event.target.value, recipes);
    });
}

// Function to filter recipes
function filterRecipes(selectedRecipe, recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';

    if (selectedRecipe === 'all') {
        displayRecipes(recipes);
        return;
    }

    Object.keys(recipes).forEach(mealType => {
        recipes[mealType].forEach(recipe => {
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

    // Apply fade-in effect (moved to app.js)
    applyFadeInEffect();
}
