import PropTypes from "prop-types";
import React from "react";
import {
  AddToCardButton,
  Card,
  CategoryText,
  Picture,
  Title,
} from "./FeaturedItem.styled";
import { capitalizeString } from "utils/stringUtils";

const FeaturedItem = ({ itemData }) => {
  const { category, image, name, price } = itemData;
  return (
    <Card>
      <Picture alt={image.alt} src={image.url} />
      <Title>{name}</Title>
      <CategoryText>{capitalizeString(category)}</CategoryText>
      <AddToCardButton>
        Add to Cart&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${price}
      </AddToCardButton>
    </Card>
  );
};

FeaturedItem.propTypes = {
  itemData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default FeaturedItem;
