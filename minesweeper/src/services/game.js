import { MINEFIELD_SIZE, DIFFICULTY } from '../constants';
import updateMinefield from '../view/board/minefield';

class Game {
  constructor() {
    const difficulty = DIFFICULTY.beginner;

    this.width = MINEFIELD_SIZE[difficulty].width;
    this.height = MINEFIELD_SIZE[difficulty].height;
    this.cells = this.initCells();
  }

  initCells() {
    const initialCell = {
      isOpen: false,
      isFlagged: false,
      isMine: undefined,
      label: null,
    };
    const cellsAmount = this.width * this.height;

    return new Array(cellsAmount).fill(initialCell);
  }

  initMinefield(difficulty) {
    this.width = MINEFIELD_SIZE[difficulty].width;
    this.height = MINEFIELD_SIZE[difficulty].height;
    this.cells = this.initCells();

    updateMinefield(this.cells, this.width);
  }
}

const minesweeper = new Game();

export default minesweeper;
