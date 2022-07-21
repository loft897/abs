import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slider1 from '../media/slider1.jpg';
import slider2 from '../media/slider2.jpg'
import slider3 from '../media/slider3.jpg';
// import slider3 from '../media/logo_abs.gif';
import slider4 from '../media/slider4.jpg';


const images = [slider4, slider2, slider3, slider1,];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slider = () => {
    return (
      <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%", height: "700px", objectFit: "cover" }} src={each} alt="slider"/>
        ))}
      </Zoom>
    </div>
    );
};

export default Slider;