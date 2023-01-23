// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Login from './Components/login.js';
import './App.css';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="Dynamic Title" aboutText="About" /> */}
      <Navbar title="Dynamic Title" />
      <Login />
    </>
  );
}

export default App;
