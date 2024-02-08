import React from 'react';
import './Destination.css';
import Destinationdata from './Destinationdata';


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <Destinationdata 
        cname="first-dest" 
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge. 
        Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines.The main Vulcan point situated in the main crater lake, which is on the volcano island that is in Taal lake, which is in the main island of the Philippines (Luzon). Since the 1977 eruption, the volcano had shown signs of unrest since 1991, with strong seismic activity and ground fracturing events as well as the formation of small mud pots and mud geysers on parts of the island."
        img1="https://www.e-philippines.com.ph/wp-content/uploads/2020/06/Taal-Volcano-Adventure-trek-Philippines-travel-and-tour-agency.jpg"
        img2="https://st3.depositphotos.com/6729430/15568/i/450/depositphotos_155682952-stock-photo-relaxing-beach-house-calatagan-batangas.jpg"
        />
        <Destinationdata 
        cname="first-dest-reverse"
        img1="https://bhatkantiholidays.com/wp-content/uploads/2020/11/mysore-palace-3.jpg"
        img2="https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"
        heading="Mysore Palace, Taj Mahal"
        text="Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house). It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort. 
        The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The architects and craftsmen of the Taj Mahal were masters of proportions and tricks of the eye. When you first approach the main gate that frames the Taj, for example, the monument appears incredibly close and large. But as you get closer, it shrinks in size—exactly the opposite of what you’d expect.  "
        />
    </div>
  )
}

export default Destination;