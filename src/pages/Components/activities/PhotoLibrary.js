import React from "react";
import Navigation from "../../../components/Navigation";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slider1 from "../../../media/slider1.jpg";
import slider2 from "../../../media/slider2.jpg";
import slider3 from "../../../media/slider3.jpg";
import slider4 from "../../../media/slider4.jpg";
import slider5 from "../../../media/slider5.jpg";
import slider6 from "../../../media/slider6.jpg";
import slider7 from "../../../media/school.jpg";
import slider8 from "../../../media/good_teacher.jpg";
import slider9 from "../../../media/item1.jpg";
import slider10 from "../../../media/slider10.jpg";


import FootPage from "../../../components/FootPage";

const images = [slider10, slider7, slider1, slider8, slider6, slider5, slider9, slider2, slider3, slider4];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const PhotoLibrary = () => {
  return (
    <div>
      <Navigation />{" "}
      <div className="photo-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%", height: "700px", objectFit: "cover" }}
              src={each}
              alt="slider"
            />
          ))}
        </Zoom>
      </div>
      <FootPage />
    </div>
  );
};

export default PhotoLibrary;
