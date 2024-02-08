import React from 'react'

function TripData(props) {
  return (
    <div className='trip-card'>
        <div className='t-image'>
            <img src={props.image} alt="trip image"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>   
  )
}

export default TripData