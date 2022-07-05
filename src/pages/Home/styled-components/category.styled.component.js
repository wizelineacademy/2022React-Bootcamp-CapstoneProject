import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const Title = styled.h3`
    margin-bottom: 32px;
    margin-top: 0px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.5;
    text-transform: none;
    white-space: normal;
    text-align: initial;
`;

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: -24px;
`;

export const CategoryGrid = styled.div`
    padding-left: 24px;
    padding-top: 24px;
    flex-grow: 0;
    width: 25%;
    cursor: pointer;
    ${breakpoints("flex-basis", "%", [
        { 1200: 25 },
        { 800: 25 },
        { 600: 100 },
        { 450: 100 },
    ])};
    box-sizing: border-box;
`;

export const CategoryCard = styled.div`
    background-color: #fff;
    color: #212B36;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    box-shadow: none;
    background-image: none;
    overflow: hidden;
    box-shadow: 0 0 2px 0 rgba(145, 158, 171, 0.24),0 16px 32px -4px rgba(145, 158, 171, 0.24);
    border-radius: 16px;
    position: relative;
    z-index: 0;
    position: relative;
    box-sizing: border-box;
    text-align: left;
`;

export const CategoryCardMedia = styled.div`
    position: relative;
    padding-top: calc(100% * 3 / 4);
    box-sizing: border-box;
`;

export const CategoryCardSvgIcon = styled.span`
    width: 80px;
    height: 36px;
    mask: url(${props => props.src}) no-repeat center / contain;
    -webkit-mask: url(${props => props.src}) no-repeat center / contain;
    background-color: #fff;
    position: absolute;
    z-index: 9;
    box-sizing: border-box;
    bottom: -8%;
    ${breakpoints("bottom", "%", [
        { 1200: -15 },
        { 800: -13 },
        { 600: -4 },
        { 450: -7 },
        { 350: -13 },
    ])};
`;

export const CoverImg = styled.img`
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export const CategoryCardContent = styled.div`
    padding: 24px;
    padding-top: 32px;
`;

export const CategoryName = styled.h5`
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: none;
    white-space: normal;
    color: #2B3445;
`;