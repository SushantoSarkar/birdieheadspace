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

function bodyOne() {
    document.getElementById('feather-one').style.display = 'block';
    document.getElementById('feather-two').style.display = 'none';
    document.getElementById('feather-three').style.display = 'none';
    document.getElementById('feather-four').style.display = 'none';
    document.getElementById('feather-five').style.display = 'none';
}