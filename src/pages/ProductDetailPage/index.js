import { useParams } from "react-router-dom";
import { useProduct } from "./../../utils";
import { Container } from "./../../styled-components/Container";
import Gallery from "../../components/product/Gallery/Gallery";
import styled from "@emotion/styled";
import { Details, SpinnerBounce } from "./../../components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 8px;
  margin-bottom: 50px;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  flex: 1;
`;

const ProductDetailPage = () => {
  let { productId } = useParams();
  const { data: product, isLoading } = useProduct(productId);
  const { urlImage, gallery } = product;

  return (
    <Container>
      <Content>
        {isLoading ? (
          <SpinnerBounce />
        ) : (
          <>
            <Wrapper>
              <Gallery main={urlImage} gallery={gallery} />
            </Wrapper>
            <Wrapper>
              <Details product={product} />
            </Wrapper>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ProductDetailPage;
