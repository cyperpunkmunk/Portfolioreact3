import React from "react";
import "./style.css"
import logo from "../../../IMG_8450.png"
import github from "../../../github.png"
import email from "../../../email.png"
import linkedin from "../../../linkedin.png"
import stack from "../../../stackoverflow.png"
import * as THREE from 'three';

function Home() {
  return (
  
    <div>
      <div className = "main">
        <div className = "intro">  
          <h1 className = "title" >Artist, Web Developer & Video Game Developer</h1>
          <p className = "title">
            I create and innovate. Everyday. Reaching unscalable heights
          </p>
          <div className = "imgContainer">
            <img className ="img" src={logo} alt="pic"/>
          </div>
        </div>
      </div>

      <div className = "twoIntro">
        
        <div className = "linksHome">
          <div className = "linkContainer">
            <a className ="imgLink" href="https://www.linkedin.com/in/kenneth-gibson24/">
              <img className ="imgLink" src={linkedin} alt="pic"/>
            </a>
            <a className ="imgLink" href="https://github.com/cyperpunkmunk">
              <img className ="imgLink" src={github} alt="pic"/>
            </a>
            <a className ="imgLink" href="https://stackoverflow.com/users/14836382/kylast">
              <img className ="imgLink" src={stack} alt="pic"/>
            </a>
            <a className ="imgLink" href="mailto:kendgibsonjr@gmail.com">
              <img className ="imgLink" src={email} alt="pic"/>
            </a>
          </div>
        </div>

      </div>

    </div>
  
    
  );
}

export default Home;
