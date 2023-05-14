import { initNewGame } from './controller';
import { renderGameBoard } from './view/board';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderGameBoard();
  initNewGame();
});
