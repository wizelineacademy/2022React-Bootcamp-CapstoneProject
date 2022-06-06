import styled from "styled-components";
import { max_widths } from "./_variables";

const Input = styled.input`
    
    border: 1px solid #d1d5db;
    border-radius: 5px;
    padding: 10px;
    &:focus {
        outline: none;
        border: 1px solid #9ca3af;
        transition: .3s ease;
    }
    @media (min-width: ${ max_widths.xs }) {
        width: 300px;
    }

    @media (min-width: ${ max_widths.md}) {
        width: 300px;
    }
    @media (min-width: ${ max_widths.lg}) {
        width: 400px;
    }
    @media (min-width:  ${ max_widths.xl}) {
        width: 500px;
    }
`
export default Input;