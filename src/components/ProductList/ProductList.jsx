import {React, useState, useEffect}  from 'react'
import {ProductListContainer,SidebarWrapper,ProductCard,PaginationList} from './ProductList.styled';
import mockProducts from '../../assets/mocks/en-us/product-categories.json';
import {Card, CardText} from '../../components/Products/Products.styled';
import mock3 from '../../assets/mocks/en-us/featured-products.json';

export default function ProductList() {
    const [selectedCategories, setSelectedCategories]= useState([]);
    const [products, setProducts] = useState([]);
    
    const clickHandler = (categoryName) => {
        const indexToRemove= (selectedCategories.indexOf(categoryName))
        if(indexToRemove !== -1) {
            setSelectedCategories(prevValue => prevValue.splice(indexToRemove, 1))
        } else {
            setSelectedCategories(prevValue => [...prevValue, categoryName])
        }
    }

    useEffect(() => {
        setProducts(mock3.results.filter(
            product => {
                let result = false;
                for(let i = 0; i < selectedCategories.length; i++) {
                    if(selectedCategories[i]=== product.data.category.slug){
                        result = true;
                        break;
                    }
                }
                return result;
            }))
    }, [selectedCategories])

    return (
        <ProductListContainer>
            <SidebarWrapper>
                {mockProducts.results.map((category,index) => {
                    return <ol 
                    key={category.data.name}
                    className={
                        selectedCategories.some((element)=> element === category.slugs[0])  
                        ? "is-active": ""} 
                    onClick={e => clickHandler(category.slugs[0])}>{category.data.name}</ol>
                })}; 
            </SidebarWrapper>
            <ProductCard>
            {products.map((product) => {
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
                <PaginationList>
                <a href=".">0</a>
                <a href=".">1</a>
                <a href=".">2</a>
                <a href=".">3</a>
                <a href=".">4</a>
                </PaginationList>
            </ProductCard>
            
        </ProductListContainer>
    )
};
