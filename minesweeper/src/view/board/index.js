import { toolbar } from './toolbar';
import { minefield } from './minefield';
import './style.scss';

const board = document.createElement('div');
board.classList.add('gameboard');

board.append(toolbar, minefield);

export default board;
