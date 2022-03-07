import LogoImg from "./logo.png"
import styled from "styled-components"

const LogoStyled = styled.img`
    width: 100px;
    @media screen and (max-width: 768px) {
        width: 50px;
        margin-right: 10px;
    }
`
export const Logo = () => <LogoStyled alt="Fantastic Woodwork Logo" src={LogoImg}/>
