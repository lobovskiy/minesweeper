import settingsService from '../../services/Settings';
import { renderButton } from '../components';

const BUTTON_TOGGLE_DARK_MODE_LABELS = {
  light: 'Light',
  dark: 'Dark',
};

function getButtonToggleDarkModeLabel() {
  return settingsService.darkMode
    ? BUTTON_TOGGLE_DARK_MODE_LABELS.dark
    : BUTTON_TOGGLE_DARK_MODE_LABELS.light;
}

const buttonToggleDarkMode = renderButton(getButtonToggleDarkModeLabel());

function renderButtonToggleDarkMode(callbackToggleDarkMode) {
  buttonToggleDarkMode.addEventListener('click', () =>
    callbackToggleDarkMode(),
  );

  return buttonToggleDarkMode;
}

function updateButtonToggleDarkModeLabel() {
  buttonToggleDarkMode.innerHTML = getButtonToggleDarkModeLabel();
}

export { renderButtonToggleDarkMode, updateButtonToggleDarkModeLabel };
