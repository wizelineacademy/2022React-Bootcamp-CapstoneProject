import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Slider from '../../components/Slider/Slider';
import FeaturedProductGrid from '../../components/ProductsGrids/FeaturedProductsGrid';
// import { featuredProducts } from '../../mocks/en-us/featured-products';
import Button from '../../styles/ButtonSeeMore.styled';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useCategories } from '../../utils/hooks/useCategories';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';

const Home = () => {
    const { data: featuredBannersData, isLoading: featuredBannersLoading } =
        useFeaturedBanners();
    const { data: categoriesData, isLoading: categoriesLoading } =
        useCategories();
    const { data: featuredProductsData, isLoading: featuredProductsLoading } =
        useFeaturedProducts();

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <ProductCategories
                categories={categoriesData}
                isLoading={categoriesLoading}
            />
            <Slider
                isLoading={featuredBannersLoading}
                featuredBanners={featuredBannersData}
            />
            <FeaturedProductGrid
                products={featuredProductsData}
                isLoading={featuredProductsLoading}
                limit={16}
            />
            <Button to="/products">View all products</Button>
        </div>
    );
};

export default Home;
