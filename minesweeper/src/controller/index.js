import minesweeper from '../services/game';
import gameSettings from '../services/settings';
import gameTimer from '../services/timer';

function initNewGame() {
  gameTimer.reset();
  minesweeper.initNewGame(gameSettings.difficulty);
}

export { initNewGame };
