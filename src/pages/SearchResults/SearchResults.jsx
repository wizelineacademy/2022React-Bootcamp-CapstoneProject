import { useSearchParams } from 'react-router-dom';
import { useSearchByParams } from '../../utils/hooks/useSearchByParams';
import Spinner from 'react-bootstrap/Spinner';
import FeaturedProductGrid from '../../components/ProductsGrids/FeaturedProductsGrid';
import { useEffect, useState } from 'react';
import PaginationWrapper from '../../styles/PaginationProductListBar.styled';
import Pagination from 'react-bootstrap/Pagination';

const SearchResults = () => {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSearchTerm = searchParams.get('q') ?? ''; // ?q={searchTerm}
    const { data: products, isLoading: productsLoading } =
        useSearchByParams(currentSearchTerm);
    const [currentPage, setCurrentPage] = useState(
        parseInt(products?.page) || 1
    );
    const [totalPages, setTotalPages] = useState(
        parseInt(products?.total_pages) || 1
    );
    debugger;

    useEffect(() => {
        setCurrentPage(parseInt(products?.page) || 1);
        setTotalPages(parseInt(products?.total_pages) || 1);
    }, [products]);

    const mid = parseInt(Math.floor(totalPages / 2)) || 1;

    return (
        <>
            <h2>Results for: {currentSearchTerm}</h2>
            {productsLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Searching...</span>
                </Spinner>
            ) : products?.results.length > 0 ? (
                <>
                    <FeaturedProductGrid
                        products={products}
                        isLoading={productsLoading}
                        limit={18}
                    />
                    <PaginationWrapper>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active={1 === currentPage}>
                            1
                        </Pagination.Item>

                        {mid && mid !== 1 && (
                            <>
                                <Pagination.Ellipsis />
                                <Pagination.Item active={mid === currentPage}>
                                    {mid}
                                </Pagination.Item>
                            </>
                        )}

                        {totalPages !== 1 && (
                            <>
                                <Pagination.Ellipsis />
                                <Pagination.Item
                                    active={totalPages === currentPage}>
                                    {totalPages}
                                </Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </>
                        )}
                    </PaginationWrapper>
                </>
            ) : (
                <p> There are no matches for this search </p>
            )}
        </>
    );
};

export default SearchResults;
