import { MINEFIELD_SIZE_BY_DIFFICULTY, DIFFICULTY } from '../constants';
import { updateToolbar } from '../view/board/toolbar';
import { updateMinefield } from '../view/board/minefield';

class Game {
  constructor(difficulty) {
    this.difficulty = difficulty || DIFFICULTY.beginner;
    this.width = MINEFIELD_SIZE_BY_DIFFICULTY[this.difficulty].width;
    this.height = MINEFIELD_SIZE_BY_DIFFICULTY[this.difficulty].height;
    this.cells = Game.initCells(this.width, this.height);
  }

  static initCells(width, height) {
    const initialCell = {
      isOpen: false,
      isFlagged: false,
      isMine: undefined,
      label: null,
    };
    const cellsAmount = width * height;

    return new Array(cellsAmount).fill(initialCell);
  }

  initNewGame(difficulty) {
    this.constructor(difficulty);
    this.render(difficulty);
  }

  render() {
    updateToolbar();
    updateMinefield(this.cells, this.width, this.difficulty);
  }
}

const minesweeper = new Game();

export default minesweeper;
