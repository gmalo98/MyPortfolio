import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../Navbar/Navbar.css'
const Navbar = ({mode,setMode}) => {
 const [cross,setCross]=useState("");
 const [menulist,setMenulist]=useState("hidepage");
 const animatedHam=()=>{
  {cross===""?setCross("crossed"):setCross("");}
  if(cross===""){
    setMenulist("showpage");
    // document.body.style.overflowY="hidden"
  }
  else{
  setMenulist("hidepage");
  // document.body.style.overflowY="scroll"
  }
 }
  const changeMode=()=>{
    mode==="light"?setMode("dark"):setMode("light");
    localStorage.setItem("mode", mode==="dark"?"light":"dark");
  }
  useEffect(()=>{
    if(localStorage.getItem("mode"))
    {
      setMode(localStorage.getItem("mode"))
    }
  });
  return (
    <header className={`${mode}`}>
      <a className={`logo ${mode}`}>My<span>Portfolio</span></a>
      <div className={`navlist ${menulist}`} >
      <AnchorLink  offset={50} href="#Home" onClick={animatedHam}><li>Home</li></AnchorLink>
      <AnchorLink  offset={50} href="#About" onClick={animatedHam}><li>About me</li></AnchorLink>
        <AnchorLink offset={50} href="#Skill" onClick={animatedHam}><li>Skills</li></AnchorLink>
        <AnchorLink offset={50} href="#Project" onClick={animatedHam}> <li>Experience</li></AnchorLink>
        <AnchorLink offset={50} href="#contact" onClick={animatedHam}><li>Contact</li></AnchorLink>
      </div>
      <div className="nav-btn">
        {mode==="dark"?<BsFillMoonStarsFill onClick={()=>{changeMode()}} className='moon'/>:<IoMdSunny onClick={()=>{changeMode()}} className={`moon sun ${mode}`}/>}
       <div className={`hamburger ${cross}`} onClick={animatedHam} id={`${mode}`}>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
       </div>
      </div>
    </header>
  )
}

export default Navbar
