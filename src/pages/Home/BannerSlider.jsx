import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Carousel, { CarouselItem } from "./components/Carousel";
import { SpinerLoader } from "../../styled-components/global.styled.component";
import {
  BannerInfo,
  ItemContainer,
} from "./styled-components/carousel.styled.component";
//
import { useFeaturedBanners } from "../../utils/hooks";
import { startGetInfo } from "../../redux/actions/bannerSlider";

// ----------------------------------------------------------------------

const BannerSlider = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(startGetInfo(data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const featuredBanners = useSelector((state) => state.banners);

  return (
    <div>
      {featuredBanners.loading ? (
        <div style={{ marginTop: "1rem" }}>
          <SpinerLoader />
        </div>
      ) : (
        <Carousel>
          {featuredBanners.results &&
            featuredBanners.results.map((item) => (
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

export default BannerSlider;
