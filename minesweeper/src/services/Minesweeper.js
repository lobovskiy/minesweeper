import settingsService from './Settings';
import { MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../constants';
import { getAdjacentCellsIndexes, shuffleArray } from '../utils.js';
import Cell from './Cell';

class Minesweeper {
  constructor() {
    this.cells = Minesweeper.initCells();
    this.isGameStarted = false;
    this.isGameFinished = false;
    this.isGameLost = false;
    this.moves = 0;
  }

  static initCells() {
    const difficulty = settingsService.getDifficulty();
    const cellsAmount =
      MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width *
      MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].height;
    const cells = [];

    for (let i = 0; i < cellsAmount; i += 1) {
      cells.push(new Cell());
    }

    return cells;
  }

  initNewGame() {
    this.constructor();
  }

  loadGame(game) {
    this.cells = game.cells;
    this.isGameStarted = game.isGameStarted;
    this.isGameFinished = game.isGameFinished;
    this.isGameLost = game.isGameLost;
    this.moves = game.moves;
  }

  openAllCells() {
    this.cells.forEach((cell) => {
      if (!cell.isOpen) {
        cell.open();
      }
    });
  }

  setLabels() {
    this.cells.forEach((cell, index) => {
      if (!cell.isMine) {
        const adjacentCellsIndexes = getAdjacentCellsIndexes(
          index,
          settingsService.getDifficulty(),
        );

        let minesAmount = 0;

        adjacentCellsIndexes.forEach((adjacentCellsIndex) => {
          if (this.cells[adjacentCellsIndex].isMine) {
            minesAmount += 1;
          }
        });

        if (minesAmount) {
          cell.setLabel(minesAmount);
        }
      }
    });
  }

  setMines(indexClicked) {
    const cellsIndexes = Array.from(Array(this.cells.length).keys());
    const cellsIndexesExceptClicked = cellsIndexes.filter(
      (cellIndex) => cellIndex !== indexClicked,
    );
    const cellsIndexesShuffled = shuffleArray(cellsIndexesExceptClicked);
    const minedCellIndexes = cellsIndexesShuffled.slice(
      0,
      MINEFIELD_SETTINGS_BY_DIFFICULTY[settingsService.getDifficulty()]
        .minesAmount,
    );

    minedCellIndexes.forEach((minedCellIndex) => {
      this.cells[minedCellIndex].setMine();
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
          settingsService.getDifficulty(),
        );

        adjacentCellsIndexes.forEach((adjacentCellsIndex) => {
          this.cells[adjacentCellsIndex].open();
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

    this.moves += 1;

    if (this.cells[indexClicked].isMine) {
      this.loseGame();
    } else {
      this.cells[indexClicked].open();
      this.openEmptyArea(indexClicked);
      this.checkIfGameIsWon();
    }
  }

  toggleFlag(indexClicked) {
    if (!this.isGameStarted) {
      this.setMines(indexClicked);
      this.isGameStarted = true;
    }

    this.cells[indexClicked].toggleFlag();
  }
}

const minesweeperService = new Minesweeper();

export default minesweeperService;
