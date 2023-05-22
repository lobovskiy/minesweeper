class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    this.stop();
    this.milliseconds = 0;
  }

  start(callback) {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
      callback(this.milliseconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  set(milliseconds) {
    this.milliseconds = milliseconds;
  }
}

const timerService = new Timer();

export default timerService;
