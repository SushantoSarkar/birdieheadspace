const startButton = document.querySelector('.start-button');
const craftButton = document.querySelector('.craft-button');
const landingPage = document.querySelector('.landing-page');
const infoPage = document.querySelector('.info-page');

if (infoPage) {
    infoPage.style.display = 'none';
}

startButton.addEventListener('click', () => {
  landingPage.style.display = 'none';
  infoPage.style.display = 'block';
});

craftButton.addEventListener('click', () => {
    window.location.href = 'avatar-maker.html';
});
