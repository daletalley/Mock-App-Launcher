document.querySelectorAll('.app-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const url = icon.getAttribute('data-url');
    if (url) window.open(url, '_blank');
  });
});
