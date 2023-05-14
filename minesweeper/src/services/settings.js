import { DIFFICULTY, MINEFIELD_SIZE } from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTY.beginner;
    this.boardSize = MINEFIELD_SIZE[this.difficulty];
    this.sound = true;
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
