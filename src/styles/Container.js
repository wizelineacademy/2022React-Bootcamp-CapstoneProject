import styled from 'styled-components';
import '../index.css'
import { max_widths } from './_variables';

export const Container = styled.div `
    padding-left  : ${props => props.container ? '40px' : "0 px" } ; 
    padding-right : ${props => props.container ? '40px' : "0 px" } ; 

    @media (max-width: ${ max_widths.sm }) {
        padding-left  : 0 ; 
        padding-right : 0; 
    }

`;

export default Container;