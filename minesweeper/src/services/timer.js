import { updateTimer } from '../view/board/toolbar';

class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    this.milliseconds = 0;
    this.render();
  }

  start() {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
      this.render();
    }, 1000);
  }

  render() {
    updateTimer(this.milliseconds);
  }
}

const gameTimer = new Timer();

export default gameTimer;
