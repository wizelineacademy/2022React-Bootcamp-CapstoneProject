import PropTypes from "prop-types";
import React from "react";
import { BannerImage, Container, Title } from "./CarouselItem.styled";

const CarouselItem = ({ alt, categoryUrl, imageUrl, name }) => (
  <Container href={categoryUrl || "#"}>
    <BannerImage alt={alt} src={imageUrl} />
    <Title>{name}</Title>
  </Container>
);

CarouselItem.propTypes = {
  alt: PropTypes.string.isRequired,
  categoryUrl: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CarouselItem;
