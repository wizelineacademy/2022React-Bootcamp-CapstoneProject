import { useParams } from "react-router-dom";
import { useProduct } from "./../../utils";
import { Container } from "./../../styled-components/Container";
import Gallery from "../../components/product/Gallery/Gallery";
import { Details, SpinnerBounce } from "./../../components";
import { Content, Wrapper } from "./styled";

const ProductDetailPage = () => {
  let { productId } = useParams();
  const { data: product, isLoading } = useProduct(productId);
  const { gallery } = product;

  return (
    <Container>
      <Content>
        {isLoading ? (
          <SpinnerBounce />
        ) : (
          <>
            <Wrapper>
              <Gallery gallery={gallery} />
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
