function getWidthStrings(span) {
    if (!span) {
        return;
    }
    let flex = (span / 12) * 100;
    return `display: block; flex: ${flex}%; max-width: ${flex}%;`
}

export const Row = styled.div`
display: flex;
flex-flow: row wrap;
${({ centered }) =>
        centered && `width: 100%; align-items: center; justify-content: center;`};
        &::after{
            content: '';
            clear: both;
            display: table;
        }
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
    `,
    sm: (styles) => `
    @media (min-width: 481px) and (max-width: 768px){
        ${styles}
    }
    `,
    md: (styles) => `
    @media (min-width: 768px) and (max-width: 1024px){
        ${styles}
    }
    `,
    lg: (styles) => `
    @media only screen and (min-width: 1025px){
        ${styles}
    }
    `
};

export const Col = styled.div`
    padding: 16px 0;
    ${({ spaced }) => spaced && `margin: 0.5em 0;`};
    
    @media (max-width: 480px){
        ${({ xs }) => (xs ? getWidthStrings(xs) : 'width: 100%')};
    }
    @media (min-width: 481px) and (max-width: 768px){
        ${({ sm }) => sm && getWidthStrings(sm)};
    }
    @media (min-width: 769px) and (max-width: 1024px){
        ${({ lg }) => lg && getWidthStrings(lg)};
    }
    ${(props) => props.collapse && media[props.collapse](`display:none;`)}
`;