// import './App.css';
import React from 'react'

import Footer from "./components/Footer.js"
import Info from "./components/Info.js"
import Interests from "./components/Interests.js"
import About from './components/About.js'

export default function App() {
  return (
    <div className = "container">
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
  );
}

 