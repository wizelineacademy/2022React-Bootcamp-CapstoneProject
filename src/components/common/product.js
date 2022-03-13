import styled from "styled-components"
import FeaturedProducts from './../../mocks/en-us/featured-products.json';

export const productList = FeaturedProducts.results;

const ProductStyled = styled.div`
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

export const Product = ({n = 0}) => {
    const imageSource = productList[n].data.mainimage.url;
    const imageAlt = productList[n].data.mainimage.alt;
    const productName = productList[n].data.name;
    const productCategory = productList[n].data.category.slug;
    const productPrice = productList[n].data.price;
    return (
        <>
            <ProductStyled key={productList[n].id}>
                <p className="productName">{productName}</p>
                <p className="productCategory">{productCategory}</p>
                <img src={imageSource} alt={imageAlt}/>
                <p className="productPrice"><span>Price</span> ${productPrice}</p>
            </ProductStyled>
        </>
    )
}