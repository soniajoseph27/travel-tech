import React from 'react';
import './Destination.css';

function Destinationdata(props) {
  return (
    <div className={props.cname}>
            <div className='dest-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img alt="taal image" src={props.img1}/>
                <img alt="batangas image" src={props.img2}/>

            </div>

        </div>
  )
}

export default Destinationdata