import styled from 'styled-components';

const StyledFooter = styled.div`
    text-align: right;
    padding: 4px;

    border-top: 1px solid ${({theme}) => theme.colorPrimaryContainer};
`;

const Footer = () => {
    return (
        <StyledFooter>
            <span>
                Ecommerce created during Wizeline’s Academy React Bootcamp
            </span>
        </StyledFooter>
    );
}

export default Footer;