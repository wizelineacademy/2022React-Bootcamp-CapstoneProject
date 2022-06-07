import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 15px;
  &:hover:first-child:hover {
    color: white;
  }
  &:hover,
  &:focus {
    color: #888888;
  }
  @media (max-width: 420px) {
    font-size: 2vh;
    padding-left: 1%;
    padding-right: 1%;
  }
`;

export default NavLink;
