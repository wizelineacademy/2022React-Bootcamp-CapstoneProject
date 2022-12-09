import styled from 'styled-components';
import { breakpoints } from '../../../styled-components/styled-breakpoints';

export const BoxTopbar = styled.div`
    margin-bottom: 40px;
    box-sizing: border-box;
`;

export const BoxContentTop = styled.div`
    display: flex;
    align-items: center;
`;

export const BoxContentTopContent = styled.div`
    flex-grow: 1;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
`;

export const TitleBoxContentTopContent = styled.h4`
    margin: 0px 0px 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: left;
    ${breakpoints("font-size", "rem", [
        { 900: 1.5 },
        { 600: 1.25 },
    ])};
`;

export const NavBoxContentTop = styled.nav`
    margin: 0px;
    line-height: 1.5;
    font-size: 1rem;
    font-family: Public Sans, sans-serif;
    font-weight: 400;
    color: rgb(99, 115, 129);
    box-sizing: border-box;
`;

export const NavBoxContentTopList = styled.ol`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    box-sizing: border-box;
    list-style: none;
`;

export const ListSeparator = styled.li`
    display: flex;
    user-select: none;
    margin-left: 16px;
    margin-right: 16px;
`;

export const ListSeparatorItem = styled.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgb(145, 158, 171);
`;

export const CurrentListItem = styled.p`
    margin: 0px;
    line-height: 1.57143;
    font-size: 0.875rem;
    font-family: Public Sans, sans-serif;
    font-weight: 400;
    color: rgb(145, 158, 171);
    max-width: 260px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const BoxContentBottom = styled.div`
    margin-top: 16px;
`;