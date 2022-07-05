import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const ProductSlider = ({ controls, auto, timeOut, data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = data?.results;

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === totalSlides.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, totalSlides]);

  const prevSlide = () => {
    const index =
      activeSlide - 1 < 0 ? totalSlides.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut ?? 3000);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, auto]);

  return (
    <div className="product-slider">
      {totalSlides?.map((item, index) => (
        <ProductSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {controls ? (
        <div className="control">
          <div className="item" onClick={prevSlide}>
            <i className="bx bx-chevron-left" />
          </div>
          <div className="item">
            <div className="index">
              {activeSlide + 1}/{totalSlides?.length}
            </div>
          </div>
          <div className="item" onClick={nextSlide}>
            <i className="bx bx-chevron-right" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

ProductSlider.propTypes = {
  controls: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
  data: PropTypes.object.isRequired,
};

const ProductSliderItem = (props) => (
  <div className={`slide-item ${props.active ? "active" : ""}`}>
    <div className="item-image">
      <img src={props.item.data.main_image.url} alt="" />
    </div>

    <div className="item-info">
      <div className="info-title">
        <span>{props.item.data.title}</span>
      </div>
      <div className="info-description">
        <span>{props.item?.data?.description[0]?.text}</span>
      </div>
    </div>
  </div>
);

export default ProductSlider;
