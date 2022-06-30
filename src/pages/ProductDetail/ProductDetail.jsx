import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
import Spinner from 'react-bootstrap/Spinner';
import ProductDetailInfo from '../../components/ProductDetail/ProductDetailInfo';

const ProductDetail = () => {
    const { productId } = useParams();
    const { data: productData, isLoading: productDataLoading } =
        useProductDetail(productId);
        
    return (
        <>
            {productDataLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <>
                {productData?.results.map((product) => (
                    <ProductDetailInfo key={product.id} product={product} />
                ))}</>
            )}
        </>
    );
};

export default ProductDetail;
