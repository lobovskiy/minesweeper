import { renderBoard } from './board';

function renderApp() {
  const body = document.querySelector('body');
  renderBoard(body);
}

export default renderApp;
