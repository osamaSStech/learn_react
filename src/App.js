import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
// import Login from './Components/login.js';
import './App.css';
import AboutUs from './Components/AboutUs.js';
import React, { useState } from 'react'
import Alert from './Components/Alert.js';
import './Components/Bubble.css';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#00b4ff"
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }

  return (
    <>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
      <Router>

        {/* <Navbar /> */}
        {/* <Navbar title="Dynamic Title" aboutText="About" /> */}
        <Navbar title="Dynamic Title" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          {/* <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/'>
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
          </Route> */}
        </Routes>
        {/* <Login /> */}
      </Router>
    </>
  );
}

export default App;
