function onClick(){
  changeAudio();
}
function changeAudio() {
    const btnInner = this.innerHTML; 

    switch(btnInner){
    case 'w' :
    var audio  = new Audio("Assets/sounds/crash.mp3");
    audio.play();
    break;
    
    case 'a' :
    var audio  = new Audio("Assets/sounds/tom-1.mp3");
    audio.play();
    break;

    case 's':
    var audio = new Audio("Assets/sounds/snare.mp3");
    audio.play();
    break;

    case 'd':
    var audio = new Audio("Assets/sounds/tom-3.mp3");
    audio.play();
    break;

    case 'j':
    var audio = new Audio("Assets/sounds/tom-4.mp3");
    audio.play();
    break;

    case 'k':
    var audio = new Audio("Assets/sounds/tom-2.mp3");
    audio.play();
    break;

    case 'l':
    var kick = new Audio("Assets/sounds/Aadat.mp3");
    kick.play();
    break;
    }
}

// if we want ot select all queryy with same name we must use a foreacch loop for traversing all of them and we must use className with .
const btn = document.querySelectorAll(".drum");

btn.forEach((item) => {
    item.addEventListener('click', onClick);
})
