import settingsService from '../services/Settings';
import { toggleDarkThemeClass } from '../view';
import { updateButtonToggleDarkModeLabel } from '../view/toolbar/buttonToggleDarkMode';

function toggleDarkMode() {
  settingsService.toggleDarkMode();
  toggleDarkThemeClass();
  updateButtonToggleDarkModeLabel();
}

export default toggleDarkMode;
