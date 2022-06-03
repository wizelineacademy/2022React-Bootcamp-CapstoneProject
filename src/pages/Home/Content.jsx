import React from "react";
import Carousel, { CarouselItem } from "./components/Carousel";

const Content = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
  );
};

export default Content;
