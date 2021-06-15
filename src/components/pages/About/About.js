import React from "react";
import "./about.css"
function About() {
  return (
    <div className = "body">
      
      <div className = "hi">
        <h1 className = "title">Hi, i'm Kenneth. It's a pleasure meeting you.</h1>
        <p className = "title">
           Freelance designer turned into a Full Stack Software Engineer. I started my journey about two years ago
           when I would decide to educate myself on how to paint my art onto a new, more digitalized canvas.
           <br></br>
           After a numerous amount of "Eye Of The Tiger" montages I found myself turning what I was experimenting with into 
           a lifestyle and one of my biggest passions. 
        </p>
        <p className = "title">
          Born and raised in Houston,Texas.
           <br></br>
          If im not coding im either painting, 3d modeling, playing piano ,playing video games, or working out.
        </p>
      </div>
      <div className = "languages">
        <p className = "title">Here are some of the languages I speak.</p>
      </div>

    </div>
  );
}

export default About;
