const timer = document.createElement('div');
timer.classList.add('timer');

function refreshTimer(milliseconds) {
  timer.innerHTML = milliseconds;
}

export { timer, refreshTimer };
