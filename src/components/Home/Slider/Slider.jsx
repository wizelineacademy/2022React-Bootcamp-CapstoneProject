import React, { useRef } from 'react';
import Banners from '../../../mocks/en-us/featured-banners.json';
import { ReactComponent as LeftArrowIcon } from '../../../images/iconmonstr-angel-left-thin.svg';
import { ReactComponent as RightArrowIcon } from '../../../images/iconmonstr-angel-right-thin.svg';
import { MainBox, SlideshowBox, Slide, Controls, Button } from './Slider.styled';

function Slider() {
  const slideshow = useRef(null);

  const nextPic = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = '700ms ease-out all';
      slideshow.current.style.transform = 'translateX(-100%)';

      const transitionTime = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = 'translateX(0)';
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transitionTime);
      };
      slideshow.current.addEventListener('transitionend', transitionTime);
    }
  };

  const lastPic = () => {
    if (slideshow.current.children.length > 0) {
      const lastPosition = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[lastPosition];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = 'translateX(-100%)';

      setTimeout(() => {
        slideshow.current.style.transition = '700ms ease-out all';
        slideshow.current.style.transform = 'translateX(0)';
      }, 30);
    }
  };

  const banners = Banners.results.map((item, i) => (
    <Slide key={`slide-${i}`}>
      <img src={item.data.main_image.url} alt="" />
    </Slide>
  ));

  return (
    <MainBox>
      <SlideshowBox ref={slideshow}>
        {banners}
      </SlideshowBox>
      <Controls>
        <Button onClick={lastPic}>
          <LeftArrowIcon />
        </Button>
        <Button right onClick={nextPic}>
          <RightArrowIcon />
        </Button>
      </Controls>
    </MainBox>
  );
}

export default Slider;

