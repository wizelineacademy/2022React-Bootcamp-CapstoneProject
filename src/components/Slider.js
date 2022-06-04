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
      <Row>
        <StyledSlider>
          <ContainerCenter>
            <IconLeftArrow onClick={prevSlide} />
            <Col lg="11">
              {SliderMock.results.map((item, index) => (
                <div key={item.data.id}>
                  {index === current && (
                    <>
                      <SlideImage
                        src={item.data.main_image.url}
                        alt={item.data.main_image.alt}
                      />
                      <CenteredTextTitle>{item.data.title}</CenteredTextTitle>
                    </>
                  )}
                </div>
              ))}
            </Col>
            <IconRightArrow onClick={nextSlide} />
          </ContainerCenter>
        </StyledSlider>
      </Row>
    </div>
  );
};

export default Slider;
