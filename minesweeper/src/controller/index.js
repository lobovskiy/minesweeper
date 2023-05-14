import minesweeper from '../services/game';
import gameTimer from '../services/timer';

function initNewGame() {
  gameTimer.render();
  minesweeper.render();
}

export { initNewGame };
