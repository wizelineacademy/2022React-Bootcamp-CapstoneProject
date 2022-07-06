import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 40px 20px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-green);
  display: flex;
  align-items: center;
`;
