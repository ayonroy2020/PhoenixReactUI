import React, { useState } from 'react';
import StartSection from './related_comp/StartSection';
import CountUp from 'react-countup';
import { Button } from 'react-bootstrap';
import "./Base.css";
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faHandsHoldingChild, faStethoscope,faBowlRice,faDroplet,faSchool} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import camp1 from '../images/camp1.png'
import ScrollTrigger from 'react-scroll-trigger';


function About() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
    <div>
      <StartSection />
      <div className="text-container">
        <p>PHOENIX FOUNDATION</p>
        <h1>Know About Us</h1>
        <Button id='p'>BECOME A VOLUNTEER</Button>
      </div>
    </div>
    <section className='container-2'>
        <div className='left-div'>
          <div className="heading-section pr-md-5 pt-md-5">
						<span className="subheading">WELCOME TO PHOENIX FOUNDATION</span>
						<h2 className="mb-4">We are here to help everyone in need.</h2>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            <div className='parent'>
              <div>
              <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: '24px', marginRight: '16px' }}/>
                <strong>64</strong>
                <p>VOLUNTEERS</p>
              </div>
              <div>
              <FontAwesomeIcon icon={faHandsHoldingChild} style={{ fontSize: '24px', marginRight: '16px' }}/>
                <strong>21</strong>
                <p>CAMPAIGN</p>
              </div>
            </div>
            <Button className='volunteer-2' id='p'>BECOME A VOLUNTEER</Button>
          </div>
        </div>
        <div className='right-div '>
          <img src={logo}  className='plogo' alt="ngo logo" />
        </div>
    </section>

    <section className='contact-sec-1  pt-5 pb-0 mt-0 mb-0'>
      <p className="text-center subheading">PHOENIX FOUNDATION</p>
      <h2 className='text-center work-h2 pb-3'>We Believe that We Can Save<br></br> More Lifes with You</h2>
      <div className='container'>
        <div className='part-cont text-center'>
          <div className='circle red'>
            <FontAwesomeIcon icon={faStethoscope} className='icon-size'/>
          </div>
          <span className='span-color'>Health</span>
          <p className='contact-p'>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle blue'>
          <FontAwesomeIcon icon={faBowlRice} className='icon-size'/>
          </div>
          <span className='span-color'>Food</span>
          <p className='contact-p'>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle green'>
          <FontAwesomeIcon icon={faDroplet} className='icon-size'/>
          </div>
          <span className='span-color'>Water</span>
          <p className='contact-p'>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className='part-cont text-center'>
          <div className='circle yellow'>
          {/* <FontAwesomeIcon icon={faBook} className='icon-size'/> */}
          {/* <FontAwesomeIcon icon={faBookOpenReader} className='icon-size' /> */}
          <FontAwesomeIcon icon={faSchool} className='icon-size'/>
          </div>
          <span className='span-color'>Education</span>
          <p className='contact-p'> Far far away, behind the word mountains, far from the countries. </p>
        </div>
      </div>
    </section>
    <section className='sec-counter'>
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div className="counter">
        <div>
          <h1>{counterOn && <CountUp start={0} end={70} duration={3} delay={0} style={{color: '#fd645b'}}/> }+</h1>
          <p className="counter-p">Dedicated Donors</p>
        </div>
        <div>
          <h1>{counterOn && <CountUp start={0} end={35450} duration={5} delay={0} style={{color: '#fd645b'}}/> }+</h1>
          <p className="counter-p">Donation Campaigns are running</p>
        </div>
        <div>
          <h1>{counterOn && <CountUp start={0} end={20} duration={3} delay={0} style={{color: '#fd645b'}}/> }+</h1>
          <p className="counter-p">Total no of Campaigns</p>
        </div>
        <div>
          <h1>{counterOn && <CountUp start={0} end={21458} duration={3} delay={0} style={{color: '#fd645b'}}/> }+</h1>
          <p className="counter-p">Funds we raised till now</p>
        </div>
      </div>
      </ScrollTrigger>
    </section>
    <section className='sec-camp'>
      <p className="text-center subheading">PHOENIX FOUNDATION</p>
      <h2 className='text-center work-h2 pb-2'>Our First Campaigns</h2>
      <div className="container2">
        <div className=''>
          <img src={camp1} className='img-design' alt='service-1' />
        </div>
        <div className=''>
          <h2 className='first-camp-name'>Food For Houngry</h2>
          <p>All details about the first campaign date location no of people we helped.
             How we started our journey all.......
             <br></br>Location: 
             <br></br>No of people:
             <br></br>Date:
             </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;