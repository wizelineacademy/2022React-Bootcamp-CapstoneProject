import styled from "@emotion/styled";
import { Label } from "./../../icons";

const CardWrapper = styled.div`
  background-color: #f2f4f5;
  height: 600px;
`;
const CardHeader = styled.div`
  background-color: #f2f4f5;
  position: relative;
  height: 400px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const CategoryLabel = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 400;
  position: absolute;
  font-size: 18px;
  top: 5px;
  left: 5px;
`;

const CardBody = styled.div`
  position: relative;
  color: var(--gray);
  height: 200px;
  padding: 18px 22px;
`;

const CardName = styled.h3`
  font-weight: 400;
  font-size: 22px;
`;

const CardPrice = styled.p`
  font-weight: 400;
  font-size: 18px;
  position: absolute;
  bottom: 15px;
`;

const ProductCard = ({ title, category, price, urlImage, alt }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CategoryLabel>
          <Label fill="#a1c5cc" />
          {category}
        </CategoryLabel>
        <img src={urlImage} alt={alt} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
};

export default ProductCard;
