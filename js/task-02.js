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

const ulElement = document.querySelector("ul");
ulElement.append(...ingredient);

//2-ий варіант


// const listEl = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.innerText = ingredient;
//   itemEl.classList.add("item");
//   listEl.append(itemEl);
// });


