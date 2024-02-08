import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import aboutimg from '../assets/sea-house-resort-exotic-sky.jpg'
import Footer from '../components/Footer.js';
import Aboutus from '../components/Aboutus.js';


function About() {
  return (
    <div className='About'>
    <Navbar />
    <Hero 
    cname="about"
    heroImg={aboutimg}
    title="About"
    />
    <Aboutus />
    <Footer />
    </div>
  )
}

export default About;