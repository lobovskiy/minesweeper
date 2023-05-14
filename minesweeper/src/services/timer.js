class Timer {
  constructor() {
    this.milliseconds = 0;
  }

  reset() {
    this.milliseconds = 0;
  }
}

const gameTimer = new Timer();

export default gameTimer;
