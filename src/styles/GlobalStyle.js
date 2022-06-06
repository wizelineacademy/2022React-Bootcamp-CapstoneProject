import { createGlobalStyle } from 'styled-components';
import '../index.css';
import { colors } from './_variables'
const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${ colors.Gray[50] } ;
    }

    hr{
        border: 1px solid ${colors.Gray[200]};
    }
`;

export default GlobalStyle;