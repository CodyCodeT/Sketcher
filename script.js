let gridSize = 16;
const size = document.querySelector('#size');
const clear = document.querySelector('#clear');
grid();


clear.addEventListener('click', clearGrid);
size.addEventListener('click', function() {
    gridSize = prompt('Enter the gridSize of the grid (1-100): ');
    if (gridSize > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        resize();
        grid();
        return gridSize;
    }
});

function resize() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    })
};
function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
};

function grid() {
for (let i = 0; i < gridSize * gridSize; i++) {
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.cssText = `width: ${960 / gridSize}px; height: ${960 / gridSize}`;
    div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    });
    div.classList.add('square');
    container.appendChild(div);
    console.log(i);
}};
