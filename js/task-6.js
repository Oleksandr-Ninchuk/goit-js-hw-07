const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
