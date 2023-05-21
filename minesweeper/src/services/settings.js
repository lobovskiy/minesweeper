import { DIFFICULTIES } from '../constants';

class Settings {
  constructor() {
    this.difficulty = DIFFICULTIES.beginner;
    this.sound = true;
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
}

const settingsService = new Settings();

export default settingsService;
