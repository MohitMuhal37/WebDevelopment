let currentAudio = 0;
function playMusic (){
    const innerbutton = this.innerHTML;
    addSound(innerbutton);
}

function addSound(key){

    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch (key){
            case 'KK':
            currentAudio  = new Audio('Assets/sounds/TeriYadoon.mp3');
            currentAudio.play();
            break;

            case 'Aatif':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Jagjit':
            currentAudio  = new Audio('Assets/sounds/Fariyad.mp3');
            currentAudio.play();
            break;

            case 'Sonu':
            currentAudio  = new Audio('Assets/sounds/Kahon.mp3');
            currentAudio.play();
            break;

            case 'Nusrat':
            currentAudio  = new Audio('Assets/sounds/Dekhte.mp3');
            currentAudio.play();
            break;

            case 'Md.Irfan':
            currentAudio  = new Audio('Assets/sounds/Dil.mp3');
            currentAudio.play();
            break;

            case 'Amrinder':
            currentAudio  = new Audio('Assets/sounds/Dildari.mp3');
            currentAudio.play();
            break;
    }
}

function btnCheck(currentEvent){
    const activateBtn = document.querySelector('.'+currentEvent);
    activateBtn.classList.add('pressed');
    setTimeout(activateBtn.classList.remove(),1000);
}

const musicBtn = document.querySelectorAll('.music');
musicBtn.forEach((item) => { item.addEventListener('click',playMusic) });