import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Container = styled.div`
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
    margin-top: -24px;
    width: calc(100% + 24px);
    margin-left: -24px;
    min-height: 500px;
    padding-left: 24px;
    padding-right: 24px;
    ${breakpoints("padding-left", "px", [
        { 600: 16 },
    ])};
    ${breakpoints("padding-right", "px", [
        { 600: 16 },
    ])};
`;

export const Product = styled.div`
    padding-left: 24px;
    padding-top: 24px;
    -moz-box-flex: 0;
    flex-grow: 0;
    box-sizing: border-box;
    margin: 0px;
    min-width: 25%;
    ${breakpoints("flex-basis", "%", [
        { 1200: 25 },
        { 800: 33.3333 },
        { 600: 50 },
        { 450: 100 },
    ])};
        ${breakpoints("max-width", "%", [
        { 1200: 25 },
        { 800: 33.3333 },
        { 600: 50 },
        { 450: 100 },
    ])};
`;

export const ProductPaper = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgb(43, 52, 69);
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, 
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    position: relative;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    margin: auto;
    overflow: hidden;
    transition: all 250ms ease-in-out 0s;
    border-radius: 16px;
`;

export const ProductTop = styled.div`
    position: relative;
    text-align: center;
    ${breakpoints("display", "", [
        { 1200: "inline-block" },
        { 800: "inline-block" },
        { 600: "block" },
        { 450: "block" },
    ])};
`;

export const SpanContainer = styled.span`
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    opacity: 1;
    border: 0px none;
    margin: 0px;
    padding: 0px;
    position: relative; 
`;

export const SpanTop = styled.span`
    box-sizing: border-box;
    display: block;
    width: initial;
    height: initial;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    opacity: 1;
    border: 0px none;
    margin: 0px;
    padding: 100% 0px 0px;
`;

export const ProductImage = styled.img`
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: medium none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
`;

export const ProductBottom = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`;

export const ProductInfo = styled.div`
    flex: 1 1 0px;
    min-width: 0px;
    margin-right: 8px;
`;

export const LinkName = styled.a`
    margin: 0px;
    text-decoration: none;
    color: inherit;
    text-align: left;
    &:hover {
        text-decoration: underline;
    }
`;

export const ProductTitle = styled.h6`
    margin: 0px;
    font-weight: 600;
    line-height: 1.57143;
    font-size: 0.875rem;
    font-family: Public Sans, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const PriceProductBox = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    margin: 16px 0px 0px;
`;

export const PriceProduct = styled.div`
    padding-right: 8px;
    font-weight: 600;
    color: rgb(210, 63, 87);
    margin: 0px 0px 0px 4px;
`;

export const ProductAction = styled.div`
    display: flex;
    width: 30px;
    -moz-box-align: center;
    align-items: center;
    flex-direction: column-reverse;
    -moz-box-pack: start;
    justify-content: flex-start;
`;

export const ProductButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: currentcolor none 0px;
    border: 0px none;
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
    min-width: 43px;
    padding: 4px 18px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(33, 43, 54);
    background-color: rgb(255, 193, 7);
    width: 100%;
    box-shadow: rgba(255, 193, 7, 0.24) 0px 8px 16px 0px;
    height: 32px;
    white-space: nowrap;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        background-color: rgb(183, 129, 3);
    }
    &:active {
        box-shadow: rgba(145, 158, 171, 0.2) 0px 5px 5px -3px, 
            rgba(145, 158, 171, 0.14) 0px 8px 10px 1px, 
            rgba(145, 158, 171, 0.12) 0px 3px 14px 2px;
    }
`;