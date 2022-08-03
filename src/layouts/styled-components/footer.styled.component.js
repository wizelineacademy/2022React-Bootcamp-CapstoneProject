import styled from 'styled-components';
import { breakpoints } from '../../styled-components/styled-breakpoints';

export const FooterContainer = styled.div`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    padding: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    color: white;
    ${breakpoints("padding-left", "px", [
        { 600: 24 },
    ], "min-width")};
    ${breakpoints("padding-right", "px", [
        {600: 24 },
    ], "min-width")};
    ${breakpoints("max-width", "px", [
        { 1280: 1280 },
    ], "min-width")};
`;

export const FooterWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    overflow: hidden;
`;

export const FooterGridContainer = styled.div`
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
`;

export const FooterGridItem = styled.div`
    text-align: left;
    padding-left: 24px;
    padding-top: 24px;
    -webkit-box-flex: 0;
    flex-grow: 0;
    ${breakpoints("max-width", "%", [
        { 1280: 33.333333 },
        { 960: 50 },
        { 600: 50 },
    ], "min-width")};
    ${breakpoints("-webkit-flex-basis", "%", [
        { 1280: 33.333333 },
        { 960: 50 },
        { 600: 50 },
    ], "min-width")};
    ${breakpoints("-ms-flex-preferred-size", "%", [
        { 1280: 33.333333 },
        { 960: 50 },
        { 600: 50 },
    ], "min-width")};
    ${breakpoints("flex-basis", "%", [
        { 1280: 33.333333 },
        { 960: 50 },
        { 600: 50 },
    ], "min-width")};
    ${breakpoints("-webkit-box-flex", "", [
        { 960: 0 },
        { 600: 0 },
    ], "min-width")};
    ${breakpoints("-webkit-flex-grow", "", [
        { 960: 0 },
        { 600: 0 },
    ], "min-width")};
    ${breakpoints("-ms-flex-positive", "", [
        { 960: 0 },
        { 600: 0 },
    ], "min-width")};
`;

export const FooterGridItemDescription = styled.p`
    margin-bottom: 20px;
    margin-top: 0px;
    font-size: 14px;
    color: #AEB4BE;
    text-transform: none;
    white-space: normal;
    padding-top: 1rem;
`;