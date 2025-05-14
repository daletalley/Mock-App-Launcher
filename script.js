document.querySelectorAll('.app-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const url = icon.getAttribute('data-url');
    if (url) window.open(url, '_blank');
  });
});

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
  document.querySelector('.time').textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);
