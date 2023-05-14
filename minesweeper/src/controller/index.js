import minesweeper from '../services/game';
import gameSettings from '../services/settings';
import gameTimer from '../services/timer';

function initMineField() {
  minesweeper.initMineField(gameSettings.difficulty);
}

function initGame() {
  initMineField();
  gameTimer.reset();
}

export { initGame, initMineField };
