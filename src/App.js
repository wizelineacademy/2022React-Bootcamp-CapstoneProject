import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from './pages/Home';
import { NoPage } from "./pages/NoPage";
import { Product } from "./pages/products";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

