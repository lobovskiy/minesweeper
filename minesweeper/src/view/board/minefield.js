import { updateMinefieldContainer } from '.';

const minefield = document.createElement('div');
minefield.classList.add('minefield');

function updateMinefield(cells, numberOfColumns, difficulty) {
  if (Array.isArray(cells)) {
    minefield.innerHTML = '';
    minefield.setAttribute('data-difficulty', difficulty);
    minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

    cells.forEach(() => {
      const cellContainer = document.createElement('div');
      cellContainer.classList.add('minefield__cell');
      minefield.append(cellContainer);
    });

    updateMinefieldContainer(minefield);
  }
}

export { minefield, updateMinefield };
