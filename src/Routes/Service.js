import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero.js';
import aboutimg from '../assets/travel-4k-volcano-ynlmn2hmts0n7gsw.jpg'
import Footer from '../components/Footer.js';
import Trip from '../components/Trip.js';


function Service() {
  return (
    <div className='Service'>
       <Navbar />
      <Hero 
      cname="service"
      heroImg={aboutimg}
      title="Services"
      />
      <Trip />
      <Footer />
    </div>
  )
}

export default Service