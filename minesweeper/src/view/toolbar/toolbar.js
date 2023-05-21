import { renderButton, renderDropdown } from '../components';
import { timer } from '../timer/timer';
import { DIFFICULTIES } from '../../constants';
import { renderButtonToggleSound } from './buttonToggleSound';

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

  toolbar.append(
    dropdownNewGame,
    buttonSaveGame,
    buttonLoadGame,
    timerContainer,
    buttonShowStats,
    buttonToggleSound,
    buttonToggleColorTheme,
  );
}

export { toolbar, renderToolbarComponents };
