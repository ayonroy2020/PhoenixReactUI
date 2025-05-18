import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './carousal.css';

import camp1 from '../../images/camp1.png';
import camp2 from '../../images/pujocamp1.png';
import camp3 from '../../images/pujocamp2.png';

const images = [
  { src: camp1, label: 'Campaign 1', 
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    location: 'Kolkata',
    date: '1st October 2019'
 },
  { src: camp2, label: 'Campaign 2', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'Kolkata',
    date: '1st October 2019' },
  { src: camp3, label: 'Campaign 3', 
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    location: 'Kolkata',
    date: '1st October 2019' },
    { src: camp3, label: 'Campaign 4', 
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    location: 'Kolkata',
    date: '1st October 2019' },
  { src: camp3, label: 'Campaign 3', 
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    location: 'Kolkata',
    date: '1st October 2019' }
];

function Carousal() {
  return (
    <div><p className="text-center subheading">PHOENIX FOUNDATION</p>
    <h2 className='text-center work-h2 pb-2'>Our Campaigns</h2>
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={2000}>
         <div className="container2">
            <div className=''>
                <img src={image.src} alt={`${image.label}`} className='img-design'/>
            </div>
            <div className='div-c'>
                {/* <Carousel.Caption className='div-c'> */}
                    <h3 className='camp-name'>{image.label}</h3>
                    <p>Description: {image.text}</p>
                    <p>Location: {image.location}</p>
                    <p>Date: {image.date}</p>
                {/* </Carousel.Caption> */}
            </div>
        </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default Carousal;
