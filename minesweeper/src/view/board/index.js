import { body } from '..';
import minesweeper from '../../services/game';
import gameTimer from '../../services/timer';
import { formatDateTimeOnlyString } from '../../utils.js';
import './style.scss';

const board = document.createElement('div');
board.classList.add('gameboard');

const toolbarContainer = document.createElement('div');
toolbarContainer.classList.add('gameboard__toolbar');

const minefieldContainer = document.createElement('div');
minefieldContainer.classList.add('gameboard__minefield');

board.append(toolbarContainer, minefieldContainer);

const modal = document.createElement('div');
modal.classList.add('modal', 'hidden');
modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');
modal.append(modalContent);

const messageContainer = document.createElement('div');
messageContainer.classList.add('message');

function renderGameBoard() {
  body.append(board, modal);
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

function showModal() {
  const stats = JSON.parse(localStorage.getItem('stats'));

  if (
    !stats ||
    !Array.isArray(stats) ||
    (Array.isArray(stats) && !stats.length)
  ) {
    modalContent.innerHTML = 'There is not any stats yet!';
  } else {
    modalContent.innerHTML = '';

    stats.reverse();

    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats');
    statsContainer.innerHTML = `
      <div>Date and time</div>
      <div>Result</div>
      <div>Seconds</div>
      <div>Moves</div>
    `;

    stats.forEach((stat) => {
      const dateTimeContainer = document.createElement('div');
      dateTimeContainer.innerHTML = formatDateTimeOnlyString(stat.dateTime);
      const resultContainer = document.createElement('div');
      resultContainer.innerHTML = stat.result;
      const secondsContainer = document.createElement('div');
      secondsContainer.innerHTML = stat.seconds;
      const movesContainer = document.createElement('div');
      movesContainer.innerHTML = stat.moves;

      statsContainer.append(
        dateTimeContainer,
        resultContainer,
        secondsContainer,
        movesContainer,
      );
    });

    modalContent.append(statsContainer);
  }
  modal.classList.remove('hidden');
}

export {
  board,
  renderGameBoard,
  updateToolbarContainer,
  updateMinefieldContainer,
  renderLoseMessage,
  renderWinMessage,
  showModal,
};
