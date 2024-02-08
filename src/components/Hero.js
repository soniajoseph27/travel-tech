import React from 'react';
import './Hero.css';

function Hero(props) { // Accept props as an argument
  return (
    <div className={props.cname}>
      <img
        src={props.heroImg}
        alt="heroimg"
      />
      <div className='Hero-txt'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.buttonclass} >
          {props.buttontext}
        </a>
      </div>
    </div>
  );
}

export default Hero;
