import minesweeperService from '../services/Minesweeper';
import { showModal } from '../view/modal/modal';
import renderStats from '../view/stats/stats';
import { getTimeInMilliseconds } from './timerController';

const STATS_RESULTS = {
  win: 'Win',
  lose: 'Lose',
};
const LS_KEY_STATS = 'stats';

function getStats() {
  return JSON.parse(localStorage.getItem(LS_KEY_STATS));
}

function addStats() {
  const statsObj = {
    dateTime: new Date(),
    seconds: getTimeInMilliseconds() / 1000,
    moves: minesweeperService.moves,
    result: minesweeperService.isGameLost
      ? STATS_RESULTS.lose
      : STATS_RESULTS.win,
  };

  const stats = getStats() || [];
  stats.push(statsObj);

  if (stats.length > 10) {
    stats.shift();
  }

  localStorage.setItem(LS_KEY_STATS, JSON.stringify(stats));
}

function showStats() {
  const stats = getStats();
  const statsTable = renderStats(stats);

  showModal(statsTable);
}

export { addStats, getStats, showStats, STATS_RESULTS };
