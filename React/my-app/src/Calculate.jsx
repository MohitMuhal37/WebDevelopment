import React from "react";
function Calculate(){
    return <h1>Calculation file</h1>
};

function add(a, b){
    return a+b;
};

function sub(a, b){
    return a-b;
};

function mul(a, b){
    return a*b;
};

export default Calculate;
export {sub, mul, add}