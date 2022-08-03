import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const TopbarStyle = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const TobarTop = styled.div`
    display: flex;
    align-items: center;
`;

export const TopbarBottom = styled.div`
    margin-top: 16px;
`;

export const TopbarContent = styled.div`
    flex-grow: 1;
`;

export const TitleBoxContentTop = styled.h4`
    margin: 0px 0px 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: left;
    ${breakpoints("font-size", "rem", [
        { 900: 1.5 },
        { 600: 1.25 },
    ])};
`;