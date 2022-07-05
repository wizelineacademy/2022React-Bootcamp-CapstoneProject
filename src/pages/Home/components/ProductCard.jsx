import React from "react";
import PropTypes from 'prop-types';
import { fCurrency } from "../../../utils/formatNumber";
import {
  LinkName,
  PriceProduct,
  PriceProductBox,
  Product,
  ProductAction,
  ProductBottom,
  ProductButton,
  ProductImage,
  ProductInfo,
  ProductPaper,
  ProductTitle,
  ProductTop,
  SpanContainer,
  SpanTop,
} from "../styled-components/product.styled.component";

const ProductCard = ({ image, alt, name, price }) => {
  return (
    <Product>
      <ProductPaper>
        <ProductTop>
          <a href="/" style={{ textDecoration: "none" }}>
            <SpanContainer>
              <SpanTop />
              <ProductImage src={image} alt={alt} width={50} />
            </SpanContainer>
          </a>
        </ProductTop>
        <div style={{ padding: "1rem" }}>
          <ProductBottom>
            <ProductInfo>
              <LinkName href="/">
                <ProductTitle>{name.trim()}</ProductTitle>
              </LinkName>
              <PriceProductBox>
                <PriceProduct>{fCurrency(price)}</PriceProduct>
              </PriceProductBox>
            </ProductInfo>
            <ProductAction>
              <ProductButton>+</ProductButton>
            </ProductAction>
          </ProductBottom>
        </div>
      </ProductPaper>
    </Product>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard;
