/*import LupaImg from "./search-glass.svg"*/
import styled from "styled-components"

const SearchBarStyled = styled.input`
    :placeholder {
        color: #42382f50;
    }
    min-width: 150px;
    @media screen and (min-width: 768px) {
        min-width: 300px;
    }
`
export const SearchBar = () => <SearchBarStyled placeholder="Search"/>