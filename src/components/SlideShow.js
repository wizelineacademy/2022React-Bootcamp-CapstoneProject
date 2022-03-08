import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://www.w3schools.com/howto/img_woods_wide.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_3.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_4.jpg"
];

const properties = {
  //duration: 5000,
  //transitionDuration: 500,
  //infinite: true,
  //indicators: true,
  //arrows: true,
  //pauseOnHover: true,
//  onChange: (oldIndex, newIndex) => {
//    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//  }
};

const SlideShow = () => {
  return (
    <>
      <h2>SlideShow</h2>
      <div className="slide-container">

      </div>
    </>
  );
};

export default SlideShow;