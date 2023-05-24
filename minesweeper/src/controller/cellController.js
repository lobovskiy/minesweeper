import minesweeperService from '../services/Minesweeper';
import { startTimer, stopTimer } from './timerController';
import { addStats } from './statsController';
import { playSoundOpenCell, playSoundToggleFlag } from './soundController';
import showNotification from './notificationController';
import {
  disableInputNumberOfMines,
  getInputNumberOfMinesValue,
} from '../view/toolbar/numberOfMines/numberOfMines';
import { updateMoves } from '../view/toolbar/moves';
import settingsService from '../services/Settings';

function checkIfGameIsFinished() {
  if (minesweeperService.isGameFinished) {
    stopTimer();
    addStats();
    showNotification();
  }
}

function openCell(index) {
  if (!minesweeperService.isGameStarted) {
    const numberOfMines = getInputNumberOfMinesValue();

    settingsService.setNumberOfMines(numberOfMines);
    disableInputNumberOfMines();

    startTimer();
  }

  minesweeperService.openCell(index);

  updateMoves();
  checkIfGameIsFinished();
  playSoundOpenCell();
}

function toggleFlag(index) {
  if (!minesweeperService.isGameStarted) {
    startTimer();
  }

  minesweeperService.toggleFlag(index);
  playSoundToggleFlag();
}

export { openCell, toggleFlag };
