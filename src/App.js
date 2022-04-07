import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from './pages/Home';
import { NoPage } from "./pages/NoPage";
import { Product } from "./pages/products";
import {ProductDetail} from "./pages/productDetail";
import {BuscarTest} from "./pages/buscar";
import {SearchDetail} from "./pages/searchDetail"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NoPage />} />
        <Route path="home" element={<Home />} />
        <Route path="buscar" element={<BuscarTest />} />
        <Route path="searchDetail" element={<SearchDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

