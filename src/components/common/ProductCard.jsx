import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "./Button";

import formatNumber from "../../utils/formatNumber";

const ProductCard = ({
  pincipalImage,
  secondImage,
  name,
  price,
  productId,
  alt,
  categoryName,
}) => {
  return (
    <div className="card-product">
      <h3 className="name">{name}</h3>
      <Link to={`/product/${productId}`}>
        <div className="card-image">
          <img src={pincipalImage} alt={alt} />
          {secondImage ? <img src={secondImage} alt={alt} /> : null}
        </div>
      </Link>
      <div className="price">
        ${formatNumber(price)}
        <span className="price-original">
          <del>${formatNumber(price * 1.3)}</del>
        </span>
      </div>

      <Link to={`/product/${productId}`}>
        <div className="btn">
          <Button size="sm">
            Details
          </Button>
        </div>
      </Link>
      <h3 className="categoryName">{categoryName}</h3>
    </div>
  );
};

ProductCard.propTypes = {
  pincipalImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  alt: PropTypes.string,
  categoryName: PropTypes.string,
};

export default ProductCard;
