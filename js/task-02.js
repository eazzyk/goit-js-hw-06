const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ul = document.querySelector('#ingredients');

const ListItem = ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
};

const ingredientListItems = ingredients.map(ListItem);
ul.append(...ingredientListItems);
