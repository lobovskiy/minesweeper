import minesweeperService from '../services/Minesweeper';
import { startTimer, stopTimer } from './timerController';
import { addStats } from './statsController';
import { playSoundOpenCell, playSoundToggleFlag } from './soundController';
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
