import styled from 'styled-components';
import logo from '../logo.svg';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    min-width: 80px;
    
    cursor: pointer;
`;
const StyledLogoImg = styled.img`
    max-height: 40px;
`;
const StyledLogoTitle = styled.h1`
    margin: 0;
    white-space: nowrap;
`;

const Logo = ({onClick}) => {
    return (
        <StyledLogo
            onClick={onClick}
        >
            <StyledLogoImg 
                src={logo} 
                alt="RBCP"
            />
            <StyledLogoTitle>
                RBCP
            </StyledLogoTitle>
        </StyledLogo>
    );
}

export default Logo;