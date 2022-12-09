import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const CarouselContainer = styled.div`
    overflow: hidden;
`;

export const CarouselInner = styled.div`
    transform: translateX(-${props => (props.active * 100)}%);
    white-space: nowrap;
    transition: transform 0.3s;
`;

export const Item = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    background-color: #f2f2f2;
    color: #fff;
    width: ${props => props.width || "100%"};
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat, repeat;
    background-size: cover;
    &img:after {
        content: \f127 Broken image of attr(alt);
        display: block;
        font-size: 16px;
        font-style: normal;
        color: rgb(100, 100, 100);
        top: 5px;
        left: 0;
        width: 100%;
        text-align: center;
    }
`;

export const Indicators = styled.ul`
    margin-top: 18px;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    > .active span {
        width: 16px;
        border-radius: 6px;
    }
    > .active {
        opacity: 1;
    }
`;

export const ButtonCtrl = styled.button`
    margin: 0 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    text-decoration: none;
    color: inherit;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: #637381;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 5px;
    padding: 6px;
    &:hover {
        background-color: #00AB55;
        color: #fff;
    }
`;

export const DotItem = styled.li`
    width: 18px;
    height: 18px;
    opacity: 0.32;
    cursor: pointer;
`;

export const BoxDot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: width 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    background-color: #00AB55;
`;

export const ItemContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    max-width: 1280px;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    padding: 2rem 0px 5rem 0px;
`;

export const BannerInfo = styled.div`
    color: #2B3445;
    -webkit-box-flex: 0;
    flex-grow: 0;
    padding: 20px;
    font-weight: 700;
    line-height: 1.5;
    background-color: rgb(255, 255, 255, 0.7);
    overflow: hidden;
    border-radius: 3px;
    ${breakpoints("flex-basis", "%", [
        { 1200: 50 },
        { 800: 50 },
        { 600: 100 },
        { 450: 100 },
    ])};
    ${breakpoints("max-width", "%", [
        { 1200: 50 },
        { 800: 50 },
        { 600: 100 },
        { 450: 100 },
    ])};
`;