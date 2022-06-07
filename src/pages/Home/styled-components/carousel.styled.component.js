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
    background-color: #7afc49;
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

export const Indicators = styled.div`
    display: flex;
    justify-content: center;
    > button {
        margin: 5px;
        border: none;
        cursor: pointer;
        border-radius: 3px;
    }
    > button.active {
        background-color: #7afc49;
        color: #fff;
    }
`;

export const ButtonPaginator = styled.button`
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