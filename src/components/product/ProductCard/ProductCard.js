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
import PropTypes from "prop-types";

const ProductCard = ({ id, title, category, price, urlImage, alt }) => {
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
        <ProductActions activeClass={activeClass} id={id} />
        <img src={urlImage} alt={alt} onLoad={loadImage} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
};

export default ProductCard;
