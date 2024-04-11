document.addEventListener('DOMContentLoaded', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const recipesContainer = document.getElementById('recipesContainer');
      data.meals.forEach(recipe => {
        const recipeElement = createRecipeElement(recipe);
        recipesContainer.appendChild(recipeElement);
      });
    })
    .catch(error => console.error('Error fetching recipes:', error));
});

function createRecipeElement(recipe) {
  const div = document.createElement('div');
  div.classList.add('recipe');

  const img = document.createElement('img');
  img.src = recipe.strMealThumb;
  img.alt = recipe.strMeal;
  div.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = recipe.strMeal;
  div.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = recipe.strInstructions;
  div.appendChild(p);

  return div;
}
