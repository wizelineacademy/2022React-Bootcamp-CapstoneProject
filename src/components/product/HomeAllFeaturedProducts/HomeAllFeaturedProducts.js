import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { ProductCard } from "./../ProductCard";
import { createProductAdapter } from "./../../../adapters";
import FeaturedProducts from "../../../mocks/en-us/featured-products.json";
import { ProductsGrid, ViewAllProducts } from "./styled";
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "./../../../utils/hooks/useFeaturedProducts";
import { SpinnerBounce } from "../../ui";

const HomeAllFeaturedProducts = () => {
  const { data: productsData, isLoading } = useFeaturedProducts();

  return (
    <SectionContainer>
      <SectionHeading>Featured Products</SectionHeading>
      {isLoading ? (
        <SpinnerBounce />
      ) : (
        <ProductsGrid>
          {productsData?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductsGrid>
      )}
      <ViewAllProducts>
        <Link to="products">View all products</Link>
      </ViewAllProducts>
    </SectionContainer>
  );
};

export default HomeAllFeaturedProducts;
