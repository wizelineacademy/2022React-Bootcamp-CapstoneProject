import { HomeAllCategoriesGrid } from "../../components/common";
import { Slider } from "../../components/ui";
import { Container } from "./../../styled-components";
import { HomeAllFeaturedProducts } from "./../../components/product";
const Home = () => {
  return (
    <>
      <Slider autoScroll={true} intervalTime={5000} />
      <Container>
        <HomeAllCategoriesGrid />
        <HomeAllFeaturedProducts />
      </Container>
    </>
  );
};

export default Home;
