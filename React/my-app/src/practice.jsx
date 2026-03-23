import React from "react";
import ReactDom from "react-dom/client";
const name = 'Mohit';
const year = 2026

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<>
    <p>Created By {name}</p>
    <p>Copyright {year}</p>
</>
);