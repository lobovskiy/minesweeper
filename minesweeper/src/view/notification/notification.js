const notification = document.createElement('div');
notification.classList.add('notification');
import './style.scss';

function clearNotification() {
  notification.innerHTML = '';
}

function refreshNotification(text) {
  clearNotification();
  notification.innerHTML = text;
}

export { notification, clearNotification, refreshNotification };
