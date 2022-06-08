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
const StyledLogoTitle = styled.h1`
    margin: 0;
    white-space: nowrap;
`;

const Logo = () => {
    return (
        <StyledLogo>
            <StyledLogoImg src={logo} alt="RBCP"/>
            <StyledLogoTitle>RBCP</StyledLogoTitle>
        </StyledLogo>
    );
}

export default Logo;