import {useState, useEffect} from 'react';
import styled from 'styled-components';

import itemsData from '../mocks/feature-products.json';
import categoriesData from '../mocks/product-categories.json';

import ItemGrid from './ItemGrid';
import Item from './Item';
import SliceBar from './SliceBar';
import PageNavigation from './PageNavigation';

const StyledProducts = styled.div`
    display: flex;
    flex: 1;

    height: 100%;
`;
const StyledProductsSliceBarContainer = styled.div`
    margin-right: ${({theme}) => theme.coreSpace * 2}px;
`;
const StyledProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Products = () => {
    const [areItemsLoaded, setItemsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [areCategoriesLoaded, setCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [activeCategories, setActiveCategories] = useState(new Set());

    useEffect(() => {
        setTimeout(() => {
            setItems(itemsData.results);
            setItemsLoaded(true);
            setCategories(categoriesData.results);
            setCategoriesLoaded(true);
        }, 2000);
    }, [])

    const toggleCategoryState = (category) => {
        const newActiveCategories = new Set(activeCategories);
        if (activeCategories.has(category)) {
            newActiveCategories.delete(category);
        } else {
            newActiveCategories.add(category);
        }
        setActiveCategories(newActiveCategories);
    };

    const filteredItems = 
        (activeCategories.size === 0 || activeCategories.size === items.results.length)
        ? items
        : items.filter(item => activeCategories.has(item.data.category.id));

    return(
        <StyledProducts>
            <StyledProductsSliceBarContainer>
                <SliceBar 
                    loading={areCategoriesLoaded}
                    items={categories}
                    activeItems={activeCategories}
                    toggleItemState={toggleCategoryState}
                />
            </StyledProductsSliceBarContainer>
            <StyledProductsContainer>
                <h1>This is the Product List Page</h1>
                <ItemGrid
                    loading={areItemsLoaded}
                >
                    {
                        filteredItems.map(item => 
                            <Item
                                key={item.id}
                                detail={item.data}
                            />
                        )    
                    }
                </ItemGrid>
                <PageNavigation/>
            </StyledProductsContainer>
        </StyledProducts>
    );
};

export default Products;