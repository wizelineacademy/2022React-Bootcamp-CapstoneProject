import Global from "./global";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import featuredProducts from "./mocks/en-us/featured-products.json";
import banners from "./mocks/en-us/featured-banners.json";
import categories from "./mocks/en-us/product-categories.json";

function App() {
  return (
    <>
      <Global />
      <Navbar />
      <Home
        categories={categories.results}
        products={featuredProducts.results}
        banners={banners.results}
      />
      <Footer />
    </>
  );
}

export default App;
