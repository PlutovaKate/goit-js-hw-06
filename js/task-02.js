const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.getElementById("ingredients")

ingredients.forEach ((ingredient) => {
  const liElements = document.createElement('li');
  liElements.textContent = ingredient;
  liElements.classList.add('item');
  
  ulElements.append(liElements);
});
