const minefield = document.createElement('div');
minefield.classList.add('minefield');

function setDifficultyDataAttribute(attribute) {
  minefield.setAttribute('data-difficulty', attribute);
}

function updateMinefield(cells, numberOfColumns) {
  minefield.innerHTML = '';

  if (Array.isArray(cells)) {
    cells.forEach(() => {
      const cellContainer = document.createElement('div');
      cellContainer.classList.add('minefield__cell');
      minefield.append(cellContainer);
    });
  }

  minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
}

export { minefield, setDifficultyDataAttribute, updateMinefield };
