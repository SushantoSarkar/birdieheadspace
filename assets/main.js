const startButton = document.querySelector('.start-button');
const craftButton = document.querySelector('.craft-button');
const landingPage = document.querySelector('.landing-page');
const infoPage = document.querySelector('.info-page');

startButton.addEventListener('click', () => {
  landingPage.style.display = 'none';
  infoPage.style.display = 'block';
});

craftButton.addEventListener('click', () => {
  infoPage.style.display = 'none';
  avatarPage.style.display = 'block';
});
