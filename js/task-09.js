const bodyColorEL = document.querySelector('.widget');
const textColorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const body = document.body;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColorEl.textContent = color;
};
buttonEl.addEventListener('click', randomColor);