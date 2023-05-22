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
import { updateMoves } from '../view/toolbar/moves/moves';
import { updateMinefieldRenderParams } from '../view/minefiled/minefiled';
import { clearNotification } from '../view/notification/notification';

const LS_KEY_SAVED_GAME = 'savedGame';

function saveGame() {
  localStorage.setItem(
    LS_KEY_SAVED_GAME,
    JSON.stringify({
      difficulty: settingsService.difficulty,
      timer: getTimeInMilliseconds(),
      game: minesweeperService,
    }),
  );
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem(LS_KEY_SAVED_GAME));
  const { timer, game, difficulty } = savedGame;

  settingsService.setDifficulty(difficulty);
  resetTimer();
  setTimer(timer);
  if (game.isGameStarted) {
    startTimer();
  }

  minesweeperService.loadGame(game);
  updateMinefieldRenderParams();
  updateMinefield();
}

function initGame() {
  resetTimer();
  updateMoves();
  clearNotification();
  updateMinefieldRenderParams();
  updateMinefield();
}

function startNewGame(difficulty) {
  settingsService.setDifficulty(difficulty);
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
