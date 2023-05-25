import './style.scss';

const notification = document.createElement('div');
notification.classList.add('notification');

function clearNotification() {
  notification.innerHTML = '';
}

function refreshNotification(text) {
  clearNotification();
  notification.innerHTML = text;
}

export { notification, clearNotification, refreshNotification };
