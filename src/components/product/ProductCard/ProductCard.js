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

const ProductCard = ({ title, category, price, slugs, urlImage, alt }) => {
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
        <ProductActions activeClass={activeClass} />
        <img src={urlImage} alt={alt} onLoad={loadImage} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
};

export default ProductCard;
