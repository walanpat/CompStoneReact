import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
  HashRouter,
} from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import Howtoplay from "./pages/howtoplay/Howtoplay";
import SignIn from "./pages/signin/Signin";
import Wiki from "./pages/cardwiki/Wiki";
import "./Hub.css";
import CompStone_Board from "./images/CompStone_Board.jpg";
//Get our Hub to work properly (images of the compstone board)

const Hub = () => {
  return (
    <div className="Hub">
      <header className="Hub-header">
        <img src={logo} className="Hub-logo" alt="logo" />

        <div className="hub">
          <div className="hub-content">
            <Router>
              <Link to="/howtoplay" className="button">
                How To Play
              </Link>
              <Link to="/wiki" className="button">
                Card Wiki
              </Link>
              <Link to="/signin" className="button">
                Sign In
              </Link>
                
              <Route path="/howtoplay" component={Howtoplay} />
              <Route path="/wiki" component={Wiki} />
              <Route path="/signin" component={<p>Coming Soon</p>} />
            </Router>
          </div>
        </div>
        <a>
          Here we will input some stuff, hell maybe even make this a hub page
          that dynamically changes once you've logged in
        </a>
      </header>
    </div>
  );
};


export default Hub;
