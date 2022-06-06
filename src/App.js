import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import './App.css';
import mock1 from './assets/mocks/es-mx/featured-banners.json';
import mock2 from './assets/mocks/en-us/product-categories.json';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  const banners = mock1.results.map(result => result.data.main_image.url);
  const categories = mock2.results;
  return (
    <div className="App">
      <Header/>
      <Slideshow banners={banners}/>
      <Categories categories={categories}/>
      <Footer/>
    </div>
  );
}

export default App;
