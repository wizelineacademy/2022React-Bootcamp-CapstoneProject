import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './SliderDetail.styles.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

export const Slider = ({images}) => (
  <div id='xxx'>

    <AliceCarousel
        mouseTracking
        items={images}
        responsive={responsive}
        controlsStrategy="alternate"
    />
  </div>
);