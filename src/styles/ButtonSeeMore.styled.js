import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap
    color: blue;
    background-color: lightblue;
    border-radius: 40px;
    margin-bottom: 1%;
`;

export default Button;
