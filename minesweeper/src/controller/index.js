import minesweeper from '../services/game';
import gameSettings from '../services/settings';
import gameTimer from '../services/timer';

function initMinefield() {
  minesweeper.initMinefield(gameSettings.difficulty);
}

function initGame() {
  initMinefield();
  gameTimer.reset();
}

export { initGame, initMinefield };
