class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset() {
    clearInterval(this.interval);
    this.milliseconds = 0;
  }

  start(callbackRender) {
    this.interval = setInterval(() => {
      this.milliseconds += 1000;
      callbackRender(this.milliseconds);
    }, 1000);
  }
}

const gameTimer = new Timer();

export default gameTimer;
