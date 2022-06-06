import styled from "styled-components";
import colors from "styles/colors";

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  height: 48px;
  width: 48px;
`;

export const MobileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 1.75rem;
`;
