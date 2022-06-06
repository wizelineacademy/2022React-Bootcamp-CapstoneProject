import './App.css';
// import './style.css';

import Global from './style';


import "swiper/swiper-bundle.min.css";


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import featureProducts from "./mocks/en-us/featured-products.json";
import featureBanners from "./mocks/en-us/featured-banners.json";
import categories from "./mocks/en-us/product-categories.json";


function App() {
  
  const data  = {
      featureBanners,
      featureProducts,
      categories,
    };

  return (
    <>
      <Global />
      <Header />
      
      <main>
        <Home data={data} />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
