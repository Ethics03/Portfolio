import React,{useRef} from 'react'
import logo from '../assets/coding.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'


import { useEffect } from 'react'
function Navbar() {

  

  // const HandleScroll = () => {
  //   const blog = document.getElementById('Blog')
  //   console.log(blog)

  //   blog.scrollIntoView({ behavior: 'smooth' })
  // }



  return (


    <nav className = 'overflow-x-hidden text-neutral-300  mb-20 flex items-center justify-between py-6 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className = 'text-2xl mx-2 w-15'>
            It's Rachit
            </div>
        <div className = 'm-8 flex items-center justify-center gap-4 text-2xl'>
            <a href = "#Blog">Blogs</a>
            <a href="https://www.linkedin.com/in/rachit-srivastava-3b764527a/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Ethics03" target="_blank"><FaGithub/></a>
            <a href="https://x.com/___Rachit___" target="_blank"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/___rachit____/" target="_blank"><FaInstagram/></a>
            
            
        </div>
       
       
    </nav>
   
  )
}

export default Navbar