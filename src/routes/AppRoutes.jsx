import React from "react";

import { Route, Routes } from "react-router-dom";

import { Home, ProductList, Product, Search, Cart, CheckOut } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default AppRoutes;
