import { MINEFIELD_SETTINGS_BY_DIFFICULTY, DIFFICULTIES } from '../constants';
import { getAdjacentCellsIndexes, shuffleArray } from '../utils.js';

class Game {
  constructor(difficulty) {
    this.difficulty = difficulty || DIFFICULTIES.beginner;
    this.cells = Game.initCells(this.difficulty);
    this.isGameStarted = false;
    this.isGameFinished = false;
    this.isGameLost = false;
  }

  static initCells(difficulty) {
    const cellsAmount =
      MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width *
      MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].height;
    const cells = [];
    const initialCell = {
      isOpen: false,
      isFlagged: false,
      isMine: false,
      label: null,
    };

    for (let i = 0; i < cellsAmount; i += 1) {
      cells.push({ ...initialCell });
    }

    return cells;
  }

  initNewGame(difficulty) {
    this.constructor(difficulty);
  }

  setLabels() {
    this.cells.forEach((cell, index) => {
      if (!cell.isMine) {
        const adjacentCellsIndexes = getAdjacentCellsIndexes(
          index,
          this.difficulty,
        );

        let minesAmount = 0;

        adjacentCellsIndexes.forEach((adjacentCellsIndex) => {
          if (this.cells[adjacentCellsIndex].isMine) {
            minesAmount += 1;
          }
        });

        if (minesAmount) {
          this.cells[index].label = minesAmount;
        }
      }
    });
  }

  setMines(clickedIndex) {
    const cellsIndexes = Array.from(Array(this.cells.length).keys());
    const cellsIndexesWithoutClicked = cellsIndexes.filter(
      (cellIndex) => cellIndex !== clickedIndex,
    );
    const cellsIndexesShuffled = shuffleArray(cellsIndexesWithoutClicked);
    const minesIndexes = cellsIndexesShuffled.slice(
      0,
      MINEFIELD_SETTINGS_BY_DIFFICULTY[this.difficulty].minesAmount,
    );

    minesIndexes.forEach((mineIndex) => {
      this.cells[mineIndex].isMine = true;
    });

    this.setLabels();
  }

  loseGame() {
    this.cells.forEach((cell, index) => {
      this.cells[index].isOpen = true;
    });

    this.isGameFinished = true;
    this.isGameLost = true;
  }

  openCell(index) {
    if (!this.isGameStarted) {
      this.setMines(index);
      this.isGameStarted = true;
    }

    if (this.cells[index].isMine) {
      this.loseGame();
    } else {
      this.cells[index].isOpen = true;
    }
  }
}

const minesweeper = new Game();

export default minesweeper;
