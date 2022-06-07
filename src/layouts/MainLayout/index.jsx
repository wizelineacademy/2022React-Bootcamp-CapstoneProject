import React from "react";
import Home from "../../pages/Home/Home";
import {
  RootLayout,
  WrapperLayout,
} from "../styled-components/layout.styled.component";

const MainLayout = () => {
  return (
    <RootLayout>
      {/* TODO: TopBar */}
      <WrapperLayout>
        <Home />
      </WrapperLayout>
    </RootLayout>
  );
};

export default MainLayout;
