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



function bodyFeatherSwitch(selected_class) {
    document.getElementById('feather-one').style.display = 'none';
    document.getElementById('feather-two').style.display = 'none';
    document.getElementById('feather-three').style.display = 'none';
    document.getElementById('feather-four').style.display = 'none';
    document.getElementById('feather-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

function bodyBaseSwitch(selected_class) {
    document.getElementById('base-one').style.display = 'none';
    document.getElementById('base-two').style.display = 'none';
    document.getElementById('base-three').style.display = 'none';
    document.getElementById('base-four').style.display = 'none';
    document.getElementById('base-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

// function bodySwitch(selected_class) {
//     document.getElementById('base-one').style.display = 'none';
//     document.getElementById('base-two').style.display = 'none';
//     document.getElementById('base-three').style.display = 'none';
//     document.getElementById('base-four').style.display = 'none';
//     document.getElementById('base-five').style.display = 'none';
//     document.getElementById(selected_class).style.display = 'block';
// }

// function bodySwitch(selected_class) {
//     document.getElementById('hands-one').style.display = 'none';
//     document.getElementById('hands-two').style.display = 'none';
//     document.getElementById('hands-three').style.display = 'none';
//     document.getElementById('hands-four').style.display = 'none';
//     document.getElementById('hands-five').style.display = 'none';
//     document.getElementById(selected_class).style.display = 'block';
// }

// function bodySwitch(selected_class) {
//     document.getElementById('legs-one').style.display = 'none';
//     document.getElementById('legs-two').style.display = 'none';
//     document.getElementById('legs-three').style.display = 'none';
//     document.getElementById('legs-four').style.display = 'none';
//     document.getElementById('legs-five').style.display = 'none';
//     document.getElementById(selected_class).style.display = 'block';
// }