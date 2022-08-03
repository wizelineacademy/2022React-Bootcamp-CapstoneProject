import React from "react";
import PropTypes from "prop-types";
// components
import {
  CategoryProduct,
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
} from "../styled-components/product.styled.component.js";
import { LinkStyle } from "../../../styled-components/global.styled.component.js";
//
import { fCurrency } from "../../../utils";
import { createCardProductAdapter } from "../../../adapters/product.adapter";

// ----------------------------------------------------------------------

const ProductCard = ({ product }) => {
  const productAdapter = createCardProductAdapter(product);
  return (
    <Product>
      <ProductPaper>
        <ProductTop>
          <LinkStyle to={`/product/${product.id}`}>
            <SpanContainer>
              <SpanTop />
              <ProductImage src={productAdapter.cover} alt={productAdapter.alt} width={50} />
            </SpanContainer>
          </LinkStyle>
        </ProductTop>
        <div style={{ padding: "1rem" }}>
          <ProductBottom>
            <ProductInfo>
              <LinkStyle to={`/product/${product.id}`} style={{ margin: "0px", textAlign: "left" }}>
                <ProductTitle>{productAdapter.name.trim()}</ProductTitle>
              </LinkStyle>
              <PriceProductBox>
                <CategoryProduct>{productAdapter.category}</CategoryProduct>
                <PriceProduct>{fCurrency(productAdapter.price)}</PriceProduct>
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
  product: PropTypes.object.isRequired,
};

export default ProductCard;
