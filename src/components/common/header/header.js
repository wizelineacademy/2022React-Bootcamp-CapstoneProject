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
    .logoButton {
        background: none;
        border: none;
        &:hover {
            cursor: pointer;
        }
    }
    `;

export const Header = ({setActiveState}) => {
    return (
        <HeaderStyled>
                <button className="logoButton" 
                onClick={() => setActiveState('HP')}><Logo /></button>
                <SearchBar/>
                <Cart/>
        </HeaderStyled>
    )
}