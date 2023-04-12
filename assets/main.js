const startButton = document.querySelector('.start-button');
const craftButton = document.querySelector('.craft-button');
const landingPage = document.querySelector('.landing-page');
const infoPage = document.querySelector('.info-page');

startButton.addEventListener('click', () => {
  landingPage.style.display = 'none';
  infoPage.style.display = 'block';
});

craftButton.addEventListener('click', () => {
    window.location.href = 'avatar-maker.html';
});



function bodySwitch(selected_class) {
    document.getElementById('feather-one').style.display = 'none';
    document.getElementById('feather-two').style.display = 'none';
    document.getElementById('feather-three').style.display = 'none';
    document.getElementById('feather-four').style.display = 'none';
    document.getElementById('feather-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

