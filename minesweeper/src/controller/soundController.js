import settingsService from '../services/Settings';
import { updateButtonToggleSoundLabel } from '../view/toolbar/buttonToggleSound';

function toggleSound() {
  settingsService.toggleSound();
  updateButtonToggleSoundLabel();
}

export default toggleSound;
