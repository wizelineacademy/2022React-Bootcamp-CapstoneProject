import React from "react";
import Carousel, { CarouselItem } from "./components/Carousel";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { SpinerLoader } from "../../styled-components/global.styled.component";
import {
  BannerInfo,
  ItemContainer,
} from "./styled-components/carousel.styled.component";

const ContentTop = () => {
  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <div>
      {isLoading ? (
        <div style={{ marginTop: "1rem" }}>
          <SpinerLoader />
        </div>
      ) : (
        <Carousel>
          {data.results &&
            data.results.map((item) => (
              <CarouselItem key={item.id} image={item.data.main_image.url}>
                <ItemContainer>
                  <BannerInfo>
                    <h3>{item.data.title}</h3>
                  </BannerInfo>
                </ItemContainer>
              </CarouselItem>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default ContentTop;
