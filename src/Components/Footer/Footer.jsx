import React from 'react'
import '../Footer/Footer.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
const Footer = ({mode}) => {
  return (
    <div className={`foot-box ${mode}`}>
      <div className='foot-logo'>
        <h1><span>My</span>Portfolio</h1>
      </div>
      <div className='foot-social'>
      <div className='social'>
        <div className='icon-round'><a href='https://www.facebook.com/ganesh1548'><FaFacebookF className='icon'/></a></div>
        <div className='icon-round'><a href='#'>< FaWhatsapp  className='icon'/></a></div>
        <div className='icon-round'><a href='https://www.instagram.com/ganeshmalo3/reels/?hl=en'><FaInstagram className='icon'/></a></div>
        <div className='icon-round'><a href='#'><FiTwitter className='icon'/></a></div>
       </div>
      </div>
      <div className='foot-declaration'>
      <p>Copyright © 2024 By Ganesh Malo </p>
         <p>Made by using ReactJs <span>❤</span></p>
        </div>
    </div>
  )
}

export default Footer
