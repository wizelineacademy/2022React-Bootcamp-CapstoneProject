import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';
import MainToolbar from './MainToolbar';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    padding: ${({theme}) => theme.coreSpace}px;
    height: ${({theme}) => theme.headerHeight}px;

    border-bottom: 1px solid ${({theme}) => theme.colorPrimaryContainer};
    box-sizing: border-box;
`;

const Header = ({navigateHome}) => {
    return (
        <StyledHeader>
            <Logo
                onClick={navigateHome}
            />
            <MainToolbar/>
        </StyledHeader>
    );
}

Header.propTypes = {
    navigateHome: PropTypes.func.isRequired,
}

export default Header;