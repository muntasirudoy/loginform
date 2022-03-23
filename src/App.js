import React from "react";
import './App.css'
import logo from "./images/blue-logo.png"
import fb from "./images/fb.png"
import go from "./images/go.png"
import bg from "./images/bg.png"

function App() {
  return (
   <div className="container">
     <div className="items">
     <div className="image">
       <img className="bg" src={bg}/>
     </div>
<div className="form">
   <div className="logo-text">
     <img src={logo} />
     <h2>Explore The Best Tours... Hurry up!!</h2>
   </div>
   <div className="input-box">
   <input  placeholder="Email Address"/>
   <input placeholder="Password"/>
   <p className="forgot">Forgot password ?</p>

   <a href="">Login</a>
   <p className="or">or</p>
   </div>
   <div className="icons">
    <img className="icon" src={fb} />
    <img className="icon" src={go} />
   </div>
   <p> Dont have an account? <a href="">Signup</a> </p>
   </div>

     </div>
   </div>
  );
}

export default App;
