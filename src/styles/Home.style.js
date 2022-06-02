import styled from 'styled-components';

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
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const Row = styled.div`
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
  lg: (styles) => `
    @media only screen and (min-width:1024px){
        ${styles}
    }
    `,
};

export const Col = styled.div`
  float: left;
  @media (max-width: 480px) {
    ${({ xs }) => (xs ? getWidthStrings(xs) : 'width: 100%')};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ md }) => md && getWidthStrings(md)};
  }
  ${({ lg }) => lg && getWidthStrings(lg)};
  ${(props) => props.collapse && media[props.collapse](`display:none;`)};
`;
