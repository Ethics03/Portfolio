import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaGolang } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVariants  = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        }
    },
})

const Tech = () => {
  return (
    <div className = ' border-b border-neutral-900 pb-24'>
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
        
        className = 'my-20 text-center text-4xl'>Technology-Stack</motion.h2>
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: -100}}
            transition={{duration:1.5}}
        className ='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className = 'text-4xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGolang className = 'text-4xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < DiPostgresql className = 'text-4xl text-blue-400'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate = "animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className = 'text-4xl text-white'/>
            </motion.div >
            <motion.div  
                variants={iconVariants(4.5)}
                initial="initial"
                animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className = 'text-4xl text-green-500'/>
            </motion.div >
            <motion.div  
                    variants={iconVariants(5)}
                    initial="initial"
                    animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaDocker className = 'text-4xl text-cyan-400'/>
            </motion.div >
            
        </motion.div>
        </div>
  )
}

export default Tech