import gameTimer from '../services/timer';
import minesweeper from '../services/game';

import {
  renderGameBoard,
  renderLoseMessage,
  renderWinMessage,
  showModal,
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

    const statsObj = {
      dateTime: new Date(),
      seconds: gameTimer.milliseconds / 1000,
      moves: minesweeper.moves,
    };

    if (minesweeper.isGameLost) {
      renderLoseMessage();
      statsObj.result = 'Lose';
    } else {
      renderWinMessage();
      statsObj.result = 'Win';
    }

    const stats = JSON.parse(localStorage.getItem('stats')) || [];
    stats.push(statsObj);

    if (stats.length > 10) {
      stats.shift();
    }

    localStorage.setItem('stats', JSON.stringify(stats));
  }
}

function toggleFlag(index) {
  if (!minesweeper.isGameStarted) {
    startTimer();
  }

  minesweeper.toggleFlag(index);

  updateMinefield(openCell, toggleFlag);
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem('savedGame'));
  const { timer, game } = savedGame;

  gameTimer.reset();
  gameTimer.set(timer);
  renderTimer();
  if (game.isGameStarted) {
    startTimer();
  }

  minesweeper.loadGame(game);
  updateMinefield(openCell, toggleFlag);
}

function showStats() {
  showModal('text');
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
  renderToolbar(loadGame, showStats);
  renderDropdownNewGameList(startNewGame);
  startNewGame();
}

export { initGame, startNewGame };
