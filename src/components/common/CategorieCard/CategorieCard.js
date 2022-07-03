import { ArrowRight } from "../../icons";
import { CardContainer, CategorieLabel, CategorieLink } from "./styled";
import PropTypes from "prop-types";

const CategorieCard = ({ id, name, alt, urlImage, slugs }) => {
  return (
    <CardContainer>
      <CategorieLabel
        className="__animated-label"
        to={`products?category=${slugs[0]}+${id}`}
      >
        {name}
      </CategorieLabel>
      <CategorieLink
        className="__animated-link"
        to={`products?category=${slugs[0]}+${id}`}
      >
        See all <ArrowRight />
      </CategorieLink>
      <img src={urlImage} alt={alt} />
    </CardContainer>
  );
};

CategorieCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  alt: PropTypes.string,
  urlImage: PropTypes.string,
  slugs: PropTypes.array,
};

export default CategorieCard;
