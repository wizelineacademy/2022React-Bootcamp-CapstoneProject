import React from 'react';
import styled from 'styled-components';

 const StyledInput = styled.input`
    border: 2px solid #E0DFD5;
    color: #7149ee;
    border-radius: 10px;
    width: auto;
    height: auto;
    float: right;
    display: block;
  `;

  function InputSearch () {
    return (
        <>
         <StyledInput placeholder="Search"/>
        </>
       );
  }

  export default InputSearch;