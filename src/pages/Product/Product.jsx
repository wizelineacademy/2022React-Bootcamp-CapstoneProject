import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// components
import Page from "../../components/Page";
import { SpinerLoader } from "../../styled-components/global.styled.component";
import { Container } from "./styled-components";
import Topbar from "./components/Topbar";
import ProductDetails from "./components/ProductDetails";
import ProductResume from "./components/ProductResume";
//
import { useProductDetail } from "../../utils/hooks";
import { startGetInfo } from "../../redux/actions/product";

// ----------------------------------------------------------------------

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data, isLoading } = useProductDetail(productId);
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      // setProduct(productDetailsAdapter(data));
      dispatch(startGetInfo(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const product = useSelector((state) => state.product);

  return (
    <Page title="Product Details | Ecommerce">
      <Container>
        {product.loading ? (
          <SpinerLoader />
        ) : (
          <>
            <Topbar name={product?.name} />
            <ProductDetails product={product} />
            <ProductResume
              description={product?.description}
              specs={product?.specs}
            />
          </>
        )}
      </Container>
    </Page>
  );
};

export default Product;
