import styled from 'styled-components';

export const PaperResume = styled.div`
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

export const TabContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
    padding-left: 24px;
    padding-right: 24px;
    background-color: rgb(244, 246, 248);
`;

const selectedColor = "rgb(0, 171, 85)";
const defaultColor = "transparent";
const selectedColorText = "rgb(33, 43, 54)";
const defaultColorText = "rgb(99, 115, 129)";

export const TabItemStyle = styled.div`
    width: 100%;
    padding: 10px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid
        ${(props) => (props.selected ? selectedColor : defaultColor)};
    color: ${(props) => (props.selected ? selectedColorText : defaultColorText)};
    &:not(:last-of-type) {
        margin-right: 40px;
    }
`;

export const DividerStyle = styled.hr`
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgba(145, 158, 171, 0.24);
    box-sizing: border-box;
`;

export const TabPanel = styled.div`
    padding: 0px;
    box-sizing: border-box;
`;

export const BoxPanel = styled.div`
    padding: 24px;
    box-sizing: border-box;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 400;
`;

export const BoxSpecs = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`;