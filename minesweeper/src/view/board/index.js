import { getToolbar } from './toolbar';

const board = document.createElement('div');
board.classList.add('gameboard');

const toolbar = getToolbar();

board.append(toolbar);

function getBoard() {
  return board;
}

function renderBoard(container) {
  container.append(board);
}

export { getBoard, renderBoard };
