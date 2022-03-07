import FeaturedCategories from './../../mocks/en-us/product-categories.json';
import styled from "styled-components"

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

export const Category = () => {
    return (
        <>
            {categoryList.map((product, i) => {
                 const imageSource = categoryList[i].data.main_image.url;
                 const imageAlt = categoryList[i].data.main_image.alt;
                 const categoryName = categoryList[i].data.name;
                return (
                    <CategoriesStyled key={categoryList[i].id}>
                        <p className="categoryName">{categoryName}</p>
                        <img src={imageSource} alt={imageAlt}/>
                    </CategoriesStyled>
                )
            })}
        </>
    )
}