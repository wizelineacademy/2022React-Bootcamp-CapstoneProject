import { Home } from "../src/components/Home/Home";
import styled from "styled-components";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

const Header = styled.header`
  background-color: #d7d4d3;
  padding-bottom: 5px;
`;
const Span = styled.span`
  font-family: sans-serif;
  font-size: 20px;
`;
const Input = styled.input`
  font-size: 15px;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 400px;
  padding: 8px;
  transition: 0.3s;
`;
const Img = styled.img`
  font-size: 15px;
  border-radius: 19px;
  padding-top: 10px;
  padding-left: 80px;
`;
const Footer = styled.footer`
  background-color: #d7d4d3;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 20px;
`;

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header>
        <Span>
        Lucy's Furniture Store
        </Span>
        <Input type="text" placeholder="Search for a furniture..." />
        <a href="/">
          <Img
            src="./shoppingCartLogo.png"
            alt="Cart Logo"
            width={40}
            height={40}
          />
        </a>
      </Header>

      <div>
        <br />
        <Home />
      </div>
      <br />

      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
    </>
  );
}

export default App;
