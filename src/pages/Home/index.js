import { HomeAllCategoriesGrid } from "../../components/common";
import { Slider } from "../../components/ui";
import PageTemplate from "../../templates/PageTemplate";
import { Container } from "./../../styled-components";

const Home = () => {
  return (
    <PageTemplate>
      <Slider autoScroll={true} intervalTime={5000} />
      <Container>
        <HomeAllCategoriesGrid />
      </Container>
    </PageTemplate>
  );
};

export default Home;
