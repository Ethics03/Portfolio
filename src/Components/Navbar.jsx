import React from 'react'
import logo from '../assets/coding.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
function Navbar() {
  return (
    <nav className = 'overflow-x-hidden text-neutral-300  mb-20 flex items-center justify-between py-6 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className = 'text-2xl mx-2 w-15'>
            It's Rachit
            </div>
        <div className = 'm-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
       
    </nav>
  )
}

export default Navbar