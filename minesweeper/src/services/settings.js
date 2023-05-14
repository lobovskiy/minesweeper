import { DIFFICULTY, MINE_FIELD_SIZE } from '../data/settings';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTY.beginner;
    this.boardSize = MINE_FIELD_SIZE[this.difficulty];
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
