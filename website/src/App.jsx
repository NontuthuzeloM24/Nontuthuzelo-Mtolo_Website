import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import MyWork from './components/MyWork.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
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

export default App

