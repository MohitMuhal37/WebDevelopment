import React from "react";
import ReactDom from "react-dom/client";

function Card(props) {
  return (
    <div>

    <h2>
      Hi I am Mohit
    </h2>
    <img src="../public/Assets/images/Mohit Image.png" alt="" />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
  <Card />
  </>
)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

export default Card;