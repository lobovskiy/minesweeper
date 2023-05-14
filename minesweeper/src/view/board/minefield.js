const minefield = document.createElement('div');
minefield.classList.add('minefield');

function updateMinefield(cells, numberOfColumns) {
  minefield.innerHTML = '';

  if (Array.isArray(cells)) {
    cells.forEach((cell, index) => {
      const cellContainer = document.createElement('div');
      cellContainer.innerHTML = index;
      minefield.append(cellContainer);
    });
  }

  minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
}

export { minefield, updateMinefield };
