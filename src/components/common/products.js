import styled from "styled-components"
import FeaturedProducts from './../../mocks/en-us/featured-products.json';
import { Product } from "./product";

const productList = FeaturedProducts.results;

const ProductStyled = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    border: 2px solid #3d1d0f;
    border-radius: 15px;
    justify-content: space-between;
    img {
        width: 100%;
    }
    p {
        margin: 5px;
    }
    .productName {
        font-size: 1.5rem;
        text-align: left;
        color: #3d1d0f;
        font-weight: 500;
    }
    .productCategory {
        font-size: 1rem;
        font-weight: 300;
        color: #543528;
    }
    .productPrice {
        font-size: 1.3rem;
        font-weight: 600;
        color: #4f1902;
        text-align: right;
        span {
            font-weight: 400;
        }
    }
`

export const Products= () => {
    return (
        <>
            {productList.map((product, i) => {
                return (
                    <ProductStyled key={productList[i].id}>
                        <Product n={i}/>
                    </ProductStyled>
                )
            })}
        </>
    )
}