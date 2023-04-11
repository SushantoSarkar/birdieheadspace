const startButton = document.querySelector('.start-button');
const infoPage = document.querySelector('.info-page');
const craftButton = document.querySelector('.craft-button');

startButton.addEventListener('click', () => {
    startButton.parentElement.style.display = 'none';
    infoPage.style.display = 'block';
});

craftButton.addEventListener('click', () => {
    window.location.href = 'avatar-maker.html';
});
