import { Slider } from "../../components/ui";
import PageTemplate from "../../templates/PageTemplate";

const Home = () => {
  return (
    <PageTemplate>
      <Slider autoScroll={true} intervalTime={5000} />
    </PageTemplate>
  );
};

export default Home;
