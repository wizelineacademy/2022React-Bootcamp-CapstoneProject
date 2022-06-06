import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Wrapper } from "./_banners";
import productCategories from '../utils/mocks/product-categories.json';
import Slides from "./Slides";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const Banners = () => {

	const { results } = productCategories;

	const bannerSlider = results.map((banner, index) => (
		<Slides slide={ banner } key={ banner.id } />
	));

	return (
		<Wrapper>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={5000}
				customTransition="transform 10ms ease-in-out"
				transitionDuration={500}
				containerClass="banners-container"
				dotListClass="custom-dot-list-style"
			>
				{ bannerSlider }
			</Carousel>
		</Wrapper>
	 );
}

export default Banners;