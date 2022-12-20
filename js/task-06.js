const inputEl = document.querySelector("#validation-input");
const BlurHandle = (event) => {
  event.target.classList = "";
  if (
    Number(event.target.value.length) === Number(event.target.dataset.length)
  ) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
};
inputEl.addEventListener("blur", BlurHandle);
