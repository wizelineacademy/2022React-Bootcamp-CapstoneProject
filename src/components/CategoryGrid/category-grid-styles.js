import styled from "styled-components";

const server =
  "https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/";
const imgName =
  "pngtree-yellow-geometric-flattened-taobao-e-commerce-coupon-background-image_262555.jpg";
const imgUrl = server + imgName;

export const StyledGrid = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  background-image: url(${imgUrl});
  background-repeat: repeat-y;
  background-size: contain;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const GridHeader = styled.h2`
  font-weight: 900;
  font-size: 32px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 95%;
    justify-content: center;
  }
`;
