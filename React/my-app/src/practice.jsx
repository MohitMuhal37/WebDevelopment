import "../src/style.css";
import React from "react";
import ReactDom from "react-dom/client";
const name = 'Mohit';
const year = 2026

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<>
<h1 className="heading">Hi i am heading</h1>
    <ul>
        <li>item 1</li>
        <li>tem 2</li>
        <li>item 3</li>
    </ul>
</>
);