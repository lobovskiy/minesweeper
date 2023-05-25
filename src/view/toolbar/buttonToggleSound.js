import settingsService from '../../services/Settings';
import { renderButton } from '../components';

const BUTTON_TOGGLE_SOUND_LABELS = {
  on: 'Sound on',
  off: 'Sound off',
};

function getButtonToggleSoundLabel() {
  return settingsService.sound
    ? BUTTON_TOGGLE_SOUND_LABELS.on
    : BUTTON_TOGGLE_SOUND_LABELS.off;
}

const buttonToggleSound = renderButton(getButtonToggleSoundLabel());

function renderButtonToggleSound(callbackToggleSound) {
  buttonToggleSound.addEventListener('click', () => callbackToggleSound());

  return buttonToggleSound;
}

function updateButtonToggleSoundLabel() {
  buttonToggleSound.innerHTML = getButtonToggleSoundLabel();
}

export { renderButtonToggleSound, updateButtonToggleSoundLabel };
