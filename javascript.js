const grid = document.querySelector('.grid');
const btn = document.querySelector('button');

let gridSideSize = 16;

const generateRandomRGBValue = () => {
    return Math.floor(Math.random() * 256);
}

const generateRandomRGB = () => {
    const r = generateRandomRGBValue();
    const g = generateRandomRGBValue();
    const b = generateRandomRGBValue();
    return [r,g,b];
}

const squareHover = () => {
    const squares = document.querySelectorAll('.square')
    let hoverCount = 0;
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            const rgbArr = generateRandomRGB();
            console.log(rgbArr);
            square.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
            if (hoverCount <= 10) {
                square.style.opacity = 10 * ++hoverCount + '%';
            }
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
    gridSideSize = Number(prompt('Please select the number of squares per side for the new grid\nNote: max value is 100.'));
    if (isNaN(gridSideSize) || gridSideSize > 100) {
        alert('Invalid value. Please insert a number below 100.')
        return;
    }
    deleteGrid();
    createGrid(gridSideSize);
})

createGrid(16);