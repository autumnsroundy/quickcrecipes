// Function to determine the meal type based on the URL or dropdown selection
function getMealType() {
    const path = window.location.pathname;
    if (path.includes("breakfast")) return "breakfast";
    if (path.includes("lunch")) return "lunch";
    if (path.includes("dinner")) return "dinner";
    return "all"; // Default: Load everything if no specific page detected
}

// Fetch and load recipes from JSON
function loadRecipes() {
    fetch('/recipes.json')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load recipes.json");
            return response.json();
        })
        .then(recipesData => {
            populateMealTypeDropdown(recipesData); // Populate dropdown
            displayRecipes(recipesData, getMealType()); // Display based on page type
        })
        .catch(error => console.error("Error loading recipes:", error));
}

// Populate the meal type dropdown dynamically
function populateMealTypeDropdown(recipes) {
    const dropdown = document.getElementById("meal-type-dropdown");
    if (!dropdown) return;

    dropdown.innerHTML = `
        <option value="all">All Meals</option>
        ${Object.keys(recipes)
            .map(mealType => `<option value="${mealType}">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</option>`)
            .join('')}
    `;

    dropdown.addEventListener("change", () => {
        displayRecipes(recipes, dropdown.value);
    });
}

// Display recipes based on selected meal type
function displayRecipes(recipesData, mealType) {
    const container = document.getElementById("recipes-container");
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    Object.keys(recipesData).forEach(category => {
        if (mealType !== "all" && category !== mealType) return;

        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;

        recipesData[category].forEach(recipe => {
            const recipeDiv = createRecipeCard(recipe);
            section.appendChild(recipeDiv);
        });

        container.appendChild(section);
    });

    applyFadeInEffect();
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe-card");
    recipeDiv.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>${recipe.ingredients.map(ing => `<li>${ing.name}: ${ing.amount}</li>`).join('')}</ul>
        <p><strong>Directions:</strong></p>
        <ol>${recipe.directions.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
    return recipeDiv;
}

// Function to apply fade-in effect
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

// Initialize script when page loads
document.addEventListener('DOMContentLoaded', loadRecipes);
