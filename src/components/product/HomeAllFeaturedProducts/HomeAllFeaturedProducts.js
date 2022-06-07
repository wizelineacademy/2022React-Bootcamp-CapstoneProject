import styled from "@emotion/styled";
import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { ProductCard } from "./../ProductCard";
import { createProductAdapter } from "./../../../adapters/featured-products";
import FeaturedProducts from "../../../mocks/en-us/featured-products.json";

const ProductsGrid = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HomeAllFeaturedProducts = () => {
  const productsData = createProductAdapter(FeaturedProducts);

  return (
    <SectionContainer>
      <SectionHeading>Featured Products</SectionHeading>
      <ProductsGrid>
        {productsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </SectionContainer>
  );
};

export default HomeAllFeaturedProducts;
