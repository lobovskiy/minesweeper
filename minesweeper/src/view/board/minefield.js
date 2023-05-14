import { updateMinefieldContainer } from '.';
import { MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../../constants';
import minesweeper from '../../services/game';

const minefield = document.createElement('div');
minefield.classList.add('minefield');

function updateMinefield(callbackOpenCell) {
  const { cells } = minesweeper;
  const { difficulty } = minesweeper;
  const numberOfColumns = MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width;

  if (Array.isArray(cells)) {
    minefield.innerHTML = '';
    minefield.setAttribute('data-difficulty', difficulty);
    minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

    cells.forEach((cell, index) => {
      const cellContainer = document.createElement('div');
      cellContainer.classList.add('minefield__cell');
      if (cell.isMine) {
        cellContainer.innerHTML = 'M';
      }
      if (cell.label) {
        cellContainer.innerHTML = cell.label;
      }
      cellContainer.addEventListener('click', () => {
        callbackOpenCell(index);
      });

      minefield.append(cellContainer);
    });

    updateMinefieldContainer(minefield);
  }
}

export { minefield, updateMinefield };
