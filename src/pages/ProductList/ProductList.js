import SidebarComponent from "../../components/Sidebar/SidebarComponent";
import ProductGridComponent from "../../components/ProductGrid/ProductGridComponent";
import * as Styles from "./product-list-styles";
const productCategories = require("../../mocks/en-us/product-categories.json");
const products = require("../../mocks/en-us/products.json");

export default function ProductList() {
  return (
    <Styles.ProductListPage>
      <h1>This is the Product List Page</h1>
      <Styles.ContentContainer>
        <Styles.Sidebar>
          <SidebarComponent categories={productCategories.results} />
        </Styles.Sidebar>
        <Styles.Products>
          <ProductGridComponent
            className="products"
            products={products.results}
          />
        </Styles.Products>
      </Styles.ContentContainer>
    </Styles.ProductListPage>
  );
}
