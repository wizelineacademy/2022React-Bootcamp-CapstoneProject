import styled from "@emotion/styled";
import { SectionHeading } from "./../../styled-components/SectionHeading";

export const HeadingPage = styled(SectionHeading)`
  width: 60%;
  margin: 50px auto;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const WrapperContent = styled.div`
  position: relative;
  display: flex;
  margin-top: 5px;
`;

export const Content = styled.div`
  flex: 1;
`;
