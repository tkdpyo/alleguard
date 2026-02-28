const introScreen = document.getElementById('introScreen');
const enterBtn = document.getElementById('enterBtn');
const chatScreen = document.getElementById('chatScreen');
const iframe = document.getElementById('copilotFrame');
const reloadBtn = document.getElementById('reloadBtn');

const openChat = () => {
  introScreen.classList.add('intro-leaving');

  window.setTimeout(() => {
    introScreen.classList.add('hidden');
    chatScreen.classList.remove('hidden');
    chatScreen.setAttribute('aria-hidden', 'false');
  }, 450);
};

enterBtn.addEventListener('click', openChat);

reloadBtn.addEventListener('click', () => {
  iframe.src = iframe.src;
});
