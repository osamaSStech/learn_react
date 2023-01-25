// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
// import Login from './Components/login.js';
import './App.css';
// import AboutUs from './Components/AboutUs.js';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="Dynamic Title" aboutText="About" /> */}
      <Navbar title="Dynamic Title" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      {/* <AboutUs /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
