import React from "react";
import "./work.css"
import travel from "../../../travelMentor.png"
import star from "../../../stardust.png"

function Work() {
  return (
    <div className = "workBody">
      <h1 className = "workTitle" id="workTitle">Work</h1>
      
      <div className = "work">
        <div className = "work-container">
          <img src={travel} alt="pic"/>
          <div className = "transition-image">
            <p id="travelMent">
              We wanted to create an App that made it easy and more accessible for users 
              to be ale to educate themselves on a new place they have never been to before
            </p>
            <a href  = "https://github.com/Dylan-Casanova/Travel-Mentor" id="workGit">GitHub Repo</a>
          </div>
        </div>
        <div className="pDiv">
          <a href  = "https://dylan-casanova.github.io/Travel-Mentor/" id="workGit">
            <p className = "workTitle" id="gman1">Travel Mentor</p>
          </a>
        </div>
      </div>

      <div className = "work">
        <div className="pDiv">
          <a href  = "https://stardust-2001.herokuapp.com/" id="workGit">
            <p className = "workTitle" id="gman2">Stardust</p>
          </a>
        </div>
        <div className = "work-container">
          <img src={star} alt="pic"/>
          <div className = "transition-image">
            <p id="stardust">
            The user will see topics pertaining to the planet that they were directed to, learn interesting facts and features 
            of the planet, and follow links to other websites on the subject.
            </p>
            <a href  = "https://github.com/robotsinboxes/stardust" id="workGit">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Work;