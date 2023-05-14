import gameTimer from '../services/timer';
import minesweeper from '../services/game';

import { renderGameBoard } from '../view/board';
import { renderToolbar, renderTimer } from '../view/board/toolbar';
import { updateMinefield } from '../view/board/minefield';
import { renderDropdownNewGameList } from '../view/board/dropdownNewGame';

function startTimer() {
  gameTimer.start(renderTimer);
}

function openCell(index) {
  if (!minesweeper.isGameStarted) {
    startTimer();
  }

  minesweeper.openCell(index, updateMinefield);
}

function renderMinefield(difficulty) {
  if (difficulty) {
    minesweeper.initNewGame(difficulty);
  }

  updateMinefield(openCell);
}

function startNewGame(difficulty) {
  gameTimer.reset(renderTimer);
  renderMinefield(difficulty);
}

function initGame() {
  renderGameBoard();
  renderToolbar();
  renderDropdownNewGameList(startNewGame);
  startNewGame();
}

export { initGame, startNewGame };
