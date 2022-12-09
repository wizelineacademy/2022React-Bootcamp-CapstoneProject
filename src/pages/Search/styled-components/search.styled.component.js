import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Container = styled.main`
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

export const GridItem = styled.div`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 24px;
    padding-right: 24px;
    ${breakpoints("padding-right", "rem", [
        { 1200: 1 },
        { 800: 1 },
        { 600: 0.5 },
        { 450: 0.75 },
    ])};
    ${breakpoints("padding-left", "rem", [
        { 1200: 1 },
        { 800: 1 },
        { 600: 0.5 },
        { 450: 0.75 },
    ])};
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 95%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    ${breakpoints("flex-basis", "%", [
        { 1200: 95 },
        { 800: 100 },
        { 600: 100 },
        { 450: 100 },
    ])};
`;