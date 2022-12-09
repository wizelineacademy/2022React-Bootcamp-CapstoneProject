import styled from 'styled-components';

export const BoxTop = styled.div`
    padding: 8px;
    box-sizing: border-box;
`;

export const BoxTopContent = styled.div`
    z-index: 0;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
`;

export const BoxSlide = styled.span`
    width: 100%;
    line-height: 0;
    display: block;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    cursor: zoom-in;
    box-sizing: border-box;
    > .wrapper {
        position: absolute;
        line-height: 0;
        inset: 0px;
        background-size: cover !important;
    }
`;

export const BoxControls = styled.div`
    z-index: 9;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: rgb(255, 255, 255);
    border-radius: 8px;
    background-color: rgba(22, 28, 36, 0.48);
    box-sizing: border-box;
`;

export const ButtonControl = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: currentcolor none 0px;
    border: 0px none;
    margin: 0px;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    flex: 0 0 auto;
    border-radius: 50%;
    overflow: visible;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: 0.48;
    font-size: 1.125rem;
    text-align: center;
    cursor: pointer;
    color: rgb(255, 255, 255);
    padding: 4px;
    width: 2rem;
`;

export const FillButton = styled.span`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    inset: 0px;
    border-radius: inherit;
    box-sizing: border-box;
`;

export const IndexInfo = styled.h6`
    margin: 0px;
    font-weight: 600;
    line-height: 1.57143;
    font-size: 0.875rem;
    box-sizing: border-box;
`;

export const BoxBottom = styled.div`
    margin: 24px auto;
    max-width: 384px;
    position: relative;
    box-sizing: border-box;
    &::before, &::after {
        top: 0px;
        z-index: 9;
        content: "";
        height: 100%;
        position: absolute;
        width: 42.6667px;
        background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, 
            rgb(255, 255, 255) 100%);
    }
    &::after {
        right: 0px;
        transform: scaleX(-1);
    }
`;

export const BoxSlideB = styled.span`
    line-height: 0;
    display: block;
    overflow: hidden;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    cursor: pointer;
    box-sizing: border-box;
    > .wrapper {
        width: 100%;
        height: 100%;
        background-size: cover !important;
    }
`;