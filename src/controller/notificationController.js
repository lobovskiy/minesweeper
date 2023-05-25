import minesweeperService from '../services/Minesweeper';
import { refreshNotification } from '../view/notification/notification';
import { getTimeInMilliseconds } from './timerController';

const LOSE_GAME_MESSAGE = 'Game over. Try again';

function getWinningMessage() {
  const movesAmount = minesweeperService.moves;
  const seconds = getTimeInMilliseconds() / 1000;

  return `Hooray! You found all mines in ${seconds} seconds and ${movesAmount} moves!`;
}

function getMessage() {
  return minesweeperService.isGameLost
    ? LOSE_GAME_MESSAGE
    : getWinningMessage();
}

function showNotification() {
  const message = getMessage();

  refreshNotification(message);
}

export default showNotification;
