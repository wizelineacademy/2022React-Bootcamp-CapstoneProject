import styled from "styled-components";
import { Category } from "./categories";
import { Product } from "./products";

const GridStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProductGrid = () => {
    return (
        <GridStyled>
            <Product/>
        </GridStyled>
    )
}

export const CategoryGrid = () => {
    return (
        <GridStyled>
            <Category />
        </GridStyled>
    ) 
}