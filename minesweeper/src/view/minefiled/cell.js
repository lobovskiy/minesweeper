import minesweeperService from '../../services/Minesweeper';

function renderCell(cell, id, callbackOpenCell, callbackToggleFlag) {
  const cellElement = document.createElement('div');
  cellElement.classList.add('minefield__cell');

  if (cell.isOpen) {
    cellElement.classList.add('minefield__cell_open');

    if (cell.label) {
      cellElement.classList.add(`minefield__cell_label-${cell.label}`);
      cellElement.innerHTML = cell.label;
    }

    if (cell.isMine) {
      cellElement.innerHTML = 'M';
    }
  }

  if (cell.isFlagged) {
    cellElement.innerHTML = 'F';
  }

  if (!minesweeperService.isGameFinished) {
    if (!cell.isFlagged) {
      cellElement.addEventListener('click', () => {
        callbackOpenCell(id);
      });
    }
    cellElement.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      callbackToggleFlag(id);
    });
  }

  return cellElement;
}

export default renderCell;
