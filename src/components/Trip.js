import React from 'react';
import './Trip.css';
import TripData from './TripData.js';
import Trip1 from '../assets/france 1.jpg';
import Trip2 from '../assets/THAILAND HD.jpg';
import Trip3 from '../assets/m2.jpg';



function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="Trip in France"
            text="France, officially known as the French Republic, is a country located in Western Europe. It shares borders with Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, Andorra, and maritime borders with the United Kingdom. France is renowned for its rich history, diverse culture, and significant contributions to art, philosophy, literature, cuisine, and science."
            />
            <TripData
            image={Trip2}
            heading="Trip in Thailand"
            text="Thailand, officially known as the Kingdom of Thailand, is a Southeast Asian country known for its stunning beaches, rich culture, and vibrant cuisine. temples, lively street markets, and vibrant nightlife. Thailand is renowned for its hospitality and is a popular destination for travelers seeking adventure, relaxation, or cultural experiences. "          />
            <TripData
            image={Trip3}
            heading="Trip in Malaysia"
            text="Malaysia, located in Southeast Asia, is a diverse country known for its multicultural society, beautiful landscapes, and delicious cuisine. The capital city, Kuala Lumpur, is a modern metropolis with iconic landmarks such as the Petronas Twin Towers and bustling street markets. reflected in its architecture, festivals, and cuisine."
            />
        </div>
    </div>
    
  )
}

export default Trip;