import { MINEFIELD_SETTINGS_BY_DIFFICULTY, DIFFICULTIES } from '../constants';
import { getAdjacentCellsIndexes, shuffleArray } from '../utils.js';

class Minesweeper {
  constructor(difficulty) {
    this.difficulty = difficulty || DIFFICULTIES.beginner;
    this.cells = Minesweeper.initCells(this.difficulty);
    this.isGameStarted = false;
    this.isGameFinished = false;
    this.isGameLost = false;
    this.moves = 0;
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

  loadGame(game) {
    this.difficulty = game.difficulty;
    this.cells = game.cells;
    this.isGameStarted = game.isGameStarted;
    this.isGameFinished = game.isGameFinished;
    this.isGameLost = game.isGameLost;
    this.moves = game.moves;
  }

  openAllCells() {
    this.cells.forEach((cell, index) => {
      if (!this.cells[index].isOpen) {
        this.cells[index].isOpen = true;
      }
    });
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

  setMines(indexClicked) {
    const cellsIndexes = Array.from(Array(this.cells.length).keys());
    const cellsIndexesWithoutClicked = cellsIndexes.filter(
      (cellIndex) => cellIndex !== indexClicked,
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
    this.isGameFinished = true;
    this.isGameLost = true;
    this.openAllCells();
  }

  openEmptyArea(indexClicked) {
    if (!this.cells[indexClicked].label) {
      const checkedEmptyCellsIndexes = [];

      const openAdjacentCellsOfEmptyCell = (index) => {
        if (checkedEmptyCellsIndexes.includes(index)) {
          return;
        }

        checkedEmptyCellsIndexes.push(index);

        const adjacentCellsIndexes = getAdjacentCellsIndexes(
          index,
          this.difficulty,
        );

        adjacentCellsIndexes.forEach((adjacentCellsIndex) => {
          this.cells[adjacentCellsIndex].isOpen = true;
        });

        const adjacentEmptyCellsIndexes = adjacentCellsIndexes.filter(
          (adjacentCellsIndex) => !this.cells[adjacentCellsIndex].label,
        );

        for (let i = 0; i < adjacentEmptyCellsIndexes.length; i += 1) {
          const emptyCellsIndex = adjacentEmptyCellsIndexes[i];
          openAdjacentCellsOfEmptyCell(emptyCellsIndex);
        }
      };

      openAdjacentCellsOfEmptyCell(indexClicked);
    }
  }

  checkIfGameIsWon() {
    const notOpenedCells = this.cells.filter((cell) => !cell.isOpen);

    if (notOpenedCells.every((cell) => cell.isMine)) {
      this.isGameFinished = true;
      this.openAllCells();
    }
  }

  openCell(indexClicked) {
    if (!this.isGameStarted) {
      this.setMines(indexClicked);
      this.isGameStarted = true;
    }

    if (this.cells[indexClicked].isMine) {
      this.loseGame();
    } else {
      this.cells[indexClicked].isOpen = true;
      this.moves += 1;
      this.openEmptyArea(indexClicked);
      this.checkIfGameIsWon();
    }
  }

  toggleFlag(indexClicked) {
    if (!this.isGameStarted) {
      this.setMines(indexClicked);
      this.isGameStarted = true;
    }

    this.cells[indexClicked].isFlagged = !this.cells[indexClicked].isFlagged;
  }
}

const minesweeperService = new Minesweeper();

export default minesweeperService;
