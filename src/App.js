import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HomepageContainer from './containers/HomepageContainer.js';
import './stylesheets/homepage/header.scss';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <>
      <HomepageContainer data={data} isLoading={isLoading}/>
    </>
  );
}

export default App;
