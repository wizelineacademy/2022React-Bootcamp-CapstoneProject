import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

import formatNumber from "../../utils/formatNumber";

const ProductCard = ({
  pincipalImage,
  secondImage,
  name,
  price,
  slug,
  alt,
}) => {
  return (
    <div className="card-product">
      <a href="/">
        <div className="card-image">
          <img src={pincipalImage} alt={alt} />
          {secondImage ? <img src={secondImage} alt={alt} /> : null}
        </div>
        <h3 className="name">{name}</h3>
        <div className="price">
          ${formatNumber(price)}
          <span className="price-original">
            <del>${formatNumber(price * 1.3)}</del>
          </span>
        </div>

        <div className="btn">
          <Button size="sm">View</Button>
        </div>
      </a>
    </div>
  );
};

ProductCard.propTypes = {
  pincipalImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ProductCard;
