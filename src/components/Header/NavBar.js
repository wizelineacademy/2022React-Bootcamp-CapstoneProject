import styled from "styled-components";
import { colors, max_widths } from "../../styles/_variables";

const NavBar = styled.nav`
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${colors.Gray[300]} ;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    padding: 15px;

    span{
        font-weight: bold;
        font-size: 25px;
        color: ${ colors.Teal[700] };
    }

    i:hover{
        color: ${colors.Green[800]};
        transition: .3s ease;
    }
    /* .end{
        margin-left: auto;
        padding-right: 8px;
    } */

    div{
        margin-left: auto;
        padding-right: 20px;
        display: flex;
        gap: 20px;
        align-items: center;
        /* list-style-type: none; */
    }

    @media (max-width: ${max_widths.sm}) {
        margin-left: 0;
        padding-top: 20px;
        padding-right: 8px;
        padding-left: 8px;
        
        div{
            gap: 10px;
            padding-bottom: 10px;
        }
    }

`;

export default NavBar;