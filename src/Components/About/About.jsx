import React from 'react'
import '../About/About.css'
import iron from '../../Assets/ganesh.png';
import { IoSchool } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa";
import { motion } from 'framer-motion';
const About = ({mode}) => {
  return (
    <div className={`about-container ${mode}`} id="About">
      <div className="about-head">
        <h1>About me</h1>
      </div>
      <div className="about-body">
        <div className="about-body-image">
          <div className="about-image-box">
            <div className="about-inner-image">
            <motion.img src={iron} alt=""  initial={{opacity:0,translateY:"120px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.8}}/>
            </div>
         
          </div>
        </div>
        <div className="about-body-content">
          <motion.div className="about-body-content-desc" initial={{opacity:0,translateY:"120px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.8}}>
          Experienced Associate Software Engineer with over 2.3+ years of expertise in ReactJs development . Skilled in both frontend and backend technologies including Reactjs, HTML/CSS/JavaScript, Java,Spring boot, MySQL, GIT, and REST API development. Proven track record in enhancing user experience and optimizing application performance. Passionate about leveraging technology to solve complex problems and deliver innovative solutions.
          </motion.div>
          <div className="about-body-content-box-container">
            <motion.div className="about-box-container-one" initial={{opacity:0,translateY:"120px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.8}}>
              <div className="edu-icon">
              <IoSchool className='edu-icon-school'/>
              </div>
              <h3 className='about-box-container-head'>Education</h3>
              <div className="about-box-container-content">
              <p>Saroj Mohan Institute of Technology</p>
              <p>B-Tech in Electronics & Communication</p>
              <p>Passout-2022</p>
              </div>
            </motion.div>
            <motion.div className="about-box-container-two" initial={{opacity:0,translateY:"120px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.8}}>
            <div className="edu-icon">
              <PiCertificateDuotone className='edu-icon-cert'/>
              </div>
              <h3 className='about-box-container-head'>Certificate</h3>
              <div className="about-box-container-content">
              <p>ReactJs(Intermediate) - HackerRank </p>
              <p>Javascript(Intermediate)- HackerRank</p>
              <p>Java(Basic)- HackerRank</p>
              </div>
            </motion.div>
            <motion.div className="about-box-container-three" initial={{opacity:0,translateY:"120px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.8}}>
            <div className="edu-icon">
              <FaHouseUser className='edu-icon-info'/>
              </div>
              <h3 className='about-box-container-head'>Personal Info</h3>
              <div className="about-box-container-content info">
              <p>Name : Ganesh Malo</p>
              <p>Gender : Male</p>
              <p>Location : Kalna,Bardhaman,West Bengal,India,713409</p>
              <p>DOB : 02-04-1998</p>
              <p>Language : Bengali,Hindi,English</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
