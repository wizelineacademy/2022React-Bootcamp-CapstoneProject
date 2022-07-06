import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const Bounce = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-8px);
  }

  100%{
    transform: translateY(0);
  }
    }
`;

export const Badge = styled.span`
  position: absolute;
  z-index: 5;
  left: 12px;
  bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 25px;
  height: 25px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 100%;
  background-color: var(--primary-green);
  animation: 1s ${Bounce};
`;

export const BagContainer = styled(Link)`
  position: relative;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    animation: 1s ${Bounce} 1;
  }
`;
