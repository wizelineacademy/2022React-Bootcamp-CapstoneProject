import React from "react";

import { Home } from "../pages";
import { Footer, Header } from "./index";

const Layout = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <div className="main">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
