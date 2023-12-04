// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SnowFlake from './SnowFlakes/SnowFlake';
import CatMeow from './tone/CatMeow';
import About from './pages/About';
import Home from './pages/Home';
import Meowing from './pages/Meowing';
import PageNotFound from './pages/PageNotFound';
import Ratcat from './pages/Ratcat';
// import CatMusic from './tone/CatMusic';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/meownyanko' element={<div><Navbar /><Home /></div>} />
          <Route path='/meownyanko/about' element={<div><Navbar /><About /></div>} />
          <Route path='/meownyanko/meowing' element={<div><Navbar /><Meowing /></div>} />
          <Route path='/meownyanko/ratcat' element={<div><Navbar /><Ratcat /></div>} />
          <Route path="*" element={<div><Navbar /><PageNotFound /></div>} />
        </Routes>
      </Router>
      
      
    <SnowFlake />
    <CatMeow />
    {/* <CatMusic /> */}
    </div>
    
  );
}


export default App;

