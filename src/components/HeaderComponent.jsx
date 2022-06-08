import styles from "../styles/Header.module.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const HeaderComponent = () => {
  const server = "https://d3jmn01ri1fzgl.cloudfront.net";
  const path =
    "/photoadking/webp_thumbnail/5f9294c203d69_template_image_1603441858.webp";
  return (
    <header>
      <a href="/" disabled>
        <img src={server + path} alt="Brand Logo" />
        <h2>Company Name</h2>
      </a>
      <div className={styles.buttons_container}>
        <div>
          <input
            className={styles.search_input}
            placeholder="what are you looking for?"
            disabled
          />
          <button className={styles.search_button} disabled>
            <FaSearch />
          </button>
        </div>
        <div className="cart-container">
          <button className={styles.cart_button}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
