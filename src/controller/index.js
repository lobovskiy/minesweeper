import minesweeperService from '../services/Minesweeper';
import settingsService from '../services/Settings';
import {
  getTimeInMilliseconds,
  startTimer,
  setTimer,
  resetTimer,
} from './timerController';
import updateMinefield from './minefieldController';
import { showStats } from './statsController';
import { toggleSound } from './soundController';
import toggleDarkMode from './colorThemeController';
import { renderApp } from '../view';
import { renderToolbarComponents } from '../view/toolbar/toolbar';
import {
  disableInputNumberOfMines,
  enableInputNumberOfMines,
  setInputNumberOfMinesValue,
} from '../view/toolbar/numberOfMines/numberOfMines';
import { updateMoves } from '../view/toolbar/moves';
import { updateMinefieldRenderParams } from '../view/minefiled/minefiled';
import { clearNotification } from '../view/notification/notification';
import { NUMBER_OF_MINES } from '../constants';

const LS_KEY_SAVED_GAME = 'savedGame';

function saveGame() {
  localStorage.setItem(
    LS_KEY_SAVED_GAME,
    JSON.stringify({
      difficulty: settingsService.difficulty,
      numberOfMines: settingsService.numberOfMines,
      timer: getTimeInMilliseconds(),
      game: minesweeperService,
    }),
  );
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem(LS_KEY_SAVED_GAME));
  const { difficulty, numberOfMines, timer, game } = savedGame;

  settingsService.setDifficulty(difficulty);
  settingsService.setNumberOfMines(numberOfMines);
  resetTimer();
  setTimer(timer);
  setInputNumberOfMinesValue(numberOfMines);

  if (game.isGameStarted) {
    startTimer();
    disableInputNumberOfMines();
  }

  minesweeperService.loadGame(game);
  updateMinefieldRenderParams();
  updateMinefield();
}

function initGame() {
  enableInputNumberOfMines();
  resetTimer();
  updateMoves();
  clearNotification();
  updateMinefieldRenderParams();
  updateMinefield();
}

function startNewGame(difficulty) {
  settingsService.setDifficulty(difficulty);
  settingsService.setNumberOfMines(NUMBER_OF_MINES[difficulty]);
  setInputNumberOfMinesValue(NUMBER_OF_MINES[difficulty]);
  minesweeperService.initNewGame();
  initGame();
}

function initApp() {
  const toolbarCallbacks = {
    startNewGame,
    saveGame,
    loadGame,
    showStats,
    toggleSound,
    toggleDarkMode,
  };

  renderApp();
  renderToolbarComponents(toolbarCallbacks);
  initGame();
}

export default initApp;
