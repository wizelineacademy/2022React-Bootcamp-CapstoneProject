import styled from "@emotion/styled";
import { ArrowRight } from "../../icons";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  & * {
    transition: all ease-in-out 0.3s;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover .__animated-label {
    transform: translate(-50%, -50px);
  }

  &:hover .__animated-link {
    filter: opacity(1);
    transform: translate(-50%, -20px);
  }

  &:hover img {
    transform: scale(1.1) translate(20px, 15px);
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:before {
    position: absolute;
    content: "";
    z-index: 23;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all ease-in-out 0.3s;
  }
`;

const CategorieLabel = styled.a`
  position: absolute;
  z-index: 24;
  text-decoration: none;
  font-size: 32px;
  color: white;
  font-weight: 500;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const CategorieLink = styled.a`
  position: absolute;
  text-decoration: none;
  filter: opacity(0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 24;
  font-size: 20px;
  color: white;
  font-weight: 500;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
`;

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
