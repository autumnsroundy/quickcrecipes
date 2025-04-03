document.addEventListener("DOMContentLoaded", () => {
  fetch('../recipes.json')  // ✅ Ensure correct path for JSON
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          console.log("Recipes loaded:", data);
          populateMealTypeDropdown(data);
          displayRecipes(data);
      })
      .catch(error => console.error("Error loading recipes:", error));
});

function populateMealTypeDropdown(recipes) {
  const dropdown = document.getElementById("meal-type-dropdown");
  dropdown.innerHTML = `
      <option value="all">All Meals</option>
      ${Object.keys(recipes)
          .map(mealType => `<option value="${mealType}">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</option>`)
          .join('')}
  `;

        // **NEW** Load saved selection
        const savedMealType = localStorage.getItem("selectedMealType") || "all";
        dropdown.value = savedMealType;

  dropdown.addEventListener("change", () => {
      filterRecipesByMealType(dropdown.value, recipes);
  });
}

function displayRecipes(recipes) {
  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  Object.keys(recipes).forEach(mealType => {
      const section = document.createElement("section");
      section.innerHTML = `<h2>${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h2>`;

      recipes[mealType].forEach(recipe => {
          const recipeDiv = createRecipeCard(recipe);
          section.appendChild(recipeDiv);
      });

      container.appendChild(section);
  });
}

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
