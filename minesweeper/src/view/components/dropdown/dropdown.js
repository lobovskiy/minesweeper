import './style.scss';

function renderDropdown(selectorLabel, callbackSelectListItem, listItems = []) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const dropdownSelector = document.createElement('button');
  dropdownSelector.classList.add('dropdown__selector');
  dropdownSelector.innerHTML = selectorLabel;

  const dropdownList = document.createElement('div');
  dropdownList.classList.add('dropdown__list');

  function toggleDropdownListVisibility() {
    if (dropdownList.hasAttribute('data-visible')) {
      dropdownList.removeAttribute('data-visible');
    } else {
      dropdownList.setAttribute('data-visible', '');
    }
  }

  listItems.forEach((listItem) => {
    const item = document.createElement('div');
    item.innerHTML = listItem;
    item.addEventListener('click', () => {
      toggleDropdownListVisibility();
      callbackSelectListItem(listItem);
    });

    dropdownList.append(item);
  });

  dropdownSelector.addEventListener('click', () =>
    toggleDropdownListVisibility(),
  );

  dropdown.append(dropdownSelector, dropdownList);

  return dropdown;
}

export default renderDropdown;
