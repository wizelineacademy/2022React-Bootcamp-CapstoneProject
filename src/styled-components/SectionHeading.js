import styled from "@emotion/styled";

export const SectionHeading = styled.h2`
  width: 150px;
  margin: 40px auto;
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 50px;
    height: 2px;
    left: 0;
    background-color: var(--extralight-gray);
    top: 50%;
    transform: translateY(-50%) translateX(-58px);
  }

  &:after {
    position: absolute;
    content: "";
    width: 50px;
    height: 2px;
    background-color: var(--extralight-gray);
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(60px);
  }
`;
