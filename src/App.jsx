import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Tech from './Components/Tech'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import { motion } from "framer-motion"
import Blog from './Components/Blog'



function App() {
 
 

  return (
    <>
    <div className = 'overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className = 'fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center 
     px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
     </div>
      </div>
     
    <div className = 'container mx-auto px-8'>
   
    <Navbar/>
    <Hero/>
    <About/>
    <Tech/>
    <Projects/>
    <Blog/>
    <Contacts/>


    </div>
      
      </div>
    </>
  )
}

export default App
