
import { Routes, Route } from 'react-router-dom';
import HomePage from '././components/HomePage/HomePage';
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from './components/ProductDetail/ProductDetail';
import SearchResults from './components/SearchResults/SearchResults';
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="product-list" element={<ProductList/>}/>
        <Route path="product-detail" element={<ProductDetail />}/>
        <Route path="search-results/:product" element={<SearchResults/>} />
      </Routes> 
      <Footer />
</div>

)}
