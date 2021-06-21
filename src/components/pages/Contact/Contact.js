import React from "react";
import { Link, Route } from "react-router-dom";
import "./contact.css"

function Contact(props) {
  return (
    <div>
      <div className = "con">
        <p className ="title" id="con">How can I make your life easier?</p>
        <p className ="title" id="con">Any Questions?</p>
        <p className ="title" id="con">Lets chat</p>
  
        <div className = "conDiv">
          <p className ="title" id="con">Email:</p>
          <h1 className ="title">Kendgibsonjr@gmail.com</h1>
        </div>
        <div className = "conDiv">
          <p className ="title" id="con">Phone:</p>
          <h1 className ="title">832.656.3257</h1>
        </div>
        <p className ="title" id="con">Also feel free to take a look at my <a href="https://docs.google.com/document/d/1xegU41iJLapImS2xpx6AyzgmqljhGXSGH5QcrHZYf40/edit?usp=sharing">resume</a> </p>
  
      </div>
    </div>
  );
}

export default Contact;
