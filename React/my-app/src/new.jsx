import React from "react";
import ReactDom from "react-dom/client";
import Time from "./Time";
import Pi, {double}from "./math";
import * as calc from "./Calculate";

const root =  ReactDom.createRoot(document.getElementById('root'));

root.render(<>
<h1>Hi</h1>
<li>{calc.default()}</li>
<li>{calc.add(45,5)}</li>
<li>{calc.mul(5, 6)}</li>
<li>{calc.sub(5, 2)}</li>
<Time />
</>)