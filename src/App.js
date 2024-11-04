
import { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skill from './Components/Skills/Skill';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
//import Successpage from './Components/Successpage/Successpage';


function App() {
  const [mode,setMode]=useState("dark");

  
  return (
    <>
    <Navbar mode={mode} setMode={setMode}/>
    <Hero mode={mode}/>
    <About mode={mode} />
    <Skill mode={mode}/>
    <Projects mode={mode}/>
    <Contact mode={mode}/>
    <Footer mode={mode}/>
    {/* <Successpage/> */}
    </>
  );
}

export default App;
