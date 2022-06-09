import React, { useState } from 'react';
import { Col, Row, TopSpace, ContainerCenter } from '../styles/Home.style';
import {
  SlideImage,
  StyledSlider,
  IconLeftArrow,
  IconRightArrow,
  CenteredTextTitle,
} from '../styles/Banner.style';
import SliderMock from '../mocks/en-us/featured-banners.json';

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = 3;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <TopSpace />
      <Row centered>
        <IconLeftArrow onClick={prevSlide} />
        <Col lg="11" xs="9" md="11">
          {SliderMock.results.map(
            ({ data: { main_image, title, id } }, index) => (
              <div key={id}>
                {index === current && (
                  <>
                    <SlideImage src={main_image.url} alt={main_image.alt} />
                    <CenteredTextTitle>{title}</CenteredTextTitle>
                  </>
                )}
              </div>
            ),
          )}
        </Col>
        <IconRightArrow onClick={nextSlide} />
      </Row>
    </div>
  );
};

export default Slider;
