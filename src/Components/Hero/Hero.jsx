import React from 'react'
import '../Hero/Hero.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
// import cover from '../../Assets/cover.jpg'
import cover from '../../Assets/ganesh_main.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = ({mode}) => {
  console.log(mode);
  return (
    <>
    <section className={`home ${mode}`} id="Home">
   
      <div className="home-text">
     
      <h3 className='home-text-h3'>Welcome to my<span>Portfolio!</span></h3>
      <h2>Hello!</h2>
  
        <h1>I'm Ganesh</h1>
      
        <p>I am a <span><TypeAnimation
preRenderFirstString={true}
sequence={[
  500,
  'Associate Software Engineer', // initially rendered starting point
  1000,
  'ReactJs Developer',
  1000,
  'Full Stack Web Developer',
  1000,
]}
speed={50}
repeat={Infinity}
/></span></p>
        <div className='home-text-content'>Enthusiastic and dedicated Associate Software Engineer with 2.4+ years of hands-on experience in software development and a passion for creating efficient, scalable, and innovative solutions.</div>
        
        <div className="home-btn"><a href='https://drive.google.com/file/d/1k9ZLrs9mXgBBtKvDOCw9cDwlPQp3vvYc/view?usp=drive_link'>
        <button class="button" type="button">
  <span class="button__text">Resume</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
</a>
        </div>
      </div>
      <div className="home-img">
        <img src={cover} alt="" />
      </div>
    </section>
    <div className={`home-right ${mode}`}>
     <div className={`home-icon-box ${mode}`} ><a href='https://www.linkedin.com/in/ganesh-malo-859a55211/'><FaLinkedinIn className='home-icon'/></a></div>
     <div className={`home-icon-box ${mode}`} ><a href="https://www.instagram.com/ganeshmalo3/reels/?hl=en"><FaInstagram className='home-icon'/></a></div>
     <div className={`home-icon-box ${mode}`} ><a href="https://x.com/?lang=en"><FiTwitter className='home-icon'/></a></div>
     <div className={`home-icon-box ${mode}`}><a href=""><IoLogoWhatsapp className='home-icon'/></a></div>
    </div>
    </>
  )
}

export default Hero
