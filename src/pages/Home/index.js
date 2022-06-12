import { HomeAllCategoriesGrid } from "../../components/common";
import { Slider } from "../../components/ui";
import PageTemplate from "../../templates/PageTemplate";
import { Container } from "./../../styled-components";
import { HomeAllFeaturedProducts } from "./../../components/product";

const Home = () => {
  return (
    <PageTemplate>
      <Slider autoScroll={true} intervalTime={5000} />
      <Container>
        <HomeAllCategoriesGrid />
        <HomeAllFeaturedProducts />
      </Container>
    </PageTemplate>
  );
};

export default Home;
