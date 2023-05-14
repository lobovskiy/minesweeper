class Timer {
  constructor() {
    this.milliseconds = 0;
    this.interval = undefined;
  }

  reset(callbackRender) {
    clearInterval(this.interval);
    this.milliseconds = 0;
    callbackRender(this.milliseconds);
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
