import styled from "styled-components";

export const Container = styled.footer`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #BC6C25;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 1216px) {
    justify-content: center;
  }
`;

export const Legend = styled.p`
  text-align: center;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: black;

  @media (max-width: 1216px) {
    margin: 1rem 0;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SocialLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;

  &:hover {
    color: white;
  }
`;
