import React from "react";
import ReactDom from "react-dom/client";
import Time from "./Time";
import Pi, {double}from "./math";

const root =  ReactDom.createRoot(document.getElementById('root'));

root.render(<>
<h1>Hi</h1>
<li>{Pi}</li>
<li>{double()}</li>
<Time />
</>)