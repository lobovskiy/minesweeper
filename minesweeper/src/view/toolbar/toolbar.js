import { renderButton, renderDropdown } from '../components';
import { timer } from '../timer/timer';
import { moves } from './moves/moves';
import { renderButtonToggleSound } from './buttonToggleSound';
import { DIFFICULTIES } from '../../constants';

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
    toggleDarkThemeClass,
  } = callbacks;

  const dropdownNewGame = renderDropdown(
    LABELS.selectorNewGame,
    (item) => startNewGame(item),
    Object.values(DIFFICULTIES),
  );
  const buttonSaveGame = renderButton(LABELS.buttonSaveGame, () => saveGame());
  const buttonLoadGame = renderButton(LABELS.buttonLoadGame, () => loadGame());
  const buttonShowStats = renderButton(LABELS.buttonShowStats, () =>
    showStats(),
  );
  const buttonToggleSound = renderButtonToggleSound(toggleSound);
  const buttonToggleColorTheme = renderButton(
    LABELS.buttonToggleColorTheme,
    () => toggleDarkThemeClass(),
  );

  const timerContainer = document.createElement('div');
  timerContainer.classList.add('toolbar__timer');
  timerContainer.append(timer);

  const movesContainer = document.createElement('div');
  movesContainer.classList.add('toolbar__moves');
  movesContainer.append(moves);

  toolbar.append(
    dropdownNewGame,
    buttonSaveGame,
    buttonLoadGame,
    timerContainer,
    movesContainer,
    buttonShowStats,
    buttonToggleSound,
    buttonToggleColorTheme,
  );
}

export { toolbar, renderToolbarComponents };
