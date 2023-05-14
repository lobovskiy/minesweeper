import { body } from '..';
import './style.scss';

const board = document.createElement('div');
board.classList.add('gameboard');

const toolbarContainer = document.createElement('div');
toolbarContainer.classList.add('gameboard__toolbar');

const minefieldContainer = document.createElement('div');
minefieldContainer.classList.add('gameboard__minefield');

board.append(toolbarContainer, minefieldContainer);

function renderGameBoard() {
  body.append(board);
}

function updateToolbarContainer(element) {
  toolbarContainer.innerHTML = '';
  toolbarContainer.append(element);
}

function updateMinefieldContainer(element) {
  minefieldContainer.innerHTML = '';
  minefieldContainer.append(element);
}

export {
  board,
  renderGameBoard,
  updateToolbarContainer,
  updateMinefieldContainer,
};
