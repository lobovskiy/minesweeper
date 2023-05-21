import minesweeperService from '../../../services/Minesweeper';

const MOVES_LABEL = 'Moves: ';

const moves = document.createElement('div');
moves.classList.add('moves');

const movesLabel = document.createElement('div');
movesLabel.classList.add('moves__label');
movesLabel.innerHTML = MOVES_LABEL;

const movesNumber = document.createElement('div');
movesNumber.classList.add('moves__number');
movesNumber.innerHTML = minesweeperService.moves;

moves.append(movesLabel, movesNumber);

function updateMoves() {
  const movesAmount = minesweeperService.moves;

  movesNumber.innerHTML = movesAmount;
}

export { moves, updateMoves };
