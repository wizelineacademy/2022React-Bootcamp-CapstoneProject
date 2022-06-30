import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Wrapper } from './slider.styled';
import { useBannersContext } from '../../context/banners_context';
import ItemsSlides from '../ItemsSlides/ItemsSlides';

/* CAROUSEL OPTIONS */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function Slider() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_banners: featured } = useBannersContext();

  /* SLIDES MAPPING */
  const itemsSlider = featured.map((slide) => (
    <ItemsSlides slide={slide} key={slide.id} />
  ));

  return (
    <Wrapper>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={5000}
        customTransition="transform 10ms ease-in-out"
        transitionDuration={500}
        containerClass="slider-container"
        dotListClass="custom-dot-list-style"
      >
        {itemsSlider}
      </Carousel>
    </Wrapper>
  );
}

export default Slider;
