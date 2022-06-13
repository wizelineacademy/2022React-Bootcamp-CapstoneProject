import { useState } from "react";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import { Button } from "./components/Products/Products.styled";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [activeProductList, setActiveProductList] = useState(false);

  return (
    <div className="App">
      <Header setActiveProductList={setActiveProductList}/>
      {activeProductList ? (
        <ProductList />
      ) : (
        <>
          <Slideshow/>
          <Categories/>
          <Products/>
        </>
      )}
      <Button 
      className="btn-container" 
      onClick={e => setActiveProductList(!activeProductList)} >View all products</Button>
      <Footer />
</div>

)}
