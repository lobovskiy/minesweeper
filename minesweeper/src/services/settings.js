import { DIFFICULTIES, MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTIES.beginner;
    this.boardSize = MINEFIELD_SETTINGS_BY_DIFFICULTY[this.difficulty];
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
