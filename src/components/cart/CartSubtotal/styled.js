import styled from "@emotion/styled";
import { Button } from "./../../../styled-components";
import { Link } from "react-router-dom";

export const WrapperPrice = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Block = styled.div`
  padding: 15px 20px;
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  font-weight: 500;
  font-size: 22px;
  text-transform: capitalize;
`;

export const LabelPrice = styled.div`
  font-size: 30px;
  margin-top: 20px;
  padding: 2px 24px;
`;

const Checkout = styled(Button)`
  text-decoration: none;
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CheckoutLink = Checkout.withComponent(Link);
