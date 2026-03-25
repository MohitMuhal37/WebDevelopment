import "../src/style.css";
import React from "react";
import ReactDom from "react-dom/client";
import Heading from "./component.jsx"
import Greet from "./Greet.jsx"
import Time from "./Time";
// const name = 'Mohit';
// const year = 2026

const root = ReactDom.createRoot(document.getElementById('root'));

const img = 'https://picsum.photos/200';

// {color:"brown"}
// root.render(<>
// <h1  style={{color:"brown"}}>Hi i am heading</h1>
//     <ul>
//         <img src="../public/favicon.svg" alt="ko" />
//         <img src={img+ '?grayscale'} alt="" />
//     </ul>
// </>
// );

// function Head(){
//     return <h1>Hi i am Heading</h1>
// }

// root.render(<>
//     <Head />
// </>)
// root.render(<>
// <Heading />
// <Time />
// </>)

root.render(
    <Heading />
)