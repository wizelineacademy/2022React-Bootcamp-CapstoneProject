import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Wrapper } from "./_slider";
import featuredBanners from '../utils/mocks/featured-banners.json';
import Slides from "./Slides";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {

	const { results } = featuredBanners;

	const itemsSlider = results.map((slide, index) => (
		<Slides slide={ slide } key={ slide.id } />
	));

	return (
		<Wrapper>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={5000}
				customTransition="transform 10ms ease-in-out"
				transitionDuration={500}
				containerClass="slider-container"
				dotListClass="custom-dot-list-style"
			>
				{ itemsSlider }
			</Carousel>
		</Wrapper>
	 );
}

export default Slider;