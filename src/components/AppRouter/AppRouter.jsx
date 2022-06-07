import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import ProductList from '../../pages/ProductList/ProductList';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/products" element={<ProductList />} />
  </Routes>
);

export default AppRouter;
