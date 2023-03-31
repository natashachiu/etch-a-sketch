const size = 30;

const container = document.querySelector("#container-div");

// ------------- draw on mousedown property ---------------------
let is_drawing = false;
container.addEventListener('mousedown', () =>  is_drawing = true);
container.addEventListener('mouseup', () =>  is_drawing = false);


// ---------------------- draw mode -----------------------------
let toggle_rainbow = false;

const mode = document.querySelector('.mode');
mode.addEventListener('click', toggleMode);

function toggleMode(e) {
    if (e.target.textContent =="Classic mode") {
        e.target.textContent = "Rainbow mode";
        toggle_rainbow = true;
    } else {
        e.target.textContent = "Classic mode";
        toggle_rainbow = false;
    }
}

// -------------------------- grid ----------------------------------


function makeGrid(size){
    removeAllChildNodes(container);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
        for (let j = 0; j < size; j++) {
            const col = document.createElement('div');
            col.classList.add('pixel');
            row.appendChild(col);
            col.addEventListener('mousedown', addColor);
            col.addEventListener('mouseover', addColor);
        }
        container.appendChild(row);
    }    
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// --------------------------- color -----------------------------------

// changes color of pixel
function addColor(e) {
    if (e.type === 'mouseover' && !is_drawing) return;

    if (toggle_rainbow) {
        let [r,g,b] =randomRgbColor();
        e.target.style.background = `rgb(${r}, ${g}, ${b})`;
    }else {
        e.target.style.background = 'slategrey';
    }
}

// create random color
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}


// ----------------------- grid size slider ------------------------------

const range_slider = document.querySelector('#range-slider');
const output = document.querySelector('.grid-size');

range_slider.addEventListener('input', changeGridSize);

function changeGridSize(e) {
    output.textContent = `Grid size: ${e.target.value} x ${e.target.value}`;
    makeGrid(e.target.value);
}



// ---------------------------- clear -----------------------------------

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);
// clear the grid
function clearAll() {
    makeGrid(size);
}

makeGrid(size);


// ------------------- button click animation -----------------------------
let button_click = document.querySelectorAll('button');

button_click.forEach(button => {

    button.addEventListener('mousedown', function(e) {
        e.target.style.background = 'peru';
    })
    button.addEventListener('mouseup', function(e) {
        e.target.style.background = 'goldenrod';
    })
})