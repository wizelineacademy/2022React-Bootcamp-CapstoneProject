import React, { useEffect, useState } from "react";
import { GlobalStyles } from './styles/global';
import { Header, Footer } from './components';

import {
  Home,
  ProductListPage,
} from './pages';

function App() {

  const [navigation, setNavigation] = useState({ pages: "" });

  const renderPagination = {
    HOME: <Home switchNavigation={ switchNavigation } />,
    PLP: <ProductListPage />,
  };

  function switchNavigation (page) {
    setNavigation(page);
  }

  useEffect(() => {
    setNavigation("HOME");
  }, []);

  return (
    <>
      <GlobalStyles />
			<Header switchNavigation={ switchNavigation } />
        { renderPagination[navigation] }
      <Footer/>
    </>
  );
}

export default App;
