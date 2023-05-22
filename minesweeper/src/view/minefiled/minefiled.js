import minesweeperService from '../../services/Minesweeper';
import renderCell from './cell/cell';
import { MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../../constants';
import settingsService from '../../services/Settings';
import './style.scss';

const minefield = document.createElement('div');
minefield.classList.add('minefield');

function updateMinefieldRenderParams() {
  const difficulty = settingsService.getDifficulty();
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
