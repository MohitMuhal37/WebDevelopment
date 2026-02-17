function onClick(){
    const audio  = new Audio("Assets/sounds/crash.mp3");
    audio.play();
    console.log(this);
}

// if we want ot select all queryy with same name we must use a foreacch loop for traversing all of them and we must use className with .
const btn = document.querySelectorAll(".drum");

btn.forEach((item) => {
    item.addEventListener('click', onClick);
})
