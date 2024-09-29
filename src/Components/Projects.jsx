import React from 'react'
import {PROJECTS} from '../Constants'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

const Projects = () => {
  return (
    <div className = 'border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className = 'text-center my-20 text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                    <div className ='w-full lg:w-1/4'>
                    
                    <img  
                    src = {project.image} 
                    width={150} 
                    height={150}
                    alt={project.title}
                    className ='mb-6 rounded'/>
                    
                    
                    </div>
                    <div className = 'w-full max-w-xl lg:w-3/4'>
                            <h6 className = 'mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech,index)=>(
                                        <span className ='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-600'key={index}>{tech}</span>
                            ))}

                            
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Projects