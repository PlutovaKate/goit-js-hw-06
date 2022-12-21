const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredient = ingredients.map((element) => {
  const liItem = document.createElement("li");
  liItem.textContent = element;
  liItem.classList.add("item");

  return liItem;
});

const ulElement = document.querySelector('ul');
ulElement.append(...ingredient);

