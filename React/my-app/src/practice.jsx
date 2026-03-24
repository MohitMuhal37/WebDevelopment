import "../src/style.css";
import React from "react";
import ReactDom from "react-dom/client";
const name = 'Mohit';
const year = 2026

const root = ReactDom.createRoot(document.getElementById('root'));

const img = 'https://picsum.photos/200';

{color:"brown"}
root.render(<>
<h1  style={{color:"brown"}}>Hi i am heading</h1>
    <ul>
        <img src="../public/favicon.svg" alt="ko" />
        <img src={img+ '?grayscale'} alt="" />
    </ul>
</>
);