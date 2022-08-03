import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const DetailsPaper = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, 
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    border-radius: 16px;
    z-index: 0;
`;

export const GridContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;

export const GridItem = styled.div`
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
    flex-basis: 50%;
    flex-grow: 0;
    width: 50%;
    max-width: 100%;
    ${breakpoints("flex-basis", "%", [
        { 1200: 50 },
        { 900: 100 },
        { 600: 100 },
    ])};
    ${breakpoints("max-width", "%", [
        { 1200: 50 },
        { 900: 100 },
        { 600: 100 },
    ])};
`;