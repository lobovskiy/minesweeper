import { NUMBER_OF_MINES } from '../../../constants';
import './style.scss';

const NUMBER_OF_MINES_ID = 'number-of-mines';

const numberOfMines = document.createElement('div');
numberOfMines.classList.add('number-of-mines');

const labelNumberOfMines = document.createElement('label');
labelNumberOfMines.setAttribute('for', NUMBER_OF_MINES_ID);
labelNumberOfMines.innerHTML = 'Mines (10-99)';

const inputNumberOfMines = document.createElement('input');
inputNumberOfMines.id = NUMBER_OF_MINES_ID;
inputNumberOfMines.type = 'number';
inputNumberOfMines.min = NUMBER_OF_MINES.min;
inputNumberOfMines.max = NUMBER_OF_MINES.max;
inputNumberOfMines.value = NUMBER_OF_MINES.min;

function handleInputMinesAmountChange(event) {
  const { value } = event.target;

  if (value < NUMBER_OF_MINES.min) {
    inputNumberOfMines.value = NUMBER_OF_MINES.min;
  }

  if (value > NUMBER_OF_MINES.max) {
    inputNumberOfMines.value = NUMBER_OF_MINES.max;
  }
}

inputNumberOfMines.addEventListener('change', handleInputMinesAmountChange);

numberOfMines.append(labelNumberOfMines, inputNumberOfMines);

function getInputNumberOfMinesValue() {
  return Number(inputNumberOfMines.value);
}

function setInputNumberOfMinesValue(value) {
  if (value < NUMBER_OF_MINES.min) {
    inputNumberOfMines.value = NUMBER_OF_MINES.min;
  }

  if (value > NUMBER_OF_MINES.max) {
    inputNumberOfMines.value = NUMBER_OF_MINES.max;
  }

  inputNumberOfMines.value = value;
}

function disableInputNumberOfMines() {
  inputNumberOfMines.setAttribute('disabled', '');
}

function enableInputNumberOfMines() {
  inputNumberOfMines.removeAttribute('disabled');
}

export {
  numberOfMines,
  getInputNumberOfMinesValue,
  setInputNumberOfMinesValue,
  disableInputNumberOfMines,
  enableInputNumberOfMines,
};
