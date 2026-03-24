import "../src/style.css";
import React from "react";
import ReactDom from "react-dom/client";

const coustomStyle = {
    color : ''
}

const root = ReactDom.createRoot(document.getElementById('root'));

const date = new Date();
const currtime = date.getHours();
let greet;
if(currtime < 12){
    greet = 'Good Morning';
    coustomStyle.color = 'red';
}else if(currtime < 18){
    greet = 'Good After Noon'
    coustomStyle.color = 'Purple';
}else{
    greet = 'Good Night';
    coustomStyle.color = 'Pink';
}
root.render(<>
<h1 style={coustomStyle}>{greet}</h1>
</>)