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

const reloadIframe = () => {
  try {
    const url = new URL(iframe.src);
    url.searchParams.set('__refresh__', String(Date.now()));
    iframe.src = url.toString();
  } catch {
    iframe.src = `${iframe.src}${iframe.src.includes('?') ? '&' : '?'}__refresh__=${Date.now()}`;
  }
};

enterBtn.addEventListener('click', openChat);
reloadBtn.addEventListener('click', reloadIframe);
