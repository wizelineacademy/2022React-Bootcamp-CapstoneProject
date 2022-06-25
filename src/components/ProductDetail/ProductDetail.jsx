import React, { useState, useEffect } from "react";
import { useProductDetailed } from "../../utils/hooks/useProductDetailed";
import { SingleProduct, Details, SpecsContainer } from "./ProductDetail.styled";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Import Swiper styles
import "./ProductDetail.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { useParams } from "react-router-dom";
// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default function ProductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState();
  const { data, isLoading } = useProductDetailed(productId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (data.results) {
      setProductDetail(data.results[0]);
    }
  }, [data]);
  return (
    <SingleProduct>
      {!isLoading && productDetail && (
        <>
          <div className="row">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              {productDetail.data.images.map((image) => (
                <SwiperSlide key={image.image.url}>

                  <img src={image.image.url} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={false}
              className="mySwiper"
            >
              {productDetail.data.images.map((image) => (
                <SwiperSlide key={image.image.url}>
                  <img src={image.image.url} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Details>
            <div className="product-card">
              <h1>{productDetail.data.name}</h1>
              <label className="price">${productDetail.data.price}</label>
              <label className="sku-code">{productDetail.data.sku}</label>
              <label className="slug">{productDetail.data.category.slug}</label>
              <div className="tag-container">
                <span>{productDetail.tags.join("/")}</span>
              </div>
              <p className="description">
              {productDetail.data.short_description}
              </p>
              <input type="number" placeholder="Numbers" />
              <button className="add-cart">
                {" "}
                <span>Add to cart</span>
              </button>
              <button className="add-cart">
                <span>Buy now</span>
              </button>
            </div>
          </Details>
          
          <SpecsContainer>
              <h2>Caracteristics:</h2>
              <table>
                <thead>
                {productDetail.data.specs.map((spec) => (
                  <tr>
                    <th>
                    <p key={spec.spec_name}>
                      {spec.spec_name}</p>
                    </th>
                    <td>
                      <p key={spec.spec_value}>
                        {spec.spec_value}</p>
                    </td>
                  </tr>
                  ))}
                </thead>
              </table>
            </SpecsContainer> 
        </>
      )}
    </SingleProduct>
  );
}
