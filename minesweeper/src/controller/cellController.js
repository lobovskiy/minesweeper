import minesweeperService from '../services/Minesweeper';
import { startTimer, stopTimer } from './timerController';
import { addStats } from './statsController';
import showNotification from './notificationController';

function checkIfGameIsFinished() {
  if (minesweeperService.isGameFinished) {
    stopTimer();
    addStats();
    showNotification();
  }
}

function openCell(index) {
  if (!minesweeperService.isGameStarted) {
    startTimer();
  }

  minesweeperService.openCell(index);
  // const indexFailed = minesweeperService.isGameLost ? index : null;

  checkIfGameIsFinished();
}

function toggleFlag(index) {
  if (!minesweeperService.isGameStarted) {
    startTimer();
  }

  minesweeperService.toggleFlag(index);
}

export { openCell, toggleFlag };
