/* eslint-disable max-len */
import { Slide } from "react-slideshow-image";
import banners from "./featured-banners.json";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import categories from "./product-categories.json";
// import Gallery from "react-grid-gallery";
// import products from "./product-categories.json";

const WrapperSlide = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const WrapperCarousel = styled.section`
  padding: 4em;
  background: gray;
`;

export const Home = () => {
  return (
    <div>
      <WrapperSlide>
      <Slide>
        {banners.map((slideImage) => (
          <>
            {slideImage.results.map((data) => (
              <div className="each-slide" key={data.id}>
                <img src={data.data.main_image.url} alt={data.data.main_image.alt}
                width={data.data.main_image.dimensions.width} height={data.data.main_image.dimensions.height}/>
                  <p>{data.data.main_image.alt}</p>
              </div>
            ))}
          </>
        ))}
      </Slide>
      </WrapperSlide>
      <WrapperCarousel>

      <Carousel autoPlay showThumbs={false}>
        {categories.map((categories) =>
          <>
            {categories.results.map((data) => (
              <div className="each-image" key={data.id}>
                <img src={data.data.main_image.url} alt={data.data.main_image.alt}
                width={data.data.main_image.dimensions.width} height={data.data.main_image.dimensions.height} />
                  <p>{data.data.main_image.alt}</p>
              </div>
            ))}
          </>
        )}
      </Carousel>
      </WrapperCarousel>

{/*
      {products.map((product) => (
        <>
          {product.results.map((data) => (
            <Gallery images={data.data.main_image.url} />
          ))}
        </>
      ))}
 */}
    </div>
  );
};
