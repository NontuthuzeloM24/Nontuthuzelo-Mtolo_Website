import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import MyWork from './components/MyWork.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <MyWork />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App;

