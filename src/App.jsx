import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Intro from './components/intro.jsx'
import Slider from './components/slider.jsx'
import Variant from './components/variant.jsx'
import Footer from  './components/footer.jsx'


function App() {
  return (
    <>
      <Header/>
      <div id="main">
        <div id="content">
          <Intro/>
          <Slider/>
        </div>
      </div>
      <div id="variantlist">
        <Variant/>
      </div>
      <Footer/>
    </>
  );
}

export default App

