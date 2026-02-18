let currentAudio = 0;

function  onClick  () {
     const btnInner = this.innerHTML; 
     soundChecker(btnInner);
     applyAnimation(btnInner);
    //  stopAudio(btnInner);
}

function soundChecker (key) {
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch(key){
    case 'w' :
     currentAudio  = new Audio("Assets/sounds/crash.mp3");
    currentAudio.play();
    break;
    
    case 'a' :
     currentAudio  = new Audio("Assets/sounds/tom-1.mp3");
    currentAudio.play();
    break;

    case 's':
     currentAudio = new Audio("Assets/sounds/snare.mp3");
    currentAudio.play();
    break;

    case 'd':
     currentAudio = new Audio("Assets/sounds/tom-3.mp3");
    currentAudio.play();
    break;

    case 'j':
     currentAudio = new Audio("Assets/sounds/tom-4.mp3");
    currentAudio.play();
    break;

    case 'k':
     currentAudio = new Audio("Assets/sounds/tom-2.mp3");
    currentAudio.play();
    break;

    case 'l':
     currentAudio = new Audio("Assets/sounds/Aadat.mp3");
    currentAudio.play();
    break;
    }

    // currentAudio.play();
}

const pressed = (event) =>{
    soundChecker(event.key);
    applyAnimation(event.key);
    // stopAudio(event.key);
}

// apple annimation on buttons
function applyAnimation(keyEvent){
    const activeButton = document.querySelector('.'+ keyEvent);
    activeButton.classList.add('pressed');
    setTimeout(() => { activeButton.classList.remove('pressed'), 1000 })
}

// if we want ot select all queryy with same name we must use a foreacch loop for traversing all of them and we must use className with .
const btn = document.querySelectorAll(".drum");
document.addEventListener("keypress", pressed);

btn.forEach((item) => {
    item.addEventListener('click', onClick);
    // item.addEventListener('click', stopAudio);
})
