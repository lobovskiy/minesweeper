import minesweeper from '../services/game';
import gameSettings from '../services/settings';
import gameTimer from '../services/timer';

function initNewGame() {
  minesweeper.initNewGame(gameSettings.difficulty);
}

function initGame() {
  initNewGame();
  gameTimer.reset();
}

export { initGame, initNewGame };
