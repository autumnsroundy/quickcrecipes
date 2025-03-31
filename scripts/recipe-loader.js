export async function fetchRecipes() {
    try {
        console.log("Fetching recipes...");
        const response = await fetch("recipes.json"); 
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return null;
    }
}

export async function displayRecipes(mealType = 'all') {
    const container = document.getElementById('recipes-container');
    if (!container) return;

    container.innerHTML = '<p>Loading recipes...</p>'; 

    const recipesData = await fetchRecipes();
    if (!recipesData) {
        container.innerHTML = "<p>Unable to load recipes. Please try again later.</p>";
        return;
    }

    container.innerHTML = ''; 

    Object.entries(recipesData).forEach(([category, recipes]) => {
        if (mealType !== 'all' && category !== mealType) return;

        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;

        recipes.forEach(({ name, ingredients, directions }) => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-card', 'fade-in-element');
            recipeDiv.innerHTML = `
                <h3>${name}</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>${ingredients.map(({ amount, name }) => `<li>${amount} ${name}</li>`).join('')}</ul>
                <p><strong>Directions:</strong></p>
                <ol>${directions.map(step => `<li>${step}</li>`).join('')}</ol>
            `;
            section.appendChild(recipeDiv);
        });

        container.appendChild(section);
    });

    applyFadeInEffect();
}

function applyFadeInEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fade-in-element').forEach(card => observer.observe(card));
}