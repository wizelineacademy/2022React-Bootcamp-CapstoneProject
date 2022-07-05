import styled, { keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinerLoader = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;
    margin: 0 auto;

    animation: ${rotate} 2s linear infinite;
`;

export const CartWidgetButton = styled.div`
  z-index: 999;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  position: fixed;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  top: 128px;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  box-shadow: 0 0 2px 0 rgba(145, 158, 171, 0.24),0 20px 40px -4px rgba(145, 158, 171, 0.24);
  color: #212B36;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  -webkit-transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover { 
    opacity: 0.72 
  }
`;

export const SpanBadge = styled.span`
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  box-sizing: border-box;
`;