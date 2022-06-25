
import { Routes, Route } from 'react-router-dom';
import Home from '././components/Home/Home';
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
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<ProductDetail />}/>
        <Route path="/search" element={<SearchResults/>} />
      </Routes> 
      <Footer />
</div>

)}
