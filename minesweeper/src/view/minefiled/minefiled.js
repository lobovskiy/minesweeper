import minesweeperService from '../../services/Minesweeper';
import renderCell from './cell';
import { MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../../constants';

const minefield = document.createElement('div');
minefield.classList.add('minefield');

function updateMinefieldRenderParams() {
  const { difficulty } = minesweeperService;
  const numberOfColumns = MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width;

  minefield.setAttribute('data-difficulty', difficulty);
  minefield.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
}

function refreshMinefieldCells(callbacks = {}) {
  const { cells } = minesweeperService;
  const { openCell, toggleFlag } = callbacks;

  minefield.innerHTML = '';

  cells.forEach((cell, index) => {
    const cellElement = renderCell(cell, index, openCell, toggleFlag);

    minefield.append(cellElement);
  });
}

export { minefield, updateMinefieldRenderParams, refreshMinefieldCells };
