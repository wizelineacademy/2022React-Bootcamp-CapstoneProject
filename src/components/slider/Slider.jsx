import React,{ useState } from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";
import dataSlider from "./data/banners.json";
import {device} from "../../utils/constants";


const Styles = styled.div`
  .slider-container {
    max-width: 100%;
    height: 700px;
    margin: 0 auto 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and ${device.tablet} {
    .slide-container{
      max-width: 90%;
    }
  }

  .active-anim {
    opacity: 1;
  }

  .btn-slide {
    width: 40px;
    height: 40px;
    background: rgba(241, 241, 241, 0.41);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-slide img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }

  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }

  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }

  .container-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }

  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
  }

  .dot.active {
    background: rgb(32, 32, 32);
  }
	
`

const Slider = () => {
	
	const { results: slidesData } = dataSlider;
	const [slideIndex, setSlideIndex] = useState(1);
	
	
	const nextSlide = () => {
		if (slideIndex !== slidesData.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === slidesData.length) {
			setSlideIndex(1);
		}
	}
	
	const prevSlide = () => {
		if (slideIndex === 1) {
			setSlideIndex(slidesData.length);
		} else if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		}
	}
	
	const renderSlides = () => {
		return slidesData.map((slide, index) => {
			const { data } = slide;
			const { main_image: imageProp } = data;
			return (
				<div
					key={slide.id}
					className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
				>
					<img
						src={imageProp?.url}
						alt={imageProp?.alt}
						width={imageProp?.dimensions?.width}
						height={imageProp?.dimensions?.height}
					/>
				</div>
			);
		})
	};
	
	const handleSlideIndex = (index) => setSlideIndex(index)
	
	const renderSlidesDots = () => slidesData.map((item, index) => (
		<div
			onClick={() => handleSlideIndex(index + 1)}
			className={slideIndex === index + 1 ? "dot active" : "dot"}
			key={item.id}
		> </div>
	));
	
	return (
		<Styles>
			<div className="slider-container">
				{renderSlides()}
				<SliderButton direction="next" move={nextSlide}/>
				<SliderButton direction="prev" move={prevSlide}/>
				{renderSlidesDots()}
			</div>
		</Styles>
	);
};

Slider.propTypes = {

}

export default Slider;
