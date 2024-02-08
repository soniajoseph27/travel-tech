import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h2>Trippy</h2>
                <p>Choose your favourite destination</p>
            </div>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </div>
    <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href="/">Change logo</a>
            <a href="/">Status</a>
            <a href="/">Licenses</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshootimg</a>
            <a href="/">Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Teams of Services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Licenses</a>
        </div>      
    </div>
    </div>
  )
}

export default Footer;