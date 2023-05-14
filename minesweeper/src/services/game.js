import { MINE_FIELD_SIZE, DIFFICULTY } from '../data/settings';

class Game {
  constructor() {
    const difficulty = DIFFICULTY.beginner;

    this.initMineField(difficulty);
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

  initMineField(difficulty) {
    this.width = MINE_FIELD_SIZE[difficulty].width;
    this.height = MINE_FIELD_SIZE[difficulty].height;
    this.cells = this.initCells();
  }
}

const minesweeper = new Game();

export default minesweeper;
