const modal = document.createElement('div');
modal.classList.add('modal', 'hidden');
modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');
modal.append(modalContent);

function showModal(component) {
  modalContent.innerHTML = '';
  modalContent.append(component);
  modal.classList.remove('hidden');
}

export { modal, showModal };
