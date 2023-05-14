import board from './board';

function renderApp() {
  const body = document.querySelector('body');
  body.append(board);
}

export default renderApp;
