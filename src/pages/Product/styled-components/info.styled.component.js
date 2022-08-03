import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Title = styled.h4`
    margin: 0px 0px 16px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.25rem;
    ${breakpoints("font-size", "rem", [
        { 600: 1.1875 },
    ])};
`;

export const Price = styled.h3`
    margin: 0px 0px 24px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
    ${breakpoints("font-size", "rem", [
        { 900: 1.25 },
        { 600: 1.1875 },
    ])};
`;

export const Sku = styled.span`
    margin: 16px 0px 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: Public Sans, sans-serif;
    color: rgb(255, 72, 66);
    display: block;
    letter-spacing: 0.05rem;
`;

export const Category = styled.span`
    height: 22px;
    min-width: 22px;
    line-height: 0;
    border-radius: 6px;
    cursor: default;
    align-items: center;
    white-space: nowrap;
    display: inline-flex;
    justify-content: center;
    padding: 0px 8px;
    color: #fff;
    font-size: 0.75rem;
    font-family: Public Sans, sans-serif;
    background-color: #3A5BA0;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px 0px 12px;
`;

export const Tag = styled.span`
    height: 22px;
    min-width: 22px;
    line-height: 0;
    border-radius: 6px;
    cursor: default;
    align-items: center;
    white-space: nowrap;
    display: inline-flex;
    justify-content: center;
    padding: 0px 8px;
    color: #18181B;
    font-size: 0.65rem;
    font-family: Public Sans, sans-serif;
    background-color: #FACC15;
    font-weight: 700;
    text-transform: capitalize;
    margin: 0.15rem;
`;

export const Divider = styled.hr`
    margin: 1.5rem 0;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-color: rgba(145, 158, 171, 0.24);
    border-style: dashed;
`;

export const QuantityBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const Label = styled.h6`
    margin: 4px 0px 0px;
    font-weight: 600;
    line-height: 1.5;
    font-size: 1.15rem;
`;

export const Stock = styled.div`
    margin: 8px 0px 0px;
    line-height: 1.5;
    font-size: 0.75rem;
    font-family: Public Sans, sans-serif;
    font-weight: 400;
    color: rgb(99, 115, 129);
    text-align: right;
`;

export const BoxInput = styled.div`
    padding: 4px 6px;
    border: 1px solid rgba(145, 158, 171, 0.32);
    line-height: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const ButtonControlQty = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: currentcolor none 0px;
    border: 0px none;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    border-radius: 50%;
    overflow: visible;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: inherit;
    padding: 5px;
    font-size: 1.125rem;
    box-sizing: border-box;
    &.disabled {
        background-color: transparent;
        color: rgba(145, 158, 171, 0.8);
        cursor: default;
    }
`;

export const SpanQty = styled.span`
    margin: 0px;
    line-height: 1.57143;
    font-size: 0.875rem;
    font-family: Public Sans, sans-serif;
    font-weight: 400;
    width: 40px;
    text-align: center;
    box-sizing: border-box;
`;

export const BoxButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    box-sizing: border-box;
`;

export const ButtonAddToCart = styled.button`
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
    min-width: 64px;
    padding: 8px 22px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(33, 43, 54);
    background-color: rgb(255, 193, 7);
    width: 100%;
    box-shadow: rgba(255, 193, 7, 0.24) 0px 8px 16px 0px;
    height: 48px;
    white-space: nowrap;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        background-color: rgb(183, 129, 3);
    }
    > svg {
        display: inherit;
        margin-right: 8px;
        margin-left: -4px;
        font-size: 1.5rem;
    }
`;