import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import img from '../assets/360_F_247610284_9Px0y8LhzPMqqrGJ3xdaXMPgv5kU5EK4.jpg'
import Footer from '../components/Footer.js';
import Contactform from '../components/Contactform.js';


function Contact() {
  return (
    <div className='Contact'>
    <Navbar />
    <Hero 
    cname="contact"
    heroImg={img}
    title="Contact"
    />
    <Contactform />
    <Footer />
    
    </div>
  )
}

export default Contact;