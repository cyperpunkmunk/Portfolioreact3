import React from "react";
import "./work.css"
import travel from "../../../travelMentor.png"
import star from "../../../stardust.png"
function Work() {
  return (
    <div className = "workBody">
      <h1 className = "workTitle" >Work</h1>
      
      <div className = "work">
        <div className = "work-container">
          <img src={travel} alt="pic"/>
          <div className = "transition-image">
            <p>
              We wanted to create an App that made it easy and more accessible for users 
              to be ale to educate themselves on a new place they have never been to before
            </p>
            <a href = "https://dylan-casanova.github.io/Travel-Mentor/">Travel Mentor</a>
          </div>
        </div>
        <p className = "workTitle">travel mentor</p>
      </div>

      <div className = "work">
        <p className = "workTitle">travel mentor</p>
        <div className = "work-container">
          <img src={star} alt="pic"/>
          <div className = "transition-image">
            <p id="stardust">
              We wanted to create an App that made it easy and more accessible for users 
              to be ale to educate themselves on a new place they have never been to before
            </p>
            <a href = "https://dylan-casanova.github.io/Travel-Mentor/">Travel Mentor</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Work;