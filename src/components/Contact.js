import React from 'react';
import StartSection from './related_comp/StartSection';
import { Button } from 'react-bootstrap';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './related_comp/contactForm';



function Contact() {
  return (
    <>
    <div>
      <StartSection />
      <div className="text-container">
        <p>PHOENIX FOUNDATION</p>
        <h1>Contact Us</h1>
        <Button id='p'>BECOME A VOLUNTEER</Button>
      </div>
    </div>
    <section className='contact-sec-1'>
      <div className='container'>
        <div className='part-cont text-center'>
          <div className='circle red'>
            <FontAwesomeIcon icon={faLocationDot} className='icon-size'/>
          </div>
          <span className='span-color'>Address:</span>
          <p className='contact-p'>Madhyamgram, Kolkata-700129, West Bengal</p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle blue'>
          <FontAwesomeIcon icon={faPhone} className='icon-size'/>
          </div>
          <span className='span-color'>Phone:</span>
          <p className='contact-p'> +91 9163630763 </p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle green'>
          <FontAwesomeIcon icon={faPaperPlane} className='icon-size'/>
          </div>
          <span className='span-color'>Email:</span>
          <p className='contact-p'>info@phoenixngo.org</p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle yellow'>
          <FontAwesomeIcon icon={faWhatsapp} className='icon-size'/>
          </div>
          <span className='span-color'>Whatsapp:</span>
          <p className='contact-p'> +91 9163630763 <br></br> +91 7450903722 </p>
        </div>
      </div>
    </section>
    <section className='form-sec'>
      <ContactForm />
    </section>
    <section className='location-sec'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1446.7812611943934!2d88.47265077277483!3d22.693746473179633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f5bd4a93315%3A0x1d42db024bf0410a!2sDISHARI%20CLUB!5e0!3m2!1sen!2sin!4v1720937057689!5m2!1sen!2sin" title="locaton map"></iframe>
    </section>
    </>
  );
}

export default Contact;