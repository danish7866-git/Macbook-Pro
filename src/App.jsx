import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

import Lenis from 'lenis'

const App = () => {
//   // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Showcase/>
      <Footer/>
      {/* <Footer2/> */}
    </div>
  )
}

export default App
