import React from "react";
import "./about.css"

import ps from "../../../adobe-photoshop.png"
import bs from "../../../bootstrap-social-logo.png"
import js from "../../../JavaScript-logo.png"
import jq from "../../../jquery.png"
import mongodb from "../../../mongoDB-logo.jpg"
import node from "../../../nodejs.jpg"
import react from "../../../react.png"


function About() {
  return (
    <div className = "body">
      
      <div className = "hi">
        <h1 className = "title" id="abouth1">Hi, i'm Kenneth. It's a pleasure meeting you.</h1>
        <p className = "title" id="about">
           Freelance designer turned into a Full Stack Software Engineer. I started my journey about two years ago
           when I would decide to educate myself on how to paint my art onto a new, more digitalized canvas.
           <br></br>
           After a numerous amount of "Eye Of The Tiger" montages I found myself turning what I was experimenting with into 
           a lifestyle and one of my biggest passions. 
        </p>
        <p className = "title" id="about">
          Born and raised in Houston,Texas.
           <br></br>
          If im not coding im either painting, 3d modeling, playing piano, playing video games, or working out.
        </p>
      <div className = "languages">
        <h1 className = "title" id="abouth12" >Here are some of the tools I use.</h1>
        <div className="icons">
          <div className="parent">
            <img className ="child" src={ps} alt="pic"/>
            <img className ="child" src={bs} alt="pic"/>
            <img className ="child" src={js} alt="pic"/>
            <img className ="child" src={jq} alt="pic"/>
            <img className ="child" src={mongodb} alt="pic"/>
            <img className ="child" src={node} alt="pic"/>
            <img className ="child" src={react} alt="pic"/>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default About;
