import { formatDateTime } from '../../utils.js';
import './style.scss';

const statsContainer = document.createElement('div');
statsContainer.classList.add('stats');

function renderEmptyStats() {
  statsContainer.innerHTML = 'There is not any stats yet!';
}

function getStatsTable() {
  const statsTable = document.createElement('div');
  statsTable.classList.add('stats__table');
  statsTable.innerHTML = `
    <div>#</div>
    <div>Date and time</div>
    <div>Difficulty</div>
    <div>Result</div>
    <div>Seconds</div>
    <div>Moves</div>
  `;

  return statsTable;
}

function renderStats(stats) {
  if (
    !stats ||
    !Array.isArray(stats) ||
    (Array.isArray(stats) && !stats.length)
  ) {
    renderEmptyStats();
  } else {
    statsContainer.innerHTML = '';
    const table = getStatsTable();

    stats.reverse();
    stats.forEach((stat, index) => {
      const numberContainer = document.createElement('div');
      numberContainer.innerHTML = index + 1;
      const dateTimeContainer = document.createElement('div');
      dateTimeContainer.innerHTML = formatDateTime(stat.dateTime);
      const difficultyContainer = document.createElement('div');
      difficultyContainer.innerHTML = stat.difficulty;
      const resultContainer = document.createElement('div');
      resultContainer.innerHTML = stat.result;
      const secondsContainer = document.createElement('div');
      secondsContainer.innerHTML = stat.seconds;
      const movesContainer = document.createElement('div');
      movesContainer.innerHTML = stat.moves;

      table.append(
        numberContainer,
        dateTimeContainer,
        difficultyContainer,
        resultContainer,
        secondsContainer,
        movesContainer,
      );
      statsContainer.append(table);
    });
  }

  return statsContainer;
}

export default renderStats;
