import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import "../public/styles.css";

function Card(props) {
  return (
    <div className="card-div">

    <h2>
      {props.name}
    </h2>
    <img 
    src={props.img} alt=""  width="300px" height="370px"/>
     <p>{props.tel}</p>
     <p>{props.email}</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
  {/* <h1>My Contacts</h1> */}
  <App />
  {/* <Card name="Mohit" img="../public/Assets/images/Mohit Image.png" tel="88140xxxxx" email="mohit@mail.com"/>
  <Card name="Amrinder" img="../public/Assets/images/Amrinder.jpg" tel="98190xxxxx" email="amrinder@mail.com"/>
  <Card name="Jagjit" img="../public/Assets/images/jagjit.jpg" tel="78199xxxxx" email="jagjit@mail.com" /> */}
  </>
)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

// export default Card;