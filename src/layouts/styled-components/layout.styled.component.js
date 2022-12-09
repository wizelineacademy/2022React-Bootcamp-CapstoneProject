import styled from 'styled-components';
import { breakpoints } from '../../styled-components/styled-breakpoints';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export const RootLayout = styled.div`
    display: flex;
    min-height: 100%;
    overflow: hidden;
`;

export const WrapperLayout = styled.div`
    flex-grow: 1;
    overflow: auto;
    min-height: 100%;
    padding-top: ${APP_BAR_MOBILE} + 24;
    padding-bottom: 10rem;
    ${breakpoints("padding-top", "", [
        { 1200: APP_BAR_DESKTOP + 24 },
    ])};
    ${breakpoints("padding-left", "", [
        { 1200: 2 },
    ])};
    ${breakpoints("padding-right", "", [
        { 1200: 2 },
    ])};
`;