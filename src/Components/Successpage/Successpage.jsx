import React from 'react'
import '../Successpage/Successpage.css'
import right from '../../Assets/right.png';
import { motion } from "framer-motion"
const Successpage = ({setIsOpen}) => {
  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: "-300%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      y: "200%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    }
  }
  return (
    <motion.div className="success-container" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.1 }}
    onClick={()=>setIsOpen(false)}>
      <motion.div className="success-box" 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 1 }}
              onClick={(e) => e.stopPropagation()}>
        <div className="image-box">
         <img src={right} alt=''/>
        </div>
        <div className="success-details">
        <h2>Great Job</h2>
        <p>Your response has been successfully submitted.Thank you for contacting us!</p>
        </div>
        
        <button className='success-close' variant="ghost"
                size="icon"
                onClick={()=>setIsOpen(false)}>Close</button>
      </motion.div>
    </motion.div>
  )
}

export default Successpage
