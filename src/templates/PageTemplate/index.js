import { Header, Footer } from "../../components/layout";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
