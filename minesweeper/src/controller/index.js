import gameTimer from '../services/timer';
import minesweeper from '../services/game';

import { renderGameBoard } from '../view/board';
import { renderToolbar, renderTimer } from '../view/board/toolbar';
import { updateMinefield } from '../view/board/minefield';
import { renderDropdownNewGameList } from '../view/board/dropdown-new-game';

function renderMinefield(difficulty) {
  if (difficulty) {
    minesweeper.initNewGame(difficulty);
  }

  updateMinefield(minesweeper.cells, minesweeper.width, minesweeper.difficulty);
}

function startNewGame(difficulty) {
  renderTimer();
  renderMinefield(difficulty);
}

function initGame() {
  renderGameBoard();
  renderToolbar();
  renderDropdownNewGameList(startNewGame);
  startNewGame();
}

export { initGame, startNewGame };
