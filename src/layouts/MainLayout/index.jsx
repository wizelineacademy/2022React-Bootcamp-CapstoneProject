import { Outlet } from "react-router-dom";
// styles
import { RootLayout, WrapperLayout } from "../styled-components";
//
import MainNavbar from "./MainNavbar";

const MainLayout = () => {
  return (
    <RootLayout>
      <WrapperLayout>
        <MainNavbar />
        <Outlet />
      </WrapperLayout>
    </RootLayout>
  );
};

export default MainLayout;
