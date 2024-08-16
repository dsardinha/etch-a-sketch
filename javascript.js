const grid = document.querySelector('.grid');
const btn = document.querySelector('button');

let gridSideSize = 16;

const squareHover = () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('square-hover');
        })
    })
}

const createGrid = (gridSizeSize = 16) => {
    for (let j = 0; j < gridSizeSize; j++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        for (let i = 0; i < gridSizeSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = 600 / gridSizeSize + "px";
            square.style.height = 600 / gridSizeSize + "px";
            gridColumn.appendChild(square);
        }
        grid.appendChild(gridColumn);
    }
    squareHover();
}

const deleteGrid = () => {
    const gridColumns = document.querySelectorAll('.grid-column');
    gridColumns.forEach((gridColumn) => {
        grid.removeChild(gridColumn);
    })
    grid.removeChild
}

btn.addEventListener('click', () => {
    gridSideSize = Number(prompt('Please select the number of squares per side for the new grid.'));
    deleteGrid();
    createGrid(gridSideSize);
})

createGrid(16);