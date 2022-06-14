import React, { useState } from "react";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import {
  RootLayout,
  WrapperLayout,
} from "../styled-components/layout.styled.component";
import MainNavbar from "./MainNavbar";

const MainLayout = () => {
  const [navigation, setNavigation] = useState(0);

  let renderNavigation = null;
  switch (navigation) {
    case 0:
      renderNavigation = <Home setNavigation={setNavigation} />;
      break;
    case 1:
      renderNavigation = <Products />;
      break;

    default:
      break;
  }

  return (
    <RootLayout>
      <WrapperLayout>
        <MainNavbar setNavigation={setNavigation} />
        {renderNavigation}
      </WrapperLayout>
    </RootLayout>
  );
};

export default MainLayout;
