import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Homescreen';

// this is gonna work for our navigation
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
