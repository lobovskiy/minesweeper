import renderButton from '../button/button';
import './style.scss';

function renderDropdown(selectorLabel, callbackSelectListItem, listItems = []) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  function toggleDropdown() {
    if (dropdown.hasAttribute('data-opened')) {
      dropdown.removeAttribute('data-opened');
    } else {
      dropdown.setAttribute('data-opened', '');
    }
  }

  const dropdownSelector = renderButton(selectorLabel, () => toggleDropdown());
  dropdownSelector.classList.add('dropdown__selector');

  const dropdownList = document.createElement('div');
  dropdownList.classList.add('dropdown__list');

  listItems.forEach((listItem) => {
    const item = document.createElement('div');
    item.classList.add('dropdown__list-item');
    item.innerHTML = listItem;
    item.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleDropdown();
      callbackSelectListItem(listItem);
    });

    dropdownList.append(item);
  });

  dropdownSelector.append(dropdownList);
  dropdown.append(dropdownSelector);

  return dropdown;
}

export default renderDropdown;
