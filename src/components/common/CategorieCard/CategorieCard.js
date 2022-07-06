import { ArrowRight } from "../../icons";
import { CardContainer, CategorieLabel, CategorieLink } from "./styled";
import { types } from "./proptypes";

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

CategorieCard.propTypes = types;

export default CategorieCard;
