import { ArrowRight } from "../../icons";
import { CardContainer, CategorieLabel, CategorieLink } from "./styled";

const CategorieCard = ({ name, alt, urlImage, slugs }) => {
  return (
    <CardContainer>
      <CategorieLabel
        className="__animated-label"
        to={`products?category=${slugs[0]}`}
      >
        {name}
      </CategorieLabel>
      <CategorieLink
        className="__animated-link"
        to={`products?category=${slugs[0]}`}
      >
        See all <ArrowRight />
      </CategorieLink>
      <img src={urlImage} alt={alt} />
    </CardContainer>
  );
};

export default CategorieCard;
