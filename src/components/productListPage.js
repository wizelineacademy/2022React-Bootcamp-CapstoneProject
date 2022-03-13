import { SideBar } from "./categorySideBar";
import styled from "styled-components"
import { Product, productList } from "./common/product";
import { useState } from 'react';
import { ProductGrid } from "./common/grid";

const ProductListStyled = styled.div`
    display: flex;
    align-items: flex-start;
    .listItems {
        display: flex;
        flex-wrap: wrap;
    }
`
const ListStyled = styled.div `
    display: block
    padding: 10px;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #3d1d0f;
    img {
        width: 200px;
    }
`

const Filtered = ({activeCategory}) => {

    const categories =  productList.filter(category => 
        category.data.category.slug.toLowerCase() === 
        activeCategory.toLowerCase()).map((filteredCategory, i) => 
           <ListStyled key={filteredCategory.id}>
               <Product n={i} />
            </ListStyled>)
    
    const condition = activeCategory === "";
    
    return (condition ? <ProductGrid /> : 
    (categories.length === 0 ? <p> No products available for this category</p> 
    : categories))
}

export const ProductListPage = () => {
    const [activeCategory, setActiveCategory] = useState("");

    return ( 
        <ProductListStyled>
            <SideBar setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
            <div className="listItems">
                <Filtered activeCategory={activeCategory}/>
            </div>
        </ProductListStyled>
    );
}