async function fetchRecipes() {
    try {
        const response = await fetch("data/recipes.json"); // Adjust the path if needed
        if (!response.ok) throw new Error("Failed to load recipes.");
        return await response.json();
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return null;
    }
}

async function displayRecipes(mealType = 'all') {
    const container = document.getElementById('recipes-container');
    if (!container) return; // Ensure the container exists before modifying

    container.innerHTML = ''; // Clear previous content

    const recipesData = await fetchRecipes();
    if (!recipesData) {
        container.innerHTML = "<p>Unable to load recipes. Please try again later.</p>";
        return;
    }

    Object.keys(recipesData).forEach(category => {
        if (mealType !== 'all' && category !== mealType) return; // Filter by selected meal type

        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;

        recipesData[category].forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-card');
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>${recipe.ingredients.map(ing => `<li>${ing.amount} ${ing.name}</li>`).join('')}</ul>
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
    const mealType = document.body.getAttribute("data-meal-type"); // Set in HTML (e.g., breakfast.html -> <body data-meal-type="breakfast">)
    displayRecipes(mealType || 'all');
});
