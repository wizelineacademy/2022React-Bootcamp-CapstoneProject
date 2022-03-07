import styled from "styled-components"

const FooterStyled = styled.div`
    background: #3d1d0f;
    width: 100%;
    padding: 5px 20px;
    box-sizing: border-box;

    p {
        color: #fff;
        font-size: 15px;
        font-weight: 300;
        text-align: center;
    }
`
export const Footer = () => {
    return (
        <FooterStyled>
            <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </FooterStyled>
    )
}