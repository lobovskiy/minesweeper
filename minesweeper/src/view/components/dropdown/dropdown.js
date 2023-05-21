import './style.scss';

function renderDropdown(selectorLabel, callbackSelectListItem, listItems = []) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const dropdownSelector = document.createElement('button');
  dropdownSelector.classList.add('dropdown__selector');
  dropdownSelector.innerHTML = selectorLabel;

  const dropdownList = document.createElement('div');
  dropdownList.classList.add('dropdown__list');
  listItems.forEach((listItem) => {
    const item = document.createElement('div');
    item.innerHTML = listItem;
    item.addEventListener('click', () => {
      dropdownList.classList.toggle('hidden');
      callbackSelectListItem(listItem);
    });

    dropdownList.append(listItem);
  });

  function handleClickDropdownSelector() {
    if (dropdownList.hasAttribute('data-visible')) {
      dropdownList.removeAttribute('data-visible');
    } else {
      dropdownList.setAttribute('data-visible', '');
    }
  }

  dropdownSelector.addEventListener('click', handleClickDropdownSelector);

  dropdown.append(dropdownSelector, dropdownList);
}

export default renderDropdown;
