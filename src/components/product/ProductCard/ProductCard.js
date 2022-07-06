import React from "react";
import { Label } from "./../../icons";
import { useState } from "react";
import { ProductActions } from "./../";
import {
  CardWrapper,
  CardHeader,
  CategoryLabel,
  CardBody,
  CardName,
  CardPrice,
} from "./styled";
import { types } from "./proptypes";

const ProductCard = React.memo(function ProductCard({ product }) {
  const { title, category, price, urlImage, alt } = product;
  const [activeClass, setActiveClass] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => {
    setActiveClass(true);
  };

  const handleMouseLeave = () => {
    setActiveClass(false);
  };

  const loadImage = () => {
    setIsLoading(false);
  };

  return (
    <CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isLoading ? "loading" : null}`}
    >
      <CardHeader>
        <CategoryLabel>
          <Label fill="#a1c5cc" />
          {category}
        </CategoryLabel>
        <ProductActions activeClass={activeClass} product={product} />
        <img src={urlImage} alt={alt} onLoad={loadImage} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
});

ProductCard.propTypes = types;

export default ProductCard;
