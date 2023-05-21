import './style.scss';

function renderButton(label, handleClick) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerHTML = label;
  button.addEventListener('click', handleClick);

  return button;
}

export default renderButton;
