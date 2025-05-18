import React, { useState, useEffect } from 'react';
import "./Base.css";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faHandsHoldingChild} from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook,faSquareInstagram,faSquareTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import bg_1 from '../images/bg1.png';
import bg_2 from '../images/bg2.png';
import bg_3 from '../images/bg3.png';
// import team_1 from '../images/team-1.jpg'
import v1 from '../images/v1.png'
import d1 from '../images/d1.png'
import p1 from '../images/p1.png'
import e1 from '../images/e1.png'
import logo from '../images/logo.png'
import grp1 from '../images/grp1.png'
import pujo1 from '../images/pujocamp1.png'
import pujo2 from '../images/pujocamp2.png'
import camp1 from '../images/camp1.png'
import causes_1 from '../images/causes-1.jpg'
import causes_2 from '../images/causes-2.jpg'
import causes_7 from '../images/causes-7.jpg'
import causes_8 from '../images/causes-8.jpg'
import tapas from '../images/tapas.png'
import suvradip from '../images/suvradip.png'
import bikram from '../images/bikram.png'
import arnab from '../images/arnab.png'
 
function Home() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    bg_1,
    bg_2,
    bg_3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    {/* top section - 1 */}
    <section>
      <div className='background-slider'>
        <img src={images[currentImage]}
            className="d-block w-100 image-size"
            alt="bg-img"
          />
        <div className="text-container">
          <p>RISING HOPE</p>
          <h1>Giving Hope to the <br/> Homeless People</h1>
          <Button id='p'>BECOME A VOLUNTEER</Button>
        </div>
      </div>
    </section>
    {/* section - 2 */}
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
        <div className='right-div form-background-image'>
          <img src={logo}  className='plogo' alt="ngo logo" />
        </div>
    </section>
    {/* section - 3 */}
    <section>
      <div className='sec-3-contaner'>
        <div>
          <div className='div1'>
            <h3 className='sec-3-h3'>Become a Volunteer</h3>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few</p>
              <img src={v1} className='icon-img' id='img1' alt='v-1' />
          </div>
          <img src={grp1} alt='service-1'/>
        </div>
        <div>
          <div className='div2 '>
            <h3 className='sec-3-h3'>Quick <br /> Fundraising</h3>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few</p>
              <img src={p1} className='icon-img' id='img2' alt='v-1' />
          </div>
          <img src={pujo2} alt='service-1'  />
        </div>
        <div>
          <div className='div3 '>
            <h3 className='sec-3-h3'>Start <br /> Donating</h3>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few</p>
              <img src={d1} className='icon-img' id='img3' alt='v-1' />
          </div>
          <img src={pujo1} alt='service-1' />
        </div>
        <div>
          <div className='div4 '>
            <h3 className='sec-3-h3'>Get <br /> Involved</h3>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few</p>
              <img src={e1} className='icon-img' id='img4' alt='v-1' />
          </div>
          <img src={camp1} alt='service-1'/>
        </div>
      </div>
    </section>
    {/* section 4 */}
    <section className='sec-4'>
      <p className="camp-p">OUR CAMPAIGN</p>
      <h2>Donate Us to Help Them</h2>
      <div className='sec-4-contaner'>
        <div className='curved-div bg-div1'>
          <img src={causes_1} className='curved-image' alt='camp-1' style={{widows: '24px'}} />
          <h3 className='camp-h3'>Yash <br /> 2022</h3>
          <p>Campaign short details. Date time. How many of them we helped.</p>
          <Button>Donate Now</Button>
        </div>
        <div className='curved-div bg-div2'>
          <img src={causes_2} className='curved-image' alt='camp-1' style={{widows: '24px'}} />
          <h3 className='camp-h3'>Yash <br /> 2022</h3>
          <p>Campaign short details. Date time. How many of them we helped.</p>
          <Button>Donate Now</Button>
        </div>
        <div className='curved-div bg-div3'>
          <img src={causes_7} className='curved-image' alt='camp-1' style={{widows: '24px'}} />
          <h3 className='camp-h3'>Yash <br /> 2022</h3>
          <p>Campaign short details. Date time. How many of them we helped.</p>
          <Button>Donate Now</Button>
        </div>
        <div className='curved-div bg-div4'>
          <img src={causes_8} className='curved-image' alt='camp-1' style={{widows: '24px'}} />
          <h3 className='camp-h3'>Yash <br /> 2022</h3>
          <p>Campaign short details. Date time. How many of them we helped.</p>
          <Button>Donate Now</Button>
        </div>
      </div>
    </section>

    {/* section 5 */}
    <section className='sec-5'>
    <div className='sec-5-contaner'>
        <div className='page-color1'>
          <FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: '64px', margin: '12px', color: 'darkblue' }}/>
          <div className='column'>
            <h3>Facebook</h3>
            <p>2.7k Likes</p>
          </div>
        </div>
        <div className='page-color2'>
          <FontAwesomeIcon icon={faSquareInstagram} style={{ fontSize: '64px', margin: '12px', color: 'darkblue' }}/>
          <div className='column'>
            <h3>Instagram</h3>
            <p>2.7k Likes</p>
          </div>
        </div>
        <div className='page-color3'>
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '64px', margin: '12px', color: 'darkblue' }}/>
          <div className='column'>
            <h3>Linkedin</h3>
            <p>2.7k Likes</p>
          </div>
        </div>
        <div className='page-color4'>
          <FontAwesomeIcon icon={faSquareTwitter} style={{ fontSize: '64px', margin: '12px', color: 'darkblue' }}/>
          <div className='column'>
            <h3>Twitter</h3>
            <p>2.7k Likes</p>
          </div>
        </div>
      </div>
      <h2>Follow Our Pages</h2>
    </section>

    {/* section 6 */}
    <section className='sec-6'>
      <p className="camp-p">Volunteers</p>
      <h2>Our Expart Volunteers</h2>
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
                <h3>Arnab Shil</h3>
                <p>Ass. Secratory</p>
            </div>
        </div>
    </div>
    </section>
    </>
  );
}

export default Home;

