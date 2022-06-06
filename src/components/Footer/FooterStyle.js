import styled from 'styled-components'
import { colors, max_widths } from '../../styles/_variables';

const FooterStyle = styled.footer`
    bottom: 0;
    color: ${ colors.Gray[500] } ;
    height: 50px;
  
    /* position: fixed; */
    margin-top: 30px;
    text-align: center;
    width: 100%;

    @media (max-width: ${ max_widths.sm }) {
       width: 90%;
    }

`;

export default FooterStyle;