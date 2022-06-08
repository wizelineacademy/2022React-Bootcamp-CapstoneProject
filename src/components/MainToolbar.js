import styled from 'styled-components';
import {Cart} from '@styled-icons/bootstrap/Cart';

import SearchInput from './SearchInput';
import Button from './Button';

const StyledMainToolbar = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-evenly;
`;

const MainToolbar = () => {
    return (
        <StyledMainToolbar>
            <SearchInput/>
            <Button
                disabled
            >
                <Cart size="18" title="Cart"/>
            </Button>
        </StyledMainToolbar>
    );
};

export default MainToolbar;