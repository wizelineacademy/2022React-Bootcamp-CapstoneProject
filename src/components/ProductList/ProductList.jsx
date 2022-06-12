import {React, useState}  from 'react'
import {ProductListContainer, SidebarWrapper, ProductCard} from './ProductList.styled';
import mockProducts from '../../assets/mocks/en-us/product-categories.json';
import {Card, CardText} from '../../components/Products/Products.styled';
import mock3 from '../../assets/mocks/en-us/featured-products.json';

export default function ProductList() {
    const [selectedCategory, setSelectedCategory]= useState();

    let categories = mockProducts.results;
    const [products, setProducts] = useState(mock3.results);
    const clickHandler = (categoryName) => {
        //setSelectedCategory(categoryName)
        setProducts(mock3.results.filter(
            product => product.data.category.slug === categoryName))
    }
    return (
        <>
        <ProductListContainer>
            <SidebarWrapper>
                {categories.map((category,index) =>(
                    <ol onClick={e => clickHandler(category.slugs[0])}>{category.data.name}</ol>
                    ))} 
            </SidebarWrapper>
            <ProductCard>
            {products.map((product, index) => {
                    const productDetail = product.data;
                    return <Card 
                        key={productDetail.sku}
                        style={{ backgroundImage:`url(${productDetail.mainimage.url})` }}>
                        <CardText>
                            <h4 className="prod-name">{productDetail.name}</h4>
                            <p className="price" >${productDetail.price}</p>
                            <p><small>{productDetail.category.slug}</small></p> 
                        </CardText>
                    </Card>
                })}
            </ProductCard>
        </ProductListContainer>
        </>
    )
};
