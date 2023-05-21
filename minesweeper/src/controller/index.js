import minesweeperService from '../services/Minesweeper';
import {
  getTimeInMilliseconds,
  startTimer,
  setTimer,
  resetTimer,
} from './timerController';
import updateMinefield from './minefieldController';
import { showStats } from './statsController';
import { renderApp, toggleDarkThemeClass } from '../view';
import { renderToolbarComponents } from '../view/toolbar/toolbar';
import { updateMinefieldRenderParams } from '../view/minefiled/minefiled';

const LS_KEY_SAVED_GAME = 'savedGame';

function saveGame() {
  localStorage.setItem(
    LS_KEY_SAVED_GAME,
    JSON.stringify({
      timer: getTimeInMilliseconds(),
      game: minesweeperService,
    }),
  );
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem(LS_KEY_SAVED_GAME));
  const { timer, game } = savedGame;

  resetTimer();
  setTimer(timer);
  if (game.isGameStarted) {
    startTimer();
  }

  minesweeperService.loadGame(game);
  updateMinefield();
}

function toggleSound() {}

function initMinefield() {
  updateMinefieldRenderParams();
  updateMinefield();
}

function startNewGame(difficulty) {
  resetTimer();
  minesweeperService.initNewGame(difficulty);
  initMinefield();
}

function initApp() {
  const toolbarCallbacks = {
    startNewGame,
    saveGame,
    loadGame,
    showStats,
    toggleSound,
    toggleDarkThemeClass,
  };

  renderApp();
  renderToolbarComponents(toolbarCallbacks);
  initMinefield();
}

export default initApp;
