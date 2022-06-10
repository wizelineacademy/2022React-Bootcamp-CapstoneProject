import * as Styles from "./header-styles";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const HeaderComponent = () => {
  const server = "https://d3jmn01ri1fzgl.cloudfront.net";
  const path =
    "/photoadking/webp_thumbnail/5f9294c203d69_template_image_1603441858.webp";
  return (
    <Styles.StyledHeader>
      <Styles.BrandButton href="/" disabled>
        <Styles.BrandImage src={server + path} alt="Brand Logo" />
        <h2>Company Name</h2>
      </Styles.BrandButton>
      <Styles.ButtonsContainer>
        <div>
          <Styles.SearchInput
            placeholder="what are you looking for?"
            disabled
          />
          <Styles.SearchButton disabled>
            <FaSearch />
          </Styles.SearchButton>
        </div>
        <div className="cart-container">
          <Styles.CartButton>
            <FaShoppingCart />
          </Styles.CartButton>
        </div>
      </Styles.ButtonsContainer>
    </Styles.StyledHeader>
  );
};

export default HeaderComponent;
