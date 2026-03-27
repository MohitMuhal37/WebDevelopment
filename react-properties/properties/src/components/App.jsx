import React from "react";
import Card from "./Card"
import Avatar from "./Avatar"

function App(){

//   function Card(props) {
//   return (
//     <div className="card-div">

//     <h2>
//       {props.name}
//     </h2>
//     <img 
//     src={props.img} alt=""  width="300px" height="370px"/>
//      <p>{props.tel}</p>
//      <p>{props.email}</p>
//     </div>
//   );
// }

  return (
    <>
     <h1 className="heading">My Contacts</h1>
 <Card name="Mohit" img="../public/Assets/images/Mohit Image.png" tel="88140xxxxx" email="mohit@mail.com"/>
  <Card name="Amrinder" img="../public/Assets/images/Amrinder.jpg" tel="98190xxxxx" email="amrinder@mail.com"/>
  <Card name="Jagjit" img="../public/Assets/images/jagjit.jpg" tel="78199xxxxx" email="jagjit@mail.com" />
  <Avatar data="hi this is new Avatar text"/> 
    </>
  )
}

export default App;
