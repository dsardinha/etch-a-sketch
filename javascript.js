const grid = document.querySelector('.grid');

for (let j = 0; j < 16; j++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column');
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridColumn.appendChild(square);
    }
    grid.appendChild(gridColumn);
}


