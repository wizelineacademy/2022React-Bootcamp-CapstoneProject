import styled from 'styled-components';

import Logo from './Logo';
import MainToolbar from './MainToolbar';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: ${({theme}) => theme.coreSpace}px;
    margin-bottom: ${({theme}) => theme.coreSpace * 2}px;

    border-bottom: 1px solid ${({theme}) => theme.colorPrimaryContainer};
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <MainToolbar/>
        </StyledHeader>
    );
}

export default Header;