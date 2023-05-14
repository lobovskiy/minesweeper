import { MINEFIELD_SIZE_BY_DIFFICULTY, DIFFICULTY } from '../constants';
import { updateMinefield } from '../view/board/minefield';

class Game {
  constructor() {
    const difficulty = DIFFICULTY.beginner;

    this.width = MINEFIELD_SIZE_BY_DIFFICULTY[difficulty].width;
    this.height = MINEFIELD_SIZE_BY_DIFFICULTY[difficulty].height;
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

  initNewGame(difficulty) {
    this.width = MINEFIELD_SIZE_BY_DIFFICULTY[difficulty].width;
    this.height = MINEFIELD_SIZE_BY_DIFFICULTY[difficulty].height;
    this.cells = this.initCells();

    updateMinefield(this.cells, this.width);
  }
}

const minesweeper = new Game();

export default minesweeper;
