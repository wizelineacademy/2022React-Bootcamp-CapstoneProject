import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '././components/Home/Home';
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from './components/ProductDetail/ProductDetail';
import SearchResults from './components/SearchResults/SearchResults';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from "./components/Footer/Footer";
import "./App.css";
import { ShoppingCartContext } from './contexts/ShoppingCart';

export default function App() {
  const [items , setItems] = useState([]);
  const updateItems = newItems => {
    setItems([...newItems])
  }
  const addItem = item => {
    setItems([...items, item])
  }
  return (
    <div className="App">
      <ShoppingCartContext.Provider value={{updateItems, items, addItem }}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="/search" element={<SearchResults/>} />
          <Route path="/cart" element={<ShoppingCart/>}/>
        </Routes> 
        <Footer />
    </ShoppingCartContext.Provider>
</div>

)}
