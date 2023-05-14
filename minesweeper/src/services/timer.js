import { updateTimer } from '../view/board/toolbar';

class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    this.milliseconds = 0;
    updateTimer(this.milliseconds);
  }

  start() {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
      updateTimer(this.milliseconds);
    }, 1000);
  }
}

const gameTimer = new Timer();

export default gameTimer;
