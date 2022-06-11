import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Slider from '../../components/Slider/Slider';
import FeaturedProductGrid from '../../components/ProductsGrids/FeaturedProductsGrid';

import { featuredBanners } from '../../mocks/en-us/featured-banners';
import { productCategories } from '../../mocks/en-us/product-categories';
import { featuredProducts } from '../../mocks/en-us/featured-products';
import Button from '../../styles/ButtonSeeMore.styled';

const Home = () => {
  return (
    <div style={{paddingBottom: "2rem"}}>
      <ProductCategories categories={productCategories} />
      <Slider featuredBanners={featuredBanners} />
      <FeaturedProductGrid products={featuredProducts} />
      <Button to="/products">View all products</Button>
    </div>
  );
};

export default Home;
