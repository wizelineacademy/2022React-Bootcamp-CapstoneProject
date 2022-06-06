import styled from "styled-components";
import colors from "styles/colors";

export const Banner = styled.img`
  max-height: 290px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Slider = styled.div`
  display: flex;
  overflow-x: scroll;
  & img:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 1.75rem;
`;
