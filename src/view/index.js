import { toolbar } from './toolbar/toolbar';
import { minefield } from './minefiled/minefiled';
import { notification } from './notification/notification';
import { modal } from './modal/modal';
import './style.scss';

const APP_TITLE = 'Minesweeper';

const body = document.querySelector('body');

const minesweeper = document.createElement('div');
minesweeper.classList.add('minesweeper');

const title = document.createElement('h1');
title.classList.add('minesweeper__title');
title.innerHTML = APP_TITLE;

const toolbarContainer = document.createElement('div');
toolbarContainer.classList.add('minesweeper__toolbar');
toolbarContainer.append(toolbar);

const notificationContainer = document.createElement('div');
notificationContainer.classList.add('minesweeper__notification');
notificationContainer.append(notification);

const minefieldContainer = document.createElement('div');
minefieldContainer.classList.add('minesweeper__minefield');
minefieldContainer.append(minefield);

minesweeper.append(
  title,
  toolbarContainer,
  notificationContainer,
  minefieldContainer,
  modal,
);

function toggleDarkThemeClass() {
  body.classList.toggle('dark-mode');
}

function renderApp() {
  body.append(minesweeper);
}

export { toggleDarkThemeClass, renderApp };
