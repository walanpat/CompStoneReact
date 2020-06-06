import React from 'react';
import logo from './logo.svg';
import './Hub.css';
import CompStone_Board from './images/CompStone_Board.jpg';
//Get our Hub to work properly (images of the compstone board)
function Hub() {
  return (
    <div className="Hub">
      <header className="Hub-header">
        <img src={logo} className="Hub-logo" alt="logo" />
        <p>
          Edit <code>src/Hub.js</code> and save to reload.
          </p>
          <br></br>
          <div className="hero">
            <div className="hero-content">
              <button id="play" type="button">Play Game</button>
              <button id="howTo">How to Play</button>
              <button id="wiki">Card Wiki</button>
              <button id="signOut">Sign Out</button>
            </div>
          </div>        
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}


export default Hub;
