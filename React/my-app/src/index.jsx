import React from "react";
import ReactDom from "react-dom/client";

const name = 'Mohit';
const root = ReactDom.createRoot(document.getElementById('root'));
const num = 5;
root.render(<>
    <h1>Hi I am Heading</h1>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
    <p>Hi {name} Your Lucky Number is {Math.floor(Math.random()*10+1)}</p>
</>
);