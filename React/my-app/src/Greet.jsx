import React from "react";

const coustomStyle = {
    color : ''
}
const date = new Date();
const currtime = date.getHours();
let greet;

function Greet(){
if(currtime < 12){
    greet = 'Good Morning'
    coustomStyle.color = 'red';
}else if(currtime < 18){
    greet = 'Good After Noon'
    coustomStyle.color = 'Purple';
}else{
    greet = 'Good Night'
    coustomStyle.color = 'Pink';
}

return <h1 style={coustomStyle}>{greet}</h1>
}

export default Greet;