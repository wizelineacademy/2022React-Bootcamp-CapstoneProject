import React from "react";
import PropTypes from "prop-types";
// components
import { DetailsPaper, GridContainer, GridItem } from "../styled-components";
import CarouselThumbnail from "./CarouselThumbnail";
import ProductInfo from "./ProductInfo";

const ProductDetails = ({ product }) => {
  return (
    <DetailsPaper>
      <GridContainer>
        <GridItem>
          <div style={{ boxSizing: "border-box" }}>
            <CarouselThumbnail images={product?.images} />
          </div>
        </GridItem>
        <GridItem>
          <div style={{ padding: "24px" }}>
            <ProductInfo product={product} />
          </div>
        </GridItem>
      </GridContainer>
    </DetailsPaper>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ProductDetails;
