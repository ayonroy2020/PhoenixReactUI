import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faMapLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook,faSquareInstagram,faSquareTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import e1 from '../images/e1.png'
import logo from '../images/logo.png'
    

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="part">
          <h3>Phoenix Foundation</h3>
          <hr></hr>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <FontAwesomeIcon icon={faSquareFacebook} className='footerIcon' style={{ color: 'blue' }}/>
          <FontAwesomeIcon icon={faSquareInstagram} className='footerIcon' style={{ color: '#fd645b' }}/>
          <FontAwesomeIcon icon={faSquareTwitter} className='footerIcon' style={{ color: '#f7c42c' }}/>
          <FontAwesomeIcon icon={faLinkedin} className='footerIcon' style={{ color: '#18a577' }}/>
        </div>
        <div className="part">
          <h3>Our Campaigns</h3>
          <hr></hr>
          {/* <img src={e1} className='ficon-img' alt='e-1' /> */}
          <ul >
            <li> Food For Hungry</li>
            <li> Annada 2019</li>
            <li> Annada 2019</li>
            <li> Annada 2019</li>
            <li> Annada 2019</li>
          </ul>
          
        </div>
        <div className="part">
          <h3>About Us</h3>
          <hr></hr>
          <p>On 1st October 2019 we started our journey.</p>
          
          <p> <img src={logo} className='ficon-img' alt='e-1' /> Phoenix  Foundation</p>
        </div>
        <div className="part">
          <h3>Contact Us</h3>
          <hr></hr>
          <p><FontAwesomeIcon icon={faMapLocationDot} className='add-icon'/>Madhyamgram, Kolkata-700129, West Bengal </p>
          <p><FontAwesomeIcon icon={faPhone} className='add-icon'/>+917450903722</p>
          <p><FontAwesomeIcon icon={faEnvelope} className='add-icon'/>phoenixgmail.com</p>
        </div>
      </div>
      <p>Copyright ©2024 || This template is made with <FontAwesomeIcon icon={faHeart}  /> by <span> Phoenix Foundation </span> </p>
    </div>
  );
}

export default Footer;