const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const amount = document.querySelector("input");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(value) {
  let size = 30;
  for (let i = 1; i <= value; i += 1) {
    boxes.insertAdjacentHTML(
      "afterbegin",
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    );
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => createBoxes(amount.value));

destroyButton.addEventListener("click", () => destroyBoxes());
