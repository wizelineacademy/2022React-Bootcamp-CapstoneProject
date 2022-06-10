import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #232f3e;
    color: #d7d5d8;
    height: 4rem;
    position:absolute;
    bottom:0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        padding: 0 2rem;
    }
`;

const Footer = () => {
    return(
        <FooterContainer>
            <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </FooterContainer>
    );
}

export default Footer;