const body = document.querySelector('body');

function toggleDarkThemeClass() {
  body.classList.toggle('dark-mode');
}

export { body, toggleDarkThemeClass };
