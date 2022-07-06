import { Routes, Route, Navigate } from "react-router-dom";
import { PageTemplate } from "../templates";
import {
  Home,
  ProductList,
  ProductDetailPage,
  SearchResultsPage,
  CartPage,
  CheckoutPage,
} from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:productId" element={<ProductDetailPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};
