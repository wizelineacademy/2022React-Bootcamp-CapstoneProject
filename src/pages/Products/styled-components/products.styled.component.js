import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 1280px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const Row = styled.div`
    padding-top: 20px;
`;

export const Grid = styled.div`
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    ${breakpoints("flex-direction", "", [
        { 1200: "row" },
        { 800: "row" },
        { 600: "column" },
        { 450: "column" },
    ])};
    margin-top: -24px;
    width: calc(100% + 24px);
    margin-left: -24px;
`;

export const GridItem = styled.div`
    padding-left: 24px;
    padding-top: 24px;
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    min-width: 25%;
    box-sizing: border-box;
    margin: 0;
    ${breakpoints("flex-basis", "%", [
        { 1200: 25 },
        { 800: 100 },
        { 600: 100 },
        { 450: 100 },
    ])};
`;

export const Sidebar = styled.div`
    background-color: #fff;
    color: #2B3445;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 16px;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, 
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    overflow: hidden;
    border-radius: 8px;
    padding: 18px 27px;
    overflow: auto;
`;

export const SidebarTitle = styled.h6`
    margin-bottom: 10px;
    margin-top: 0;
    font-weight: 600;
    line-height: 1.5;
    font-size: 1rem;
    text-align: left;
`;

export const SidebarSection = styled.div`
    margin: 8px 0px 0px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
    &:checked {
        background-color: rgb(0, 171, 85);
        color: rgb(0, 171, 85); 
    }
`;

export const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 9px;
    cursor: pointer;
`;

export const LabelText = styled.span`
    line-height: 1.57143;
    font-size: 0.875rem;
    font-family: Public Sans, sans-serif;
    font-weight: 400;
    background-color: white;
    color: rgb(33, 43, 54);
    ${Input}:checked + && {
        color: #0c0c0c;
    }
`;

export const GridItemProducts = styled.div`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 24px;
    padding-right: 24px;
    ${breakpoints("padding-right", "px", [
        { 1200: 25 },
        { 800: 3 },
        { 600: 0 },
        { 450: 0 },
    ])};
    ${breakpoints("padding-left", "px", [
        { 1200: 25 },
        { 800: 3 },
        { 600: 0 },
        { 450: 0 },
    ])};
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    ${breakpoints("flex-basis", "%", [
        { 1200: 75 },
        { 800: 100 },
        { 600: 100 },
        { 450: 100 },
    ])};
`;

export const ProductsContainer = styled.div`
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    min-height: 500px;
    ${breakpoints("flex-basis", "%", [
        { 1200: 100 },
        { 800: 75 },
        { 600: 50 },
        { 450: 100 },
    ])};
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const PaginationContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 32px;
`;

export const PaginationInfo = styled.span`
    line-height: 1.5;
    color: #7D879C;
    text-transform: none;
    white-space: normal;
`;

export const Pagination = styled.nav``;

export const PaginationList = styled.ul`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const PaginationButton = styled.button`
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0px none;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.57143;
    border-radius: 16px;
    text-align: center;
    box-sizing: border-box;
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    margin: 0 3px;
    color: #2B3445;
    -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        background-color: rgba(145, 158, 171, 0.08);
    }
    &.active {
        color: rgb(0, 171, 85);
        background-color: rgba(0, 171, 85, 0.08);
        font-weight: 700;
        &:hover {
            background-color: rgba(0, 171, 85, 0.24) !important;
        }
    }
    &.deactivate {
        opacity: 0.38;
        pointer-events: none;
    }
`;

export const ButtonClearFilter = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: currentcolor none 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.71429;
    font-size: 0.9375rem;
    text-transform: capitalize;
    font-family: Public Sans, sans-serif;
    min-width: 64px;
    padding: 7px 21px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: inherit;
    width: 100%;
    border: 1px solid rgba(145, 158, 171, 0.32);
    height: 48px;
    &:hover {
        box-shadow: none;
    }
`;