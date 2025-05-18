import React from 'react';
import './camp.css';
import StartSection from './related_comp/StartSection';
import { Button } from 'react-bootstrap';
import Carousal from './related_comp/Carousal';
import poster from '../images/poster.png';

function Campaign() {
return (
    <>
    <div>
      <StartSection />
      <div className="text-container">
        <p>PHOENIX FOUNDATION</p>
        <h1>Our Campaigns</h1>
        <Button id='p'>BECOME A VOLUNTEER</Button>
      </div>
    </div>
    <section className='sec-camp1'>
      <div className="container1">
      <div class="part part1">
          <h2>Campaign name</h2>
          <p>All About the next upcoming Campaign. Along with the date and address.</p>
        </div>
        <div class="part part2">
           <img src={poster} className='poster-design' alt='poster' />
        </div>
      </div>
    </section>

    <section className='sec-camp2'>
      <div className='bg'>
          <div className='center-box'>
              <Carousal />
          </div>
      </div>
    </section>

    <div className='camp-msg'>
      <h2>
         Best Way to Make a Difference in the Lives of Others
      </h2>
    </div>
    </>
  );
}

export default Campaign;