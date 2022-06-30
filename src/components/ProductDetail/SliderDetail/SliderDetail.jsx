import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './SliderDetail.styles.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

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
