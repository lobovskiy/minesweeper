import { MINE_FIELD_SIZE, DIFFICULTY } from '../data/settings';
import updateMinefield from '../view/board/minefield';

class Game {
  constructor() {
    const difficulty = DIFFICULTY.beginner;

    this.width = MINE_FIELD_SIZE[difficulty].width;
    this.height = MINE_FIELD_SIZE[difficulty].height;
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
    this.width = MINE_FIELD_SIZE[difficulty].width;
    this.height = MINE_FIELD_SIZE[difficulty].height;
    this.cells = this.initCells();

    updateMinefield(this.cells, this.width);
  }
}

const minesweeper = new Game();

export default minesweeper;