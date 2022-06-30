import ProductsGrid from '../../components/ProductsGrids/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PaginationWrapper from '../../styles/PaginationProductListBar.styled';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { useProducts } from '../../utils/hooks/useProducts';
import { useCategories } from '../../utils/hooks/useCategories';

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategoryFilters, setActiveCategoryFilters] = useState([]);
    const { data: products, isLoading: productsLoading } = useProducts();
    const { data: productCategories, isLoading: productCategoriesLoading } =
        useCategories();
    const [activeProducts, setActiveProducts] = useState(products);
    const [loading, setLoading] = useState(true);
    const currentyCategoryId = searchParams.get('category') ?? '';
    const [currentPage, setCurrentPage] = useState(
        parseInt(products?.page) || 1
    );
    const [totalPages, setTotalPages] = useState(
        parseInt(products?.total_pages) || 1
    );

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setActiveProducts(products);
        setCurrentPage(parseInt(products?.page) || 1);
        setTotalPages(parseInt(products?.total_pages) || 1);
        if (currentyCategoryId !== '') {
            setSearchParams({ category: currentyCategoryId });
            updateActiveFiltersAndProducts(currentyCategoryId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, currentyCategoryId]);

    const handleCategoryClick = (e) => {
        e.preventDefault();
        const categoryId = e.target?.id || [];
        updateActiveFiltersAndProducts(categoryId);
    };

    const GetUpdatedFilters = (categoryId) => {
        let updatedFilters = [];
        if (activeCategoryFilters.includes(categoryId)) {
            // delete if from the array
            updatedFilters = activeCategoryFilters.filter(
                (category) => category !== categoryId
            );
        } else {
            // add it to the active filterss
            updatedFilters = [...activeCategoryFilters, categoryId];
        }
        return updatedFilters;
    };

    const GetUpdatedProducts = (newActiveCategoryFilters) => {
        let newActiveProducts = products.results?.filter((product) => {
            return newActiveCategoryFilters.some(
                (categoryId) => product.data.category.id === categoryId
            );
        });
        if (newActiveCategoryFilters.length === 0) {
            newActiveProducts = products.results;
        }
        return newActiveProducts;
    };

    const updateActiveFiltersAndProducts = (categoryId) => {
        let newActiveCategoryFilters = [];
        newActiveCategoryFilters = GetUpdatedFilters(categoryId);
        // filter the products
        let newActiveProducts = GetUpdatedProducts(newActiveCategoryFilters);
        setActiveProducts({ ...activeProducts, results: newActiveProducts });
        setActiveCategoryFilters(newActiveCategoryFilters);
    };

    const handleClearFiltersClick = (e) => {
        e.preventDefault();
        const newActiveCategoryFilters = [];
        const newActiveProducts = products.results;
        setActiveProducts({ ...activeProducts, results: newActiveProducts });
        setActiveCategoryFilters(newActiveCategoryFilters);
    };
    const mid = parseInt(Math.floor(totalPages / 2)) || 1;
    return (
        <div>
            <h1 style={{ margin: '1px' }}>This is the Product List Page</h1>
            {productCategoriesLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Sidebar
                    categories={productCategories}
                    handleCategoryClick={handleCategoryClick}
                    activeCategoryFilters={activeCategoryFilters}
                    handleClearFiltersClick={handleClearFiltersClick}
                />
            )}
            <div>
                {loading || productsLoading || productCategoriesLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <>
                        <ProductsGrid products={activeProducts} />
                        {activeProducts?.results?.length > 0 &&
                            currentPage &&
                            totalPages && (
                                <PaginationWrapper>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active={1 === currentPage}>
                                        1
                                    </Pagination.Item>
                                    <Pagination.Ellipsis />

                                    {mid && mid !== 1 && (
                                        <Pagination.Item
                                            active={mid === currentPage}>
                                            {mid}
                                        </Pagination.Item>
                                    )}

                                    <Pagination.Ellipsis />
                                    <Pagination.Item
                                        active={totalPages === currentPage}>
                                        {totalPages}
                                    </Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </PaginationWrapper>
                            )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductList;
