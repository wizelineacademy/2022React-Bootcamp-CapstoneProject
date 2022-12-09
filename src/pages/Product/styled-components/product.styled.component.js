import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Container = styled.div`
    margin-top: 1rem;
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 24px;
    padding-right: 24px;
    ${breakpoints("padding-left", "px", [
        { 600: 16 },
    ])};
    ${breakpoints("padding-right", "px", [
        { 600: 16 },
    ])};
`;