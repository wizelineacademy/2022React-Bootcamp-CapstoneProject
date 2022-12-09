import React from "react";
import PropTypes from "prop-types";
import {
  CategoryCard,
  CategoryCardContent,
  CategoryCardMedia,
  CategoryCardSvgIcon,
  CategoryGrid,
  CategoryName,
  CoverImg,
} from "../styled-components";
import { LinkStyle } from "../../../styled-components/global.styled.component";

const CategoryBanner = ({ image, title }) => {
  return (
    <CategoryGrid>
      <LinkStyle
        to={`/products?filter=~(categories~(~'${title
          .toLowerCase()
          .replace(" & ", "--")}))`}
      >
        <CategoryCard>
          <CategoryCardMedia>
            <CategoryCardSvgIcon src="/static/icons/shape-avatar.svg" />
            <CoverImg alt={title} src={image} />
          </CategoryCardMedia>
          <CategoryCardContent>
            <CategoryName>{title}</CategoryName>
          </CategoryCardContent>
        </CategoryCard>
      </LinkStyle>
    </CategoryGrid>
  );
};

CategoryBanner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryBanner;
