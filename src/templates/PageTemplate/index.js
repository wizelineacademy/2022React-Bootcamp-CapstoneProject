import { Header, Footer } from "../../components/layout";
import styled from "@emotion/styled";

const MainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageTemplate = ({ children, handleNavigate }) => {
  return (
    <MainLayout>
      <Header handleNavigate={handleNavigate} />
      {children}
      <Footer />
    </MainLayout>
  );
};

export default PageTemplate;
