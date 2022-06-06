import styled from "styled-components";
import colors from "styles/colors";

export const BannerImage = styled.img`
  max-height: 290px;
`;

export const Container = styled.a`
  align-items: center;
  color: ${colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 8px 0;
  text-align: center;
  word-break: break-all;
`;
