const rangeInput = document.querySelector("#myRange");
const sliderValue = document.querySelector("span");
const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
let initialGrid = 50;
let cells = 0;

function startingGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
  cells = document.querySelectorAll(".cell");
  colorGrid();
}

function createGrid() {
  rangeInput.oninput = () => {
    deleteGrid(container);
    let rangeValue = rangeInput.value;
    sliderValue.textContent = rangeValue;
    for (let i = 0; i < rangeValue; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
      for (let j = 0; j < rangeValue; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
      }
    }
    cells = document.querySelectorAll(".cell");
    let color = document.querySelector(".colorPicker");
    color.addEventListener("input", colorGrid());
  };
}

function deleteGrid(container) {
  while (container.firstChild != null) {
    container.removeChild(container.firstChild);
  }
}

function colorGrid() {
  let color = document.querySelector(".colorPicker");
  console.log(color.value);
  for (let i = 0; i < rangeInput.value * rangeInput.value; i++) {
    cells[i].addEventListener("mouseover", function () {
      cells[i].style.backgroundColor = color.value;
    });
  }
}

clearButton.addEventListener("click", () => {
  console.log("clicked");
  let bgColor = "rgb(58, 124, 165)";
  for (let i = 0; i < rangeInput.value * rangeInput.value; i++) {
    cells[i].style.backgroundColor = bgColor;
  }
});

startingGrid(initialGrid);
createGrid();
