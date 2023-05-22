import { DIFFICULTIES } from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTIES.beginner;
    this.sound = true;
    this.darkMode = false;
  }

  getDifficulty() {
    return this.difficulty;
  }

  setDifficulty(value) {
    this.difficulty = value;
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
