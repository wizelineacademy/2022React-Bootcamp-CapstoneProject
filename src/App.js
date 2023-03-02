import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HomepageContainer from './containers/HomepageContainer.js';
import Header from './components/Header';
import Footer from './components/Footer';
import './stylesheets/homepage/header.scss';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <>
      <Header />
      <HomepageContainer data={data} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
