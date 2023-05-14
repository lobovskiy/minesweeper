class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    this.stop();
    this.milliseconds = 0;
  }

  start(callbackRender) {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
      callbackRender(this.milliseconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

const gameTimer = new Timer();

export default gameTimer;
