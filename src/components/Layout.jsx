import React, { useState } from "react";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Footer from "./Footer";
import Header from "./Header";

import { VIEW_PAGE } from "../utils/constants";

const Layout = () => {
  const [pageToRender, setPageToRender] = useState(VIEW_PAGE.HOME);

  const handleNavigation = (page) => {
    setPageToRender(page);
  };

  return (
    <div className="page-container">
      <Header
        changePage={pageToRender !== VIEW_PAGE.HOME ? handleNavigation : null}
      />
      <div className="container">
        <div className="main">
          {pageToRender === VIEW_PAGE.HOME ? (
            <Home navigate={handleNavigation} />
          ) : (
            <ProductList />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
