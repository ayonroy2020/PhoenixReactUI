import React, { useState, useEffect } from 'react';
import "../Base.css";
import bg_1 from '../../images/bg1.png';
import bg_2 from '../../images/bg2.png';
import bg_3 from '../../images/bg3.png';
// import plogo from '../images/plogo.png'

 
function StartSection() {

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
      </div>
    </section>
    </>
  );
}

export default StartSection;