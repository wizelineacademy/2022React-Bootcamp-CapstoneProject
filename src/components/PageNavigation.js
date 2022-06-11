import styled from 'styled-components';
import {FirstPage} from '@styled-icons/material-rounded/FirstPage';
import {NavigateBefore} from '@styled-icons/material-rounded/NavigateBefore';
import {NavigateNext} from '@styled-icons/material-rounded/NavigateNext';


import Button from './Button';

const StyledPageNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: ${({theme}) => theme.coreSpace * 2}px;
    margin-bottom: ${({theme}) => theme.coreSpace * 2}px;
`;
const StyledPageNavigationLastPage = styled.div`
    transform: rotate(180deg);
`;
const StyledInput = styled.input`
    width: ${({theme}) => theme.coreSpace * 8}px;
    height: 80%;
    
    text-align: center;
`;
const PageNavigation = () => {
    return (
        <StyledPageNavigation>
            <Button disabled>
                <FirstPage size="18"/>
            </Button>
            <Button disabled>
                <NavigateBefore size="18"/>
            </Button>
            <StyledInput 
                type="text" 
                value="1"
                disabled
            />
            <Button disabled>
                <NavigateNext size="18"/>
            </Button>
            <Button disabled>
                <StyledPageNavigationLastPage>
                    <FirstPage size="18"/>
                </StyledPageNavigationLastPage>
            </Button>
        </StyledPageNavigation>
    );
};

export default PageNavigation;