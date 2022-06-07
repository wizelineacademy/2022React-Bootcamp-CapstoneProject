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

const ProductCard = ({ title, category, price, urlImage, alt }) => {
  const [activeClass, setActiveClass] = useState(false);

  const handleMouseEnter = () => {
    setActiveClass(true);
  };

  const handleMouseLeave = () => {
    setActiveClass(false);
  };

  return (
    <CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <CategoryLabel>
          <Label fill="#a1c5cc" />
          {category}
        </CategoryLabel>
        <ProductActions activeClass={activeClass} />
        <img src={urlImage} alt={alt} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
};

export default ProductCard;
