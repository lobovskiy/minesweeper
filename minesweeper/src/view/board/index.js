import { body } from '..';
import minesweeper from '../../services/game';
import gameTimer from '../../services/timer';
import './style.scss';

const board = document.createElement('div');
board.classList.add('gameboard');

const toolbarContainer = document.createElement('div');
toolbarContainer.classList.add('gameboard__toolbar');

const minefieldContainer = document.createElement('div');
minefieldContainer.classList.add('gameboard__minefield');

board.append(toolbarContainer, minefieldContainer);

const messageContainer = document.createElement('div');
messageContainer.classList.add('message');

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

function renderLoseMessage() {
  messageContainer.innerHTML = 'Game over. Try again';
  minefieldContainer.append(messageContainer);
}

function renderWinMessage() {
  messageContainer.innerHTML = `Hooray! You found all mines in ${
    gameTimer.milliseconds / 1000
  } seconds and ${minesweeper.moves} moves!`;
  minefieldContainer.append(messageContainer);
}

export {
  board,
  renderGameBoard,
  updateToolbarContainer,
  updateMinefieldContainer,
  renderLoseMessage,
  renderWinMessage,
};
