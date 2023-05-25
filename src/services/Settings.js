import { DIFFICULTIES, NUMBER_OF_MINES } from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTIES.beginner;
    this.sound = true;
    this.darkMode = false;
    this.numberOfMines = NUMBER_OF_MINES.min;
  }

  getDifficulty() {
    return this.difficulty;
  }

  setDifficulty(value) {
    this.difficulty = value;
  }

  setNumberOfMines(value) {
    this.numberOfMines = value;
  }

  toggleSound() {
    this.sound = !this.sound;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

const settingsService = new Settings();

export default settingsService;
