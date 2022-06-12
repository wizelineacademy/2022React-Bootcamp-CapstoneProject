import SidebarComponent from "../../components/Sidebar/SidebarComponent";
import ProductGridComponent from "../../components/ProductGrid/ProductGridComponent";
import * as Styles from "./product-list-styles";
import { useState, useEffect } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
const productCategories = require("../../mocks/en-us/product-categories.json");
const products = require("../../mocks/en-us/products.json");

export default function ProductList() {
  const [filters, setFilters] = useState([]);
  const [component, setComponent] = useState("loading");

  const productsFilteredByCategories = products.results.filter((product) => {
    if (filters.length > 0) {
      return filters.includes(product.data.category.slug);
    } else {
      return product;
    }
  });

  const renderPage = {
    loading: <LoadingComponent />,
    plp: (
      <Styles.ContentContainer>
        <Styles.Sidebar>
          <SidebarComponent
            categories={productCategories.results}
            setFilters={setFilters}
          />
        </Styles.Sidebar>
        <Styles.Products>
          <ProductGridComponent
            className="products"
            products={productsFilteredByCategories}
          />
        </Styles.Products>
      </Styles.ContentContainer>
    ),
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setComponent("plp");
    }, 2000);
  }, []);

  return (
    <Styles.ProductListPage>
      <h1>This is the Product List Page</h1>
      {renderPage[component]}
    </Styles.ProductListPage>
  );
}
