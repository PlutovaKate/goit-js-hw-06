const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const handleClick = (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = event.currentTarget.value;
};
input.addEventListener("input", handleClick);
