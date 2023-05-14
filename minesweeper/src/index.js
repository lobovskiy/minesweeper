import { initNewGame } from './controller';
import renderApp from './view';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initNewGame();
});
