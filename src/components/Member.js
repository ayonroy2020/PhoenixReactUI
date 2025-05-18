import React from 'react';
import StartSection from './related_comp/StartSection'
import { Button } from 'react-bootstrap';
import tapas from '../images/tapas.png'
import suvradip from '../images/suvradip.png'
import bikram from '../images/bikram.png'
import arnab from '../images/ayon.png'
import DynamicCardList from './DynamicCardList';
import './Membercard.css'

function Member() {
  return (
    <>
    <div>
      <StartSection />
      <div className="text-container">
        <p>PHOENIX FOUNDATION</p>
        <h1>Our Volunteers</h1>
        <Button id='p'>BECOME A VOLUNTEER</Button>
      </div>
    </div>
     {/* section 6 */}
     <section className='sec-6'>
     <p className="camp-p">Volunteers</p>
     <h2>Our Top Management</h2>
     <div class="card-container">
       <div>
         <div class="card">
             <img src={tapas} alt="Alex Martin" />
         </div>
         <div class="card-content yellow">
               <h3>Tapas Biswas</h3>
               <p>President</p>
           </div>
       </div>
       
       <div>
         <div class="card">
             <img src={suvradip} alt="Alex Martin" />
         </div>
         <div class="card-content red">
               <h3>Suvradip Ghosh</h3>
               <p>Vice President</p>
           </div>
       </div>
       <div>
         <div class="card">
             <img src={bikram} alt="Alex Martin" />
         </div>
         <div class="card-content blue">
               <h3>Bikramjit Dey </h3>
               <p>Secratory</p>
           </div>
       </div>
       <div>
         <div class="card">
             <img src={arnab} alt="Alex Martin" />
         </div>
         <div class="card-content green">
               <h3>Ayon Roy</h3>
               <p>Ass. Secratory</p>
           </div>
       </div>
   </div>
   </section>

   <section className='member'>
    <p className="camp-p">Volunteers</p>
      <h2>Our Expart Volunteer</h2>
      <div>
        <DynamicCardList />
      </div>
   </section>
   </>
  );
}

export default Member;