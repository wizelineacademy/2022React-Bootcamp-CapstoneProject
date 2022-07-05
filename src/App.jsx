import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Header, Home, Footer } from './components';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import { SearchResults } from './components/SearchResults/SearchsResults';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { ROUTES } from './utils/constants';

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);
  console.log('my Cart', shoppingCart);
   return (
    <>
      <Header itemCounter={shoppingCart}/>
      <Routes>
        <Route path={ROUTES.base} element={<Home />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.productList} element={<ProductList />} />
        <Route
          path={`${ROUTES.productDetail}/:id`} 
          element={
            <ProductDetail 
              setShoppingCart={setShoppingCart} 
              shoppingCart={shoppingCart}
              />} />
        <Route path={`${ROUTES.searchResults}`} element={<SearchResults />} />
        <Route path={ROUTES.shoppingCart} element={<ShoppingCart items={shoppingCart}/>} />
      </Routes>
      <Footer text='Ecommerce created during Wizeline’s Academy React Bootcamp' />
    </>
  );
}

export default App;
