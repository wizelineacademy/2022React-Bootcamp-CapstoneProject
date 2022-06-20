import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  padding: 20px 12px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  background-color: #171717;
  color: white;
  align-items: center;
  transition: 0.4s;
`;

export const FooterContent = styled.div`
  font-size: 15px;
  font-weight: 400;

  @media (min-width: 588px) {
    font-size: 18px;
  }
`;
