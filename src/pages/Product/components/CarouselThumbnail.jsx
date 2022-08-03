import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
// themes
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/carousel.css";
// components
import {
  BoxBottom,
  BoxControls,
  BoxSlide,
  BoxSlideB,
  BoxTop,
  BoxTopContent,
  ButtonControl,
  FillButton,
  IndexInfo,
} from "../styled-components";
import { SVGIcon } from "../../../styled-components/global.styled.component";

const CarouselThumbnail = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeSlide, setActiveSlide] = useState(0);

  const settingsNav2 = {
    arrows: false,
    infinite: true,
    lazyLoad: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const settingsNav1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    lazyLoad: true,
  };

  return (
    <>
      <BoxTop>
        <BoxTopContent>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            {...settingsNav2}
          >
            {images &&
              images.map((item, index) => (
                <div key={`slick2-image-${index}`}>
                  <BoxSlide>
                    <LazyLoadImage
                      alt={item.image.alt || "photo"}
                      src={item.image.url} // use normal <img> attributes as props
                      //   width={image.width}
                      effect="blur"
                      wrapperClassName="wrapper"
                    />
                  </BoxSlide>
                </div>
              ))}
          </Slider>
          <BoxControls>
            <ButtonControl onClick={nav2?.slickPrev}>
              <SVGIcon
                style={{
                  transform: "scalex(-1)",
                  width: "1em",
                  height: "1em",
                }}
              >
                <path
                  fill="currentColor"
                  d="M10.46 18a2.23 2.23 0 0 1-.91-.2a1.76 1.76 0 0 
                  1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 
                  0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 
                  2.06 0 0 1-1.3.46Z"
                />
              </SVGIcon>
              <FillButton />
            </ButtonControl>
            <IndexInfo>
              {activeSlide + 1}/{images?.length}
            </IndexInfo>
            <ButtonControl onClick={nav2?.slickNext}>
              <SVGIcon
                style={{
                  width: "1em",
                  height: "1em",
                }}
              >
                <path
                  fill="currentColor"
                  d="M10.46 18a2.23 2.23 0 0 1-.91-.2a1.76 1.76 0 0 
                  1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 
                  0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 
                  2.06 0 0 1-1.3.46Z"
                />
              </SVGIcon>
              <FillButton />
            </ButtonControl>
          </BoxControls>
        </BoxTopContent>
      </BoxTop>

      <BoxBottom>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          focusOnSelect={true}
          {...settingsNav1}
        >
          {images &&
            images.map((item, index) => (
              <div key={`slick1-image-${index}`} style={{ paddingLeft: "6px" }}>
                <BoxSlideB className={"box-cover"}>
                  <LazyLoadImage
                    alt={item.image.alt || "photo"}
                    src={item.image.url} // use normal <img> attributes as props
                    //   width={image.width}
                    wrapperClassName="wrapper"
                  />
                </BoxSlideB>
              </div>
            ))}
        </Slider>
      </BoxBottom>
    </>
  );
};

CarouselThumbnail.propTypes = {
  images: PropTypes.array,
};

export default CarouselThumbnail;
