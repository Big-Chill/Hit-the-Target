import logo from './logo.svg';
import './App.css';
import React from 'react';
import Heading from './Components/Heading';
import Scoreboard from './Components/Scoreboard';


function App() {
  return (
    <div className="Main-div">
    <Heading/>
    <Scoreboard/>
    </div>
    
  );
}

export default App;
