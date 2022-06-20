import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { ProductCard } from "./../ProductCard";
import { createProductAdapter } from "./../../../adapters";
import FeaturedProducts from "../../../mocks/en-us/featured-products.json";
import { ProductsGrid, ViewAllProducts } from "./styled";

const HomeAllFeaturedProducts = ({ handleNavigate }) => {
  const productsData = createProductAdapter(FeaturedProducts);

  return (
    <SectionContainer>
      <SectionHeading>Featured Products</SectionHeading>
      <ProductsGrid>
        {productsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
      <ViewAllProducts onClick={() => handleNavigate(false)}>
        View all products
      </ViewAllProducts>
    </SectionContainer>
  );
};

export default HomeAllFeaturedProducts;
