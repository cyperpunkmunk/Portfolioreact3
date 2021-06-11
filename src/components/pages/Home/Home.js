import React from "react";
import "./style.css"
import logo from "../../../IMG_8450.png"

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
        
        <div className = "">

        </div>

      </div>

    </div>
    
 
  );
}

export default Home;
