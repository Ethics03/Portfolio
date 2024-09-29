import React from 'react'
import Aboutpic from '../assets/pcworkpic.jpg'
import {ABOUT_CONTENT} from '../Constants'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible : {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5 , delay: delay},
  }
})


const About = () => {
  return (
    <div className = 'border-b border-neutral-900 pb-4'>
        <h1 className = 'my-20 text-center text-4xl'>
            About Me
            </h1>
        <div className = 'flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className = 'w-full lg:w-1/2 lg:p-8'>
                <div className = 'flex items-center justify-center'>
                    <img className ='rounded-2xl' src={Aboutpic} alt='aboutpic'/>
                </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className = 'w-full lg:w-1/2'>
                  <div className = 'flex justify-center lg:justify-start'>
                    <p className = 'my-2 maxw-xl py-6'>
                      {ABOUT_CONTENT}
                    </p>
                  </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About