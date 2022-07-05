import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useGeneralRequest } from "../utils/hooks/useGeneralRequest";

import CartContext from "../context/Cart/CartContext";

import {
  Button,
  Loading,
  NotFound,
  ProductQuantityControl,
} from "../components/common";

import formatNumber from "../utils/formatNumber.js";


import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import Swiper core and required modules
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";


// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);


const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const cartContext = useContext(CartContext);
  const { productId } = useParams();
  const { data, isLoading } = useGeneralRequest(
    `&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`
  );
  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState("");
  const [productNotFound, setProductNotFound] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!isLoading && data.results_size > 0) {
      setProductInfo(data.results[0]);
      setProductNotFound(true);
      setPreviewImg(data?.results[0]?.data?.mainimage?.url);
    }
  }, [data, isLoading]);

  const updateQuantity = (type) => {
    const stock = productInfo?.data?.stock;
    type === "plus"
      ? setQuantity(quantity + 1 <= stock ? quantity + 1 : quantity)
      : setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const addProductToCart = () => {
    const productData = {
      productId: productId,
      mainImage: productInfo?.data?.mainimage?.url,
      productName: productInfo?.data?.name,
      unitPrice: productInfo?.data?.price,
      quantity: quantity,
      stock: productInfo?.data?.stock,
    };
    cartContext.addProduct(productData);
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  if (isLoading) {
    return <Loading text="Loading product data..." />;
  }

  return !productNotFound ? (
    <NotFound text="Product Not Found" />
  ) : (
    <div className="product-details">
      <div className="product-details_box">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {productInfo?.data?.images.map((img, index) => (
            <SwiperSlide>
              <img src={img.image.url} alt={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {productInfo?.data?.images.map((img, index) => (
            <SwiperSlide>
              <img src={img.image.url} alt={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-details_images">
        <div className="product-details_images_main">
          <h1 className="product-details_info_title">
            {productInfo?.data?.name}
          </h1>
          <div className="product-description_title">Description</div>
          <div className="product-description_content">
            {productInfo?.data?.description[0]?.text}
          </div>
          <div className="product-details_info_item_title">Specs</div>
          <table className="product-details_info_item_specs">
            <tbody>
              {productInfo?.data?.specs?.map((item, index) => (
                <tr key={index}>
                  <td>{item.spec_name}</td>
                  <td>{item.spec_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <table className="product-details_info_item_specs">
          <tbody>
            <tr key="Category">
              <td>Category</td>
              <td>{productInfo?.data?.category?.slug}</td>
            </tr>
            <tr key="Tags">
              <td>Tags</td>
              <td>{productInfo?.tags?.join(", ")}</td>
            </tr>
            <tr key="SKU">
              <td>SKU</td>
              <td>{productInfo?.data?.sku}</td>
            </tr>
            <tr key="Price">
              <td>Price</td>
              <td>{formatNumber(productInfo?.data?.price)}</td>
            </tr>

            <tr key="SKU">
              {cartContext.state.items.filter((e) => e.productId === productId)
                .length === 0 && (
                <ProductQuantityControl
                  title="Quantity"
                  quantity={quantity}
                  updateQuantity={updateQuantity}
                />
              )}
            </tr>
          </tbody>
        </table>
        <div className="product-details_info_item">
          <Button
            handler={() =>
              cartContext.state.items.filter((e) => e.productId === productId)
                .length === 0
                ? addProductToCart()
                : handleNavigate("/cart")
            }
          >
            {cartContext.state.items.filter((e) => e.productId === productId)
              .length === 0
              ? "Add To Order"
              : "Go To Order"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
