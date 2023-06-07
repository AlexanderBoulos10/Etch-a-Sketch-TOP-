const rangeInput = document.querySelector("input");
const sliderValue = document.querySelector("span");
const container = document.querySelector('.container');
const applyButton = document.querySelector('button');

function createGrid(){
    rangeInput.oninput = (() => {
        deleteGrid(container);
        let rangeValue = rangeInput.value;
        sliderValue.textContent = rangeValue;
        for(let i = 0; i < rangeValue; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            for(let j = 0; j < rangeValue; j++){
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('important');
                row.appendChild(cell);
                console.log(cell);
            }
        }
    })
}

function deleteGrid(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

createGrid();

