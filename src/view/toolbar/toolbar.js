import { renderButton, renderDropdown } from '../components';
import { timer } from '../timer/timer';
import { moves } from './moves';
import { numberOfMines } from './numberOfMines/numberOfMines';
import { renderButtonToggleSound } from './buttonToggleSound';
import { renderButtonToggleDarkMode } from './buttonToggleDarkMode';
import { DIFFICULTIES } from '../../constants';
import './style.scss';

const toolbar = document.createElement('div');
toolbar.classList.add('toolbar');

function renderToolbarComponents(callbacks = {}) {
  const LABELS = {
    selectorNewGame: 'New game',
    buttonSaveGame: 'Save game',
    buttonLoadGame: 'Load game',
    buttonShowStats: 'Show stats',
    buttonToggleSound: 'Toggle sound',
  };
  const {
    startNewGame,
    saveGame,
    loadGame,
    showStats,
    toggleSound,
    toggleDarkMode,
  } = callbacks;

  const dropdownNewGame = renderDropdown(
    LABELS.selectorNewGame,
    (item) => startNewGame(item),
    Object.values(DIFFICULTIES),
  );
  dropdownNewGame.classList.add('toolbar__dropdown');
  const buttonSaveGame = renderButton(LABELS.buttonSaveGame, () => saveGame());
  const buttonLoadGame = renderButton(LABELS.buttonLoadGame, () => loadGame());
  const buttonShowStats = renderButton(LABELS.buttonShowStats, () =>
    showStats(),
  );
  const buttonToggleSound = renderButtonToggleSound(toggleSound);
  const buttonToggleDarkMode = renderButtonToggleDarkMode(toggleDarkMode);

  const numberOfMinesContainer = document.createElement('div');
  numberOfMinesContainer.classList.add('toolbar__number-of-mines');
  numberOfMinesContainer.append(numberOfMines);

  const timerContainer = document.createElement('div');
  timerContainer.classList.add('toolbar__timer');
  timerContainer.append(timer);

  const movesContainer = document.createElement('div');
  movesContainer.classList.add('toolbar__moves');
  movesContainer.append(moves);

  const displayContainer = document.createElement('div');
  displayContainer.classList.add('toolbar__display');
  displayContainer.append(
    numberOfMinesContainer,
    timerContainer,
    movesContainer,
  );

  const toolbarBlock1 = document.createElement('div');
  toolbarBlock1.classList.add('toolbar__block');
  toolbarBlock1.append(dropdownNewGame, buttonSaveGame, buttonLoadGame);
  const toolbarBlock2 = document.createElement('div');
  toolbarBlock2.classList.add('toolbar__block');
  toolbarBlock2.append(displayContainer);
  const toolbarBlock3 = document.createElement('div');
  toolbarBlock3.classList.add('toolbar__block');
  toolbarBlock3.append(
    buttonShowStats,
    buttonToggleSound,
    buttonToggleDarkMode,
  );

  toolbar.append(toolbarBlock1, toolbarBlock2, toolbarBlock3);
}

export { toolbar, renderToolbarComponents };
