import { Routes, Route, Navigate } from "react-router-dom";
import { PageTemplate } from "../templates";
import { Home } from "../pages";
import ProductList from "./../pages/ProductList/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="products" element={<ProductList />} />
      </Route>
    </Routes>
  );
};
