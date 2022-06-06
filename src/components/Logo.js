import styled from 'styled-components';
import logo from '../logo.svg';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    min-width: 80px;
`;
const StyledLogoImg = styled.img`
    max-height: 40px;
`;
const StyledLogoTitle = styled.h3`
    margin: 0;
`;

const Logo = () => {
    return (
        <StyledLogo>
            <StyledLogoImg src={logo} alt="Test-store"/>
            <StyledLogoTitle>Test-store</StyledLogoTitle>
        </StyledLogo>
    );
}

export default Logo;