import { initGame } from './controller';
import renderApp from './view';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  initGame();
  renderApp();
});
