import styled from 'styled-components';
import {Cart} from '@styled-icons/bootstrap/Cart';
import SearchInput from './SearchInput';
import Button from './Button';

import Logo from './Logo';

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
            <SearchInput/>
            <Button
                disabled
            >
                <Cart size="18" title="Cart"/>
            </Button>
        </StyledHeader>
    );
}

export default Header;