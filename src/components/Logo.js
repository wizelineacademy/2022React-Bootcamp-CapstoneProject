import React from 'react';
import styled from 'styled-components';

 const StyledImg = styled.img`
    float: ${props => props.side};
  `;

  function Logo (props) {
    return (
        <>
         <StyledImg src={props.source} alt ={props.alt} 
         height={props.haut} width={props.long} 
         margin={props.margin} side={props.side}/>
        </>
       );
  }

  export default Logo;