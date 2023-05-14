const toolbar = document.createElement('div');
toolbar.classList.add('toolbar');

const btnStartNewGame = document.createElement('button');
btnStartNewGame.classList.add('button');
btnStartNewGame.innerHTML = 'New game';
const btnSaveGame = document.createElement('button');
btnSaveGame.classList.add('button');
btnSaveGame.innerHTML = 'Save game';
const btnLoadSavedGame = document.createElement('button');
btnLoadSavedGame.classList.add('button');
btnLoadSavedGame.innerHTML = 'Load game';
const btnShowStats = document.createElement('button');
btnShowStats.classList.add('button');
btnShowStats.innerHTML = 'Show stats';
const btnToggleSound = document.createElement('button');
btnToggleSound.classList.add('button');
btnToggleSound.innerHTML = 'Sound';
const btnToggleColorTheme = document.createElement('button');
btnToggleColorTheme.classList.add('button');
btnToggleColorTheme.innerHTML = 'Color theme';

const timerContainer = document.createElement('div');
timerContainer.classList.add('timer');

toolbar.append(
  btnStartNewGame,
  btnSaveGame,
  btnLoadSavedGame,
  timerContainer,
  btnShowStats,
  btnToggleSound,
  btnToggleColorTheme,
);

function updateTimer(milliseconds) {
  const ISOStringMinutesStartIndex = 14;
  const ISOStringSecondsEndIndex = 18;
  const mmss = new Date(milliseconds)
    .toISOString()
    .slice(ISOStringMinutesStartIndex, ISOStringSecondsEndIndex + 1);

  timerContainer.innerHTML = mmss;
}

export { toolbar, updateTimer };
