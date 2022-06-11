import ProductsGrid from '../../components/ProductsGrids/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';
import { products } from '../../mocks/en-us/products';
import { productCategories } from '../../mocks/en-us/product-categories';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PaginationWrapper from '../../styles/PaginationProductListBar.styled';

import Pagination from 'react-bootstrap/Pagination';
const ProductList = () => {
    const [activeCategoryFilters, setActiveCategoryFilters] = useState([]);
    const [activeProducts, setActiveProducts] = useState(products);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const handleCategoryClick = (e) => {
        e.preventDefault();
        const categoryId = e.target?.id || [];
        let newActiveCategoryFilters = [];
        if (activeCategoryFilters.includes(categoryId)) {
            // delete if from the array
            newActiveCategoryFilters = activeCategoryFilters.filter(
                (category) => category !== categoryId
            );
        } else {
            // add it to the active filterss
            newActiveCategoryFilters = [...activeCategoryFilters, categoryId];
        }
        // filter the products
        let newActiveProducts = products.results?.filter((product) => {
            return newActiveCategoryFilters.some(
                (categoryId) => product.data.category.id === categoryId
            );
        });
        if (newActiveCategoryFilters.length === 0) {
            newActiveProducts = products.results;
        }
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

    return (
        <div>
            <h1 style={{ margin: '1px' }}>This is the Product List Page</h1>
            <Sidebar
                categories={productCategories}
                handleCategoryClick={handleCategoryClick}
                activeCategoryFilters={activeCategoryFilters}
                handleClearFiltersClick={handleClearFiltersClick}
            />
            <div>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <>
                        <ProductsGrid products={activeProducts} />
                        {activeProducts?.results?.length > 0 && (
                            <PaginationWrapper>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
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
