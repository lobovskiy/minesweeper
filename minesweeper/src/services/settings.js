import {
  SCREEN_SIZES,
  SCREEN_SIZES_MIN_WIDTHS,
  SCREEN_SIZES_ASCENDING,
  DIFFICULTY,
  MINEFIELD_SIZE_BY_DIFFICULTY,
} from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTY.beginner;
    this.boardSize = MINEFIELD_SIZE_BY_DIFFICULTY[this.difficulty];
    this.sound = true;
    this.screenSize = undefined;

    this.initScreenSize();
  }

  initScreenSize() {
    const windowWidth = window.innerWidth;
    let screenSize = SCREEN_SIZES.mobile;

    SCREEN_SIZES_ASCENDING.forEach((size) => {
      if (windowWidth > SCREEN_SIZES_MIN_WIDTHS[size]) {
        screenSize = size;
      }
    });

    this.screenSize = screenSize;
  }

  setDifficulty(value) {
    this.difficulty = value;
  }

  setSound(value) {
    this.sound = value;
  }
}

const gameSettings = new Settings();

export default gameSettings;
