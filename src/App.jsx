import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Showcase from './components/Showcase'
import Performance from './components/Performance'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Showcase/>
      <Performance/>
    </div>
  )
}

export default App
