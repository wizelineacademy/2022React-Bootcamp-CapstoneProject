import { Logo } from "./logo"
import { Cart } from "./cart"
import { SearchBar } from "./searchbar"
import styled from "styled-components"

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 2px solid #3d1d0f;
    `
export const Header = () => {
    return (
        <HeaderStyled>
                <Logo/>
                <SearchBar/>
                <Cart/>
        </HeaderStyled>
    )
}