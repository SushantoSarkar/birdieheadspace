//   document.querySelector('.feather-board').style.display = 'none';

function reset() {
    document.querySelectorAll('.tab').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('.birdie-part').forEach(element => {
        element.style.display = 'none';
    });
}

function displayOptions(option_name) {
    console.log('click', document.querySelector(option_name))
    reset()
    document.querySelector(option_name).style.display = 'block';
}

function bodyFeatherSwitch(selected_class) {
    document.getElementById('feather-one').style.display = 'none';
    document.getElementById('feather-two').style.display = 'none';
    document.getElementById('feather-three').style.display = 'none';
    document.getElementById('feather-four').style.display = 'none';
    document.getElementById('feather-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
    document.getElementById(selected_class).classList.remove('birdie-part')
}

function bodyBaseSwitch(selected_class) {
    document.getElementById('base-one').style.display = 'none';
    document.getElementById('base-two').style.display = 'none';
    document.getElementById('base-three').style.display = 'none';
    document.getElementById('base-four').style.display = 'none';
    document.getElementById('base-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

function bodyFaceSwitch(selected_class) {
    document.getElementById('face-one').style.display = 'none';
    document.getElementById('face-two').style.display = 'none';
    document.getElementById('face-three').style.display = 'none';
    document.getElementById('face-four').style.display = 'none';
    document.getElementById('face-five').style.display = 'none';
    document.getElementById('face-six').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

function bodyHandsSwitch(selected_class) {
    document.getElementById('hands-one').style.display = 'none';
    document.getElementById('hands-two').style.display = 'none';
    document.getElementById('hands-three').style.display = 'none';
    document.getElementById('hands-four').style.display = 'none';
    document.getElementById('hands-five').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}

function bodyLegsSwitch(selected_class) {
    document.getElementById('legs-one').style.display = 'none';
    document.getElementById('legs-two').style.display = 'none';
    document.getElementById('legs-three').style.display = 'none';
    document.getElementById('legs-four').style.display = 'none';
    document.getElementById(selected_class).style.display = 'block';
}