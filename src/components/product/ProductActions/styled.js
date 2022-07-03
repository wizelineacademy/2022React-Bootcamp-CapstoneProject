import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ActionsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: ${(props) =>
    props.activeClass ? "translate(-50%, 5%)" : "translate(-50%, 100%)"};
  opacity: ${(props) => (props.activeClass ? "1" : "0")};
  transition: all ease-in-out 0.3s;
`;

export const LinkAction = styled(Link)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-size: 0;
`;
