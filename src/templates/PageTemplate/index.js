import { Header, Footer } from "../../components/layout";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const MainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
`;

const PageTemplate = () => {
  return (
    <MainLayout>
      <Header />
      <Outlet />
      <Footer />
    </MainLayout>
  );
};

export default PageTemplate;
