import React from "react";
import "./style.css"
import logo from "../../../IMG_8450.png"

import github from "../../../github.png"
import github2 from "../../../github2.png"

import email from "../../../email.png"
import email2 from "../../../email2.png"

import linkedin from "../../../linkedin.png"
import linkedin2 from "../../../linkedin2.png"

import stack from "../../../stackoverflow.png"
import stack2 from "../../../stackoverflow2.png"


function Home() {
  return (
  
    <div>
      <div className = "main">
        <div className = "intro">  
          <h1 className = "title" id="glow" >Artist, Web Developer & Video Game Designer</h1>
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
            
            <a className ="box" href="https://www.linkedin.com/in/kenneth-gibson24/">
              <img className ="imgLink" src={linkedin} alt="pic"/>
              <img className ="hover-img" src={linkedin2} alt="pic"/>
            </a>

            <a className ="box" href="https://github.com/cyperpunkmunk">
              <img className ="imgLink" src={github} alt="pic"/>
              <img className ="hover-img" src={github2} alt="pic"/>
            </a>

            <a className ="box" href="https://stackoverflow.com/users/14836382/kylast">
              <img className ="imgLink" src={stack} alt="pic"/>
              <img className ="hover-img" src={stack2} alt="pic"/>
            </a>
            
            <a className ="box" href="mailto:kendgibsonjr@gmail.com">
              <img className ="imgLink" src={email} alt="pic"/>
              <img className ="hover-img" src={email2} alt="pic"/>
            </a>
          </div>
        </div>

      </div>

    </div>
  
    
  );
}

export default Home;
