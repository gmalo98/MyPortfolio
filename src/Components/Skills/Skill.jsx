import React from 'react'
import '../Skills/Skill.css'
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { FaGithub } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { FaNpm } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { motion } from 'framer-motion';

const Skill = ({mode}) => {
  return (
    <div className={`skill-container-box ${mode}`} id="Skill">
        <h1>Skills</h1>
    <motion.div className={`skill-container ${mode}`} initial={{opacity:0,translateX:"-100px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"ease-in-out",}} transition={{duration:1}} >
       <div class="column">
        <div className="skills">
         <ImHtmlFive className="skill-icon"/>
         <p>HTML</p>
        </div>
       </div>
    <div class="column">
        <div className="skills">
          <SiCss3 className="skill-icon"/>
          <p>CSS</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
          <SiJavascript className="skill-icon"/>
          <p>JAVASCRIPT</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
          <FaReact className="skill-icon"/>
          <p>REACTJS</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
        < FaBootstrap className="skill-icon" />
        <p>BOOTSTRAP</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
         <FaJava className="skill-icon"/>
         <p>JAVA</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
        <SiSpringboot className="skill-icon"/>
        <p>SPRING BOOT</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
        <SiMysql className="skill-icon"/>
        <p>MYSQL</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
           <FaGithub className="skill-icon"/>
           <p>GITHUB</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
        <FaNpm className="skill-icon"/>
        <p>NPM</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
          <DiLinux className="skill-icon"/>
          <p>LINUX</p>
        </div>
    </div>
    <div class="column">
        <div className="skills">
        <SiRedux className="skill-icon"/>
        <p>REDUX</p>
        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default Skill
