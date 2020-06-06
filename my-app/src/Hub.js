import React from 'react';
import logo from './logo.svg';
import './Hub.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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


export default App;
