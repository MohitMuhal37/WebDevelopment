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
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Aatif':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Jagjit':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Sonu':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Nursat':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Md.Imran':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
            currentAudio.play();
            break;

            case 'Amrinder':
            currentAudio  = new Audio('Assets/sounds/Aadat.mp3');
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