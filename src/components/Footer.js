import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #E0DFD5;
    height: 3rem;
    width: 100%;
    color: black;
    font-size: 1em; 
    text-align: center;
    position: static;
    bottom:0;
`;

const StyledP = styled.p`
    font-family: Garamond, serif;
`;

function Footer() {
  return (
    <StyledFooter > 
        <StyledP> Ecommerce created during Wizeline’s Academy React Bootcamp </StyledP>
    </StyledFooter>
  )
}

export default Footer