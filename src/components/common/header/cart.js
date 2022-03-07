import CartImg from "./shopping-cart.svg"
import styled from "styled-components"

const CartStyled = styled.img`
    width: 50px;
    @media screen and (max-width: 768px) {
        width: 25px;
        margin-left: 10px;
    }
`
export const Cart = () => <CartStyled alt="Shopping" src={CartImg}/>