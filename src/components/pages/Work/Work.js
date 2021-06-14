import React from "react";
import "./work.css"
import travel from "../../../hiker-ocean-extreme.jpg"
function Work() {
  return (
    <div className = "main">
      <h1 className = "" >Work</h1>
      
      <div className = "work">
        <div className = "imgContainer">
            <img id="travel" src={travel} alt="pic"/>
        </div>
        <p className = "workTitle">travel mentor</p>
      </div>
    </div>
  );
}


export default Work;