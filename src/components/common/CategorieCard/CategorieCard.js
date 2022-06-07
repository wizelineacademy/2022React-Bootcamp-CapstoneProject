import { ArrowRight } from "../../icons";
import { CardContainer, CategorieLabel, CategorieLink } from "./styled";

const CategorieCard = ({ name, alt, urlImage }) => {
  return (
    <CardContainer>
      <CategorieLabel className="__animated-label" href="#!">
        {name}
      </CategorieLabel>
      <CategorieLink className="__animated-link" href="#!">
        See all <ArrowRight />
      </CategorieLink>
      <img src={urlImage} alt={alt} />
    </CardContainer>
  );
};

export default CategorieCard;
