import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 13px 15px;
  background-color: white;
  width: 30rem;

  & a {
    text-decoration: none;
  }
`;

export const CardImage = styled.img`
  max-width: 30rem;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
