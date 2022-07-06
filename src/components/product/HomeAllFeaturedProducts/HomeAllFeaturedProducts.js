import { SectionHeading, SectionContainer } from "./../../../styled-components";
import { ViewAllProducts } from "./styled";
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../../../utils";
import { SpinnerBounce } from "../../ui";
import Grid from "./../Grid/Grid";

const HomeAllFeaturedProducts = () => {
  const { data: productsData, isLoading } = useFeaturedProducts();

  return (
    <SectionContainer>
      <SectionHeading>Featured Products</SectionHeading>
      {isLoading ? <SpinnerBounce /> : <Grid productsList={productsData} />}
      <ViewAllProducts>
        <Link to="products">View all products</Link>
      </ViewAllProducts>
    </SectionContainer>
  );
};

export default HomeAllFeaturedProducts;
