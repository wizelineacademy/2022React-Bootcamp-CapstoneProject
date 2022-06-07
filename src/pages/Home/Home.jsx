import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Slider from '../../components/Slider/Slider';
import FeaturedProductGrid from '../../components/FeaturedProductsGrid/FeaturedProductsGrid';

import { featuredBanners } from '../../mocks/en-us/featured-banners';
import { productCategories } from '../../mocks/en-us/product-categories';
import { featuredProducts } from '../../mocks/en-us/featured-products';

const Home = () => {
  return (
    <>
      <ProductCategories categories={productCategories} />
      <Slider featuredBanners={featuredBanners} />
      <FeaturedProductGrid products={featuredProducts} />
    </>
  );
};

export default Home;
