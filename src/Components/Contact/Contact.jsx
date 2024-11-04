import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import contactImage from '../../Assets/man.png';
import contactlapto from '../../Assets/customer.png'
import Successpage from '../Successpage/Successpage';
import { motion } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
const Contact = ({mode}) => {
  const [isOpen,setIsOpen]=useState(false);
  // const [animate,setAnimate]=useState("");
  const form = useRef();

  // const [alertclass,setAlertclass]=useState("");
  const [formdata,setFormdata]=useState(
    {
      user_name:"",
      user_email:"",
      message:""
    }
  );
  const handlechange=(e)=>{
   const {name,value}=e.target;
   setFormdata({...formdata,[name]:value});
   console.log("inside handle change "+JSON.stringify(formdata))
  }
  const [errors,setErrors]=useState({});
 
  const validate=()=>{
    const errobj={};
    if(formdata.user_name===''){
      errobj.user_name="name is required!";
    }
    if(formdata.user_email===''){ 
      errobj.user_email="email is required!";
      }
      else if(!formdata.user_email.toLocaleLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
      {
        errobj.user_email="Please enter a valid email";
      }
    if(formdata.message===''){
      errobj.message="message is required!";
    }
    setErrors(errobj);
  
    
    return Object.keys(errobj).length===0;
  }
 
  const sendEmail=(e)=>{
  e.preventDefault();
  let errmessages=validate();
  console.log("Inside sendemail "+errmessages);
  if(errmessages){
  emailjs.sendForm('service_kh173of', 'template_1bbkj38', form.current, {
        publicKey: 'Z9kFy5AMDLshTXnYz',
      })
      .then(
        () => {
          // setAnimate("show");
          setIsOpen(true);
          // toast.success("Oh Yas !!")
          console.log('SUCCESS!');
          setFormdata(
            {
              user_name:"",
              user_email:"",
              message:""
            });
           
        },
        (error) => {
          alert(error);
          console.log('FAILED...', error.text);
        },
      );
    }

  else{
    console.log("Form validation failed");
  }
}
    

  
  return (
    <>
    <AnimatePresence>
    {isOpen&&<Successpage setIsOpen={setIsOpen}/>}
    </AnimatePresence>
    <div className={`contact-container ${mode}`} id="contact">
      
        
            
            <div className='contact-box'>
             
            <div className='contact-box-left'>
            <h1>Get in touch with me </h1>
              <div className="contact-box-left-box">
                <motion.div className='contact-box-left-image' initial={{opacity:0,translateX:"-100px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"linear",}} transition={{duration:0.9}}>
              <img src={contactImage} alt="" />
            </motion.div>
                <motion.div  className='contact-info-up' initial={{opacity:0,translateX:"-80px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"linear",}} transition={{duration:1}}>
                <p>Currently i'm looking for the new opprtunity.So feel free to send me a message about anything that you want me to work on. You can contact me anytime</p>
                </motion.div></div>
            
                <div  className="contact-info-buttom">
                <motion.div className="label-info" initial={{opacity:0,translateX:"-80px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"linear",}} transition={{duration:1}}> <MdEmail id="contact-icon" style={{marginBottom:'-4px'}} className='label-info-icon'/> <span >malo.ganesh98@gmail.com</span> </motion.div>
                <motion.div className="label-info" id='phone-box' initial={{opacity:0,translateX:"-80px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"linear",}} transition={{duration:1}}><label><FaPhoneAlt  id="contact-icon" className='label-info-icon'/><span> +91-9382948782</span></label></motion.div>
                <motion.div className="label-info" initial={{opacity:0,translateX:"-80px"}} whileInView={{opacity:1,translateX:0,transitionTimingFunction:"linear", }} transition={{duration:1}}><label><FaLocationDot  id="contact-icon" className='label-info-icon'/><span> Kalna, Bardhaman, West Bengal, India, 713409</span></label></motion.div>
                </div>
                </div>
                <div className='contact-box-right'>
                
                {/* {JSON.stringify(formdata)} */}
                  <motion.img src={contactlapto} alt='' initial={{opacity:0,translateY:"100px"}} whileInView={{opacity:1,translateY:0,transitionTimingFunction:"linear",}} transition={{duration:0.5}}/>
                  <motion.form ref={form} onSubmit={sendEmail} initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transitionTimingFunction:"linear",}} transition={{duration:0.6}} >
            <label>
                Your Name : 
                <input type='text'name="user_name" value={formdata.user_name} placeholder='Enter your name' onChange={handlechange} autoComplete='off'/>
                {errors.user_name&&<p className='errmessage'>{errors.user_name}</p>}
                </label>
            <label>
                Your Email :
                <input type='text' name="user_email" value={formdata.user_email} placeholder='Enter your email'  onChange={handlechange} autoComplete="off"/>
                {errors.user_email &&<p className='errmessage'>{errors.user_email}</p>}
                </label>
            <label>
                Your Message :
                <textarea className='contact-textarea' name="message" value={formdata.message} placeholder='Enter your message '  onChange={handlechange} autoComplete='false'/>
                {errors.message&&<p className='errmessage'>{errors.message}</p>}
                </label>
                <button className='send-button' type="submit"  ><span>Submit</span>< IoSendSharp className='send'/></button>
          </motion.form>
                </div>
                </div>
          
        </div>
        </>
  )
}

export default Contact
