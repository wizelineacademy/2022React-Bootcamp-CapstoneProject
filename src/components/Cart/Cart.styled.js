import styled from "styled-components";
import colors from "styles/colors";

export const CartImage = styled.img`
  height: 40px;
  margin-right: 8px;
`;

export const Container = styled.a`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  padding: 16px;
  text-decoration: none;
  white-space: nowrap;
`;

export const Text = styled.p`
  color: ${colors.textPrimary};
  font-weight: bold;
`;
