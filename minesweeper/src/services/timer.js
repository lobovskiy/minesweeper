class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    this.milliseconds = 0;
  }

  start(callback) {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
    }, 1000);
    callback(this.milliseconds);
  }
}

const gameTimer = new Timer();

export default gameTimer;
