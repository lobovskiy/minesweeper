import minesweeperService from '../services/Minesweeper';
import settingsService from '../services/Settings';
import { updateButtonToggleSoundLabel } from '../view/toolbar/buttonToggleSound';
import mp3OpenCell from '../assets/sound/open-cell.mp3';
import mp3Win from '../assets/sound/win.mp3';
import mp3Lose from '../assets/sound/lose.mp3';
import mp3ToggleFlag from '../assets/sound/toggle-flag.mp3';

const soundOpenCell = new Audio(mp3OpenCell);
const soundWin = new Audio(mp3Win);
const soundLose = new Audio(mp3Lose);
const soundToggleFlag = new Audio(mp3ToggleFlag);

function toggleSound() {
  settingsService.toggleSound();
  updateButtonToggleSoundLabel();
}

function playSoundOpenCell() {
  if (settingsService.sound) {
    if (minesweeperService.isGameLost) {
      soundLose.pause();
      soundLose.play();
    } else if (minesweeperService.isGameFinished) {
      soundWin.pause();
      soundWin.play();
    } else {
      soundOpenCell.pause();
      soundOpenCell.play();
    }
  }
}

function playSoundToggleFlag() {
  if (settingsService.sound) {
    soundToggleFlag.pause();
    soundToggleFlag.play();
  }
}

export { toggleSound, playSoundOpenCell, playSoundToggleFlag };
