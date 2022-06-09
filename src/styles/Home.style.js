import styled, { keyframes } from 'styled-components';
import * as colors from './Colors.style';

export const HomeContainer = styled.div`
  padding-top: 80px;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 100px;
  }
`;

function getWidthStrings(span) {
  if (!span) {
    return;
  }
  let flex = (span / 12) * 100;
  return `display: block; flex: ${flex}%; max-width: ${flex}%;`;
}

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${({ centered }) =>
    centered && `width: 100%; align-items: center; justify-content: center;`};
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;
const media = {
  xs: (styles) => `
    @media only screen and (max-width:480px){
        ${styles}
    }
    `,
  md: (styles) => `
    @media (min-width: 768px) and (max-width: 1024px){
        ${styles}
    }
    `,
  sm: (styles) => `
    @media (min-width: 481px) and (max-width: 768px){
        ${styles}
    }
    `,
  lg: (styles) => `
    @media only screen and (min-width:1025px){
        ${styles}
    }
    `,
};

export const Col = styled.div`
  padding: 16px 0;
  ${({ spaced }) => spaced && `margin-left: 0.5em; margin-right: 0.5em`};

  @media (max-width: 480px) {
    ${({ xs }) => (xs ? getWidthStrings(xs) : 'width: 100%')};
  }
  @media (min-width: 481px) and (max-width: 768px) {
    ${({ sm }) => sm && getWidthStrings(sm)};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ md }) => md && getWidthStrings(md)};
  }
  @media only screen and (min-width: 1025px) {
    ${({ lg }) => lg && getWidthStrings(lg)};
  }
  ${(props) => props.collapse && media[props.collapse](`display:none;`)};
`;

export const TopSpace = styled.div`
  margin-top: 2em;
  ${({ spaceHeader }) => spaceHeader && `margin-top:4.5em`};
  ${({ extra }) => extra && `margin-top:5em`};
`;

export const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  font-weight: 200;
  color: ${colors.colors.titleBlue};
`;

export const Button = styled.button`
  border-radius: 10px;
  background-color: ${colors.colors.subBlue};
  border-color: ${colors.colors.subBlue};
  color: white;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;

  &:hover {
    background-color: ${colors.colors.hoverSubBlue};
    border-color: ${colors.colors.hoverSubBlue};
  }
`;

export const ContainerSpinner = styled.div`
  position: relative;
  ${({ active }) =>
    active &&
    `
    background-color: '0xFF0E3311';
  opacity: 0.5;
  `}
`;

export const Spinner = styled.svg`
  position: absolute;
  top: 15%;
  left: 40%;
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: ${colors.colors.subBlue};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  ${({ active }) =>
    !active &&
    `
    display: none;
  `}
`;

export const TextCentered = styled.p`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
`;
