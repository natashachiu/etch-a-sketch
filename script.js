const size = 50;

const container = document.querySelector("#container-div");


function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// create divs that acts as grid
function makeGrid(size){
    removeAllChildNodes(container);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
        for (let j = 0; j < size; j++) {
            const col = document.createElement('div');
            col.classList.add('pixel');
            row.appendChild(col);
        }
        container.appendChild(row);
    }    
}
makeGrid(size);

// changes color of pixel
function addColor(e) {
    e.target.style.background = 'grey';
}

// allows mouse over to color in pixels
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', addColor)
});

// prompts user to enter a size for the grid
function promptSize() {
    let grid_size = prompt("Enter grid size: ");
    if (grid_size > 100) {
        alert("Grid size too large");
        return;
    }
    makeGrid(grid_size);
}

// prompt button event
const prompt_btn = document.querySelector('.prompt-size');
prompt_btn.addEventListener('click', promptSize);