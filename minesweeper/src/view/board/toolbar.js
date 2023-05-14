const toolbar = document.createElement('div');
toolbar.classList.add('toolbar');

const btnStartNewGame = document.createElement('button');
btnStartNewGame.classList.add('toolbar');
const btnSaveGame = document.createElement('button');
btnSaveGame.classList.add('button');
const btnLoadSavedGame = document.createElement('button');
btnLoadSavedGame.classList.add('button');
const btnShowStats = document.createElement('button');
btnShowStats.classList.add('button');
const btnToggleSound = document.createElement('button');
btnToggleSound.classList.add('button');
const btnToggleColorTheme = document.createElement('button');
btnToggleColorTheme.classList.add('button');

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
