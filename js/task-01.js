"user strict";

const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, itemEl.length);

const itemElArray = [...itemEl]
  .map(
    (item) => `Category: ${item.children[0].textContent}
        Elements:${item.children[1].children.length}`
  )
  .join("\n");

console.log(itemElArray);
