import gameTimer from '../services/timer';
import minesweeper from '../services/game';

import {
  renderGameBoard,
  renderLoseMessage,
  renderWinMessage,
} from '../view/board';
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

  minesweeper.openCell(index);

  const indexFailed = minesweeper.isGameLost ? index : null;

  updateMinefield(openCell, toggleFlag, indexFailed);

  if (minesweeper.isGameFinished) {
    gameTimer.stop();

    if (minesweeper.isGameLost) {
      renderLoseMessage();
    } else {
      renderWinMessage();
    }
  }
}

function toggleFlag(index) {
  if (!minesweeper.isGameStarted) {
    startTimer();
  }

  minesweeper.toggleFlag(index);

  updateMinefield(openCell, toggleFlag);
}

function startNewGame(difficulty) {
  gameTimer.reset();

  if (difficulty) {
    minesweeper.initNewGame(difficulty);
  }

  renderTimer();
  updateMinefield(openCell, toggleFlag);
}

function initGame() {
  renderGameBoard();
  renderToolbar();
  renderDropdownNewGameList(startNewGame);
  startNewGame();
}

export { initGame, startNewGame };
