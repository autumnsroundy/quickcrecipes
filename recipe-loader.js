// Function to determine the meal type based on the HTML filename
function getMealType() {
    const path = window.location.pathname;
    if (path.includes("breakfast")) return "breakfast";
    if (path.includes("lunch")) return "lunch";
    if (path.includes("dinner")) return "dinner";
    return "all"; // Default: Load everything if no specific page detected
}

// Function to load and display recipes dynamically
function loadRecipes() {
    const mealType = getMealType(); // Get the meal type based on the filename

    fetch('/recipes.json')  // Ensure the correct path
        .then(response => {
            if (!response.ok) throw new Error("Failed to load recipes.json");
            return response.json();
        })
        .then(recipesData => {
            displayRecipes(recipesData, mealType);
        })
        .catch(error => console.error("Error loading recipes:", error));
}

// Function to display recipes
function displayRecipes(recipesData, mealType) {
    const container = document.getElementById('recipes-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    Object.keys(recipesData).forEach(category => {
        if (mealType !== "all" && category !== mealType) return;

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

// Function to apply a fade-in effect when recipes load
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

// Initialize the script when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadRecipes);


// **NEW** Function to determine the meal type based on the stored selection or URL
function getMealType() {
    const savedMealType = localStorage.getItem("selectedMealType");
    if (savedMealType) return savedMealType;

    const path = window.location.pathname;
    if (path.includes("breakfast")) return "breakfast";
    if (path.includes("lunch")) return "lunch";
    if (path.includes("dinner")) return "dinner";
    
    return "all"; // Default: Load everything if no specific page detected
}

// Save meal type selection
function saveMealType(mealType) {
    localStorage.setItem("selectedMealType", mealType);
}

// Update dropdown event listener (if applicable)
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("meal-type-dropdown");
    if (dropdown) {
        dropdown.value = getMealType(); // Set saved value
        dropdown.addEventListener("change", () => {
            saveMealType(dropdown.value);
            location.reload(); // Reload to apply selection
        });
    }
    
    loadRecipes(); // Load recipes based on selected meal type
});