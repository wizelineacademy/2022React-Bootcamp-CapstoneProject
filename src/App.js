import { useState } from "react";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import { Button } from "./components/Products/Products.styled";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import "./App.css";
import mock1 from "./assets/mocks/es-mx/featured-banners.json";
import mock2 from "./assets/mocks/en-us/product-categories.json";
import mock3 from "./assets/mocks/en-us/featured-products.json";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const [activeProductList, setActiveProductList] = useState(false);

  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  const banners = mock1.results.map((result) => result.data.main_image.url);
  const categories = mock2.results;
  const products = mock3.results;
  
  return (
    <div className="App">
      <Header setActiveProductList={setActiveProductList}/>
      {activeProductList ? (
        <ProductList />
      ) : (
        <>
          <Slideshow banners={banners} />
          <Categories categories={categories} />
          <Products products={products} />
        </>
      )}
      <Button onClick={e => setActiveProductList(!activeProductList)} >View all products</Button>
      <Footer />
    </div>
  );
}

export default App;
