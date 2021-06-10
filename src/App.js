import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Work from "./components/pages/Work/Work";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <NavTabs className = "nav"/>
        <Route className= "Home" exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
