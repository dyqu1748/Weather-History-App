import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ComboBox from './components/ComboBox.js';
import MapChart from './components/MapChart.js';
//import MapChart from './components/MapChart';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComboBox/>
        <MapChart/>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;