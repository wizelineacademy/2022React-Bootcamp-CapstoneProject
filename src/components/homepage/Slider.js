import React, { useState, useEffect } from 'react'
import SlidesData from '../../mocks/en-us/featured-banners.json';

import '../../stylesheets/homepage/content.scss';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { setSlideIndex(1) }
    if (slideIndex < 1) { setSlideIndex(slides.length) }
  }, [slideIndex]);

  return (
    <div className='slider-container'>
      {SlidesData.results.map((slide, i) =>
        <div key={slide.id}
          className={(i === (slideIndex - 1)) ? 'slide fade show' : 'slide fade hide'}>
          <img alt="slide-img" src={slide.data.main_image.url} />
        </div>
      )}

      <button className="prev"
        onClick={() => setSlideIndex(slideIndex - 1)}
      >❮</button>
      <button className="next"
        onClick={() => setSlideIndex(slideIndex + 1)}
      >❯</button>
    </div>
  )
}

export default Slider