import styled from "styled-components";
import { Category } from "./categories";
import { Products } from "./products";

const GridStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProductGrid = () => {
    return (
        <GridStyled>
            <Products/>
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