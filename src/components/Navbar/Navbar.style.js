import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 3rem;
  span {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 576px) {
    margin: 0 10px;
  }
`;

export const MenuItem = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: rgb(103, 111, 163);
  }
`;

export const NavContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  background: #D4A373;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  background: whitesmoke;
  border-radius: 1rem;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  padding: 0.5rem 0.7rem;
  background: transparent;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  background: transparent;
  border: none;
  line-height: 1;
  width: 100%;
  padding: .02rem 1rem;
  &:focus,
  &:active {
    outline: none;
  }
`;
