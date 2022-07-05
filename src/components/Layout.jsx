import React from "react";

import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

import CategoryState from "../context/Category/CategoryState";
import SearchState from "../context/Search/SearchState";
import CartState from "../context/Cart/CartState";

import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <CartState>
          <CategoryState>
            <SearchState>
              <Header />
              <div className="container">
                <div className="main">
                  <AppRoutes />
                </div>
              </div>
              <Footer />
            </SearchState>
          </CategoryState>
        </CartState>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
