import { updateMinefieldContainer } from '.';

const minefield = document.createElement('div');
minefield.classList.add('minefield');

function setDifficultyDataAttribute(attribute) {
  minefield.setAttribute('data-difficulty', attribute);
}

function updateMinefield(cells, numberOfColumns) {
  if (Array.isArray(cells)) {
    minefield.innerHTML = '';
    minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

    cells.forEach(() => {
      const cellContainer = document.createElement('div');
      cellContainer.classList.add('minefield__cell');
      minefield.append(cellContainer);
    });

    updateMinefieldContainer(minefield);
  }
}

export { minefield, setDifficultyDataAttribute, updateMinefield };
