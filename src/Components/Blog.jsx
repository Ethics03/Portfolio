import React from 'react'
import BlogCard from './BlogCard'
import { motion } from "framer-motion"
function Blog() {
  
  return (

    
    <div id = "Blog">
      <div className = 'border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className = 'my-10 text-center text-4xl'>Blogs</motion.h2>
        </div>
      <div className = 'flex gap-4'>
        <BlogCard/>
        <BlogCard/>
        </div>
     </div>
  )
}

export default Blog