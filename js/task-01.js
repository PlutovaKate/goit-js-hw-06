"use strict";

const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

for (let index = 0; index < itemsEl.length; index++) {
  const categoryEl = itemsEl[index].firstElementChild.innerText;
  const liElement = itemsEl[index].children[1].children.length;

  console.log(`Category: ${categoryEl}`);
  console.log(`Elements: ${liElement}`);
}

// 2-ий варіант

// const itemsEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${itemsEl.length}`);

// const itemsElArray = [...itemsEl]
//   .map(
//     (item) => `Category: ${item.children[0].textContent}
// Elements: ${item.children[1].children.length}`
//   )
//   .join("\n");

// console.log(itemsElArray);

