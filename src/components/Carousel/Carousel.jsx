import CarouselItem from "components/CarouselItem";
import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  Icon,
  MobileContainer,
  Title,
} from "./Carousel.styled";
import leftChevron from "icons/leftchevron.svg";
import rightChevron from "icons/rightchevron.svg";
import useGetScreenWidth from "utils/hooks/useGetScreenWidth";
import screenSizes from "styles/screenSizes";

const Carousel = ({ itemList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = useGetScreenWidth();
  const isSmallDevice = screenWidth <= screenSizes.tablet;

  const currentItem = itemList[currentIndex];
  const {
    data: { main_image, name },
    href,
  } = currentItem;
  const { alt, url } = main_image;

  const handleClickNext = () => {
    const isLastItem = currentIndex + 1 === itemList.length;
    isLastItem ? setCurrentIndex(0) : setCurrentIndex((state) => state + 1);
  };

  const handleClickPrevious = () => {
    const isFirstItem = currentIndex === 0;
    isFirstItem
      ? setCurrentIndex(itemList.length - 1)
      : setCurrentIndex((state) => state - 1);
  };

  const renderMobile = () => (
    <MobileContainer>
      <CarouselItem alt={alt} categoryUrl={href} imageUrl={url} name={name} />
      <Container>
        <Button onClick={handleClickPrevious}>
          <Icon alt="Previous Category" src={leftChevron} />
        </Button>
        <Button onClick={handleClickNext}>
          <Icon alt="Previous Category" src={rightChevron} />
        </Button>
      </Container>
    </MobileContainer>
  );

  const renderDesktop = () => (
    <Container>
      <Button onClick={handleClickPrevious}>
        <Icon alt="Previous Category" src={leftChevron} />
      </Button>
      <CarouselItem alt={alt} categoryUrl={href} imageUrl={url} name={name} />
      <Button onClick={handleClickNext}>
        <Icon alt="Previous Category" src={rightChevron} />
      </Button>
    </Container>
  );

  return (
    <Fragment>
      <Title>Product Categories</Title>
      {isSmallDevice ? renderMobile() : renderDesktop()}
    </Fragment>
  );
};

export default Carousel;
