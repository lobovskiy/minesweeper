import minesweeperService from '../../../services/Minesweeper';
import imgMine from '../../../assets/images/mine.png';
import imgFlag from '../../../assets/images/flag.png';
import './style.scss';

function renderCell(cell, id, callbackOpenCell, callbackToggleFlag) {
  const cellElement = document.createElement('div');
  cellElement.classList.add('minesweeper-cell');

  if (cell.isOpen) {
    cellElement.classList.add('minesweeper-cell_open');

    if (cell.label) {
      cellElement.classList.add(`minesweeper-cell_label-${cell.label}`);
      cellElement.innerHTML = cell.label;
    }

    if (cell.isMine) {
      const mine = new Image();
      mine.src = imgMine;
      mine.alt = '';
      cellElement.append(mine);
    }

    if (cell.isExploded) {
      cellElement.classList.add('minesweeper-cell_exploded');
    }
  } else if (cell.isFlagged) {
    const flag = new Image();
    flag.src = imgFlag;
    flag.alt = '';
    cellElement.append(flag);
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
