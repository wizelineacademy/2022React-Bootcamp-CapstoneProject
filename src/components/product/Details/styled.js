import { Button } from "../../../styled-components";
import styled from "@emotion/styled";

export const Category = styled.div`
  color: var(--primary-green);
  font-size: 22px;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const Description = styled.p`
  color: var(--gray);
  font-size: 20px;
`;

export const SkuWrapper = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  color: var(--light-gray);

  & span {
    color: black;
    font-weight: 600;
    margin-right: 2px;
  }
`;

export const StockDetail = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const State = styled.span`
  color: var(--primary-green);
  font-weight: 500;
`;

export const Stock = styled.span`
  color: var(--light-gray);
  margin-left: 4px;
`;

export const AddButton = styled(Button)`
  width: 100%;
`;
