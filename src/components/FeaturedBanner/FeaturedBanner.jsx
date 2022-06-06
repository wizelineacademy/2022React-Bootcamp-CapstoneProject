import React from "react";
import { Banner, Container, Slider, Title } from "./FeaturedBanner.styled";

const FeaturedBanner = ({ itemList }) => {
  return (
    <Container>
      <Title>Featured Banners</Title>
      <Slider>
        {itemList.map((item) => {
          const { data } = item;
          const {
            main_image: { alt, url },
          } = data;
          return <Banner alt={alt} key={item.id} src={url} />;
        })}
      </Slider>
    </Container>
  );
};

export default FeaturedBanner;
