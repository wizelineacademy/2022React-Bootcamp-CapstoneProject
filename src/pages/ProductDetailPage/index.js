import { useParams } from "react-router-dom";
import { useProduct } from "./../../utils";
import { Container } from "./../../styled-components/Container";
import Gallery from "../../components/product/Gallery/Gallery";
import { Details, SpinnerBounce } from "./../../components";
import { Content, Wrapper } from "./styled";
import ErrorBoundary from "./../../error/ErrorBoundary/ErrorBoundary";

const ProductDetailPage = () => {
  let { productId } = useParams();
  const { data: product, isLoading } = useProduct(productId);

  return (
    <Container>
      <Content>
        {isLoading ? (
          <SpinnerBounce />
        ) : (
          <>
            <Wrapper>
              <Gallery gallery={product.gallery} />
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
