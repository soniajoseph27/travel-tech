import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import img from '../assets/beautiful-coconut-palm-tree-beach-sea.jpg'
import Destination from '../components/Destination.js';
import Trip from '../components/Trip.js';
import Footer from '../components/Footer.js';


function Home() {
  return (
        
    <div className='Home'>
        <Navbar />
        <Hero 
        cname="hero"
        heroImg={img}
        title="Your Journey starts here"
        text="Choose your favourite destination"
        url="/service"
        buttonclass="btn-home"
        buttontext="Travel Plan"
        />
        <Destination />
        <Trip />
        <Footer />
    </div>
  )
}

export default Home;