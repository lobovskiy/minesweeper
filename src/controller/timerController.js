import timerService from '../services/Timer';
import { refreshTimer } from '../view/timer/timer';
import { formatTime } from '../utils.js';

function updateTimer() {
  const { milliseconds } = timerService;
  const millisecondsFormatted = formatTime(milliseconds);

  refreshTimer(millisecondsFormatted);
}

function getTimeInMilliseconds() {
  return timerService.milliseconds;
}

function startTimer() {
  timerService.start(() => updateTimer());
}

function stopTimer() {
  timerService.stop();
  updateTimer();
}

function setTimer(milliseconds) {
  timerService.set(milliseconds);
  updateTimer();
}

function resetTimer() {
  timerService.reset();
  updateTimer();
}

export { getTimeInMilliseconds, startTimer, stopTimer, setTimer, resetTimer };
