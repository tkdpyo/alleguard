const iframe = document.getElementById('copilotFrame');
const reloadBtn = document.getElementById('reloadBtn');

reloadBtn.addEventListener('click', () => {
  iframe.src = iframe.src;
});
