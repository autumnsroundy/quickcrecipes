// This file dynamically loads and displays recipes from the JSON file, 
// adds a dropdown for filtering, and applies a simple animation effect.

fetch('recipes.json')  // fetches JSON file
  .then(response => response.json())  //parse file into JS object
  .then(data => {
    console.log('Recipes loaded:', data);
    displayRecipes(data); //calls displayRecipes() to render recipes and 
    populateDropdown(data); // fill dropdown menu
  })
  .catch(error => console.error('Error loading recipes:', error));

// essentially this function clears any previous content on page, iterates over
// meal types (breakfast, lunch, dinner) and creates recipe card and inserts them into the page by dynamically
// creating HTML elements based on JSON file
function displayRecipes(recipes) {
  const container = document.getElementById('recipes-container');
  container.innerHTML = '';
  Object.keys(recipes).forEach(mealType => { //gets an array of the meal type keys and iterates over each meal type
    const section = document.createElement('section');
    section.innerHTML = `<h2>${mealType}</h2>`;
    recipes[mealType].forEach(recipe => {
      const recipeDiv = document.createElement('div'); // new <div> element is created to hold recipe details
      recipeDiv.classList.add('recipe-card'); // adds CSS class (recipe-card) that can be styled with CSS
      // recipe name displayed in HTML H3 heading - additional bold and map features 
      recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>${recipe.ingredients.map(ing => `<li>${ing.name}: ${ing.amount}</li>`).join('')}</ul>
        <p><strong>Directions:</strong></p>
        <ol>${recipe.directions.map(step => `<li>${step}</li>`).join('')}</ol>
      `;
      section.appendChild(recipeDiv); // appending recipe card to the meal selection
    });
    container.appendChild(section); // once all recipes for meal type are added, the entire section is placed inside #recipes-container
  });
}

//Dropdown menu : adds an 'All Recipes' option, loops through al the recipes and adds them
// as dropdown options, attaches an event listener to detect ropdown selection changes
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

// filters the recipes based on selection : clear the displayed recipes, reloads 'All Recipes'
//  if it is selected, and will filter/display only the selected recipe. 
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
}

// Adding a simple animation (Fade-In effect)
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => { //uses IntersectionObserver to detect when a 
    //recipe card enters the viewport
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); //adds CSS class .fade-in to apply a smooth appearence effect
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.recipe-card').forEach(card => {
    observer.observe(card);
  });
});
