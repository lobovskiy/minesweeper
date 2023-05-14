import { DIFFICULTIES } from '../../constants';

const dropdownNewGame = document.createElement('div');
dropdownNewGame.classList.add('dropdown');

const dropdownNewGameList = document.createElement('div');
dropdownNewGameList.classList.add(
  'dropdown__list',
  'list-difficulties',
  'hidden',
);

function renderDropdownNewGameList(callback) {
  Object.values(DIFFICULTIES).forEach((difficulty) => {
    const listItem = document.createElement('div');
    listItem.classList.add('difficulties-list');
    listItem.innerHTML = difficulty;
    listItem.addEventListener('click', () => {
      dropdownNewGameList.classList.toggle('hidden');
      callback(difficulty);
    });

    dropdownNewGameList.append(listItem);
  });
}

function toggleDropdownNewGameListVisibility() {
  dropdownNewGameList.classList.toggle('hidden');
}

const dropdownNewGameSelector = document.createElement('button');
dropdownNewGameSelector.classList.add('dropdown__selector');
dropdownNewGameSelector.innerHTML = 'New game';
dropdownNewGameSelector.addEventListener('click', () =>
  toggleDropdownNewGameListVisibility(),
);

dropdownNewGame.append(dropdownNewGameSelector, dropdownNewGameList);

export default dropdownNewGame;
export { renderDropdownNewGameList };
