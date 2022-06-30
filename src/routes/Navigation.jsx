import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductListPage, ProductDetail, SearchPage } from '../pages';
import { Header, Footer } from '../components';

function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:searchword" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
