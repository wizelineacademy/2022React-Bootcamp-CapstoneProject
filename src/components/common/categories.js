import FeaturedCategories from './../../mocks/en-us/product-categories.json';
import styled from "styled-components"
import { CategoryButton } from '../categoryButton';

const categoryList = FeaturedCategories.results;

const CategoriesStyled = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    justify-content: space-between;
    &:not(:lastChild) {
        border-right: 2px solid #543528;
    }
    img {
        width: 100%;
    }
    p {
        margin: 5px;
    }
    .categoryName {
        font-size: 1.5rem;
        text-align: center;
        color: #3d1d0f;
        font-weight: 500;
    }
`
const FilterCategoriesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .categoryName {
        font-size: 1.5rem;
        text-align: center;
        color: #3d1d0f;
        font-weight: 500;
    }
    .categoryClick {
        border: none;
        background: none;
        &:hover {
            cursor: pointer;
        }
    }
    .active {
        text-decoration: underline;
        font-weight: 600;
    }
`

export const Category = ({categoryCall, setActiveCategory, activeCategory}) => {

           return categoryList.map((category, i) => {
            const imageSource = categoryList[i].data.main_image.url;
            const imageAlt = categoryList[i].data.main_image.alt;
            const categoryName = categoryList[i].data.name;
            let isActive;
            switch (categoryCall) {
               case 'Home':
                   return(
                       <CategoriesStyled key={categoryList[i].id}>
                           <p className="categoryName">{categoryName}</p>
                           <img src={imageSource} alt={imageAlt}/>
                       </CategoriesStyled> 
                   );
               case 'SideBar':
                   return(
                       <FilterCategoriesStyled key={categoryList[i].id} activeClass={isActive}>
                           <CategoryButton categoryName={categoryName} 
                           setActiveCategory={setActiveCategory} 
                           activeCategory={activeCategory}/>
                       </FilterCategoriesStyled>
                   );
               default:
                   return null;
                 }
            })
}