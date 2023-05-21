const notification = document.createElement('div');
notification.classList.add('notification');

function refreshNotification(text) {
  notification.innerHTML = '';
  notification.innerHTML = text;
}

export { notification, refreshNotification };
