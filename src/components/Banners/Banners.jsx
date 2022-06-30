import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Wrapper } from './banners.styled';
import { useCategoriesContext } from '../../context/categories_context';
import ItemsBanners from '../ItemsBanners/ItemsBanners';

/* CAROUSEL OPTIONS */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
};

function Banners() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_categories: featured } = useCategoriesContext();

  /* SLIDES MAPPING */
  const bannerSlider = featured.map((banner) => (
    <ItemsBanners slide={banner} key={banner.id} />
  ));

  return (
    <Wrapper>
      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={5000}
        customTransition="transform 10ms ease-in-out"
        transitionDuration={500}
        containerClass="banners-container"
        dotListClass="custom-dot-list-style"
      >
        {bannerSlider}
      </Carousel>
    </Wrapper>
  );
}

export default Banners;
