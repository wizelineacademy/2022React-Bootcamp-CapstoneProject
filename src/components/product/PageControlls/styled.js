import styled from "@emotion/styled";
import { Button } from "./../../../styled-components/Button";

export const ControllsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
`;
export const PageLabel = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.select ? "#a1c5cc" : "")};
  color: ${(props) => (props.select ? "#FFF" : "")};
`;

export const ControllButton = styled(Button)`
  color: #fff;
`;
