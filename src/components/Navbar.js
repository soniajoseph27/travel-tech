import React, { useState } from 'react';
import './Navbar.css';
import { Menuitems } from './Menuitems';
import { Link } from 'react-router-dom';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='Navbar'>
      <h1 className='navbar-logo'>Tech Travels</h1>
      <div className='menu-icons' onClick={handleclick} >
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        
      </div>
      <ul className={clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
        {Menuitems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cname}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
