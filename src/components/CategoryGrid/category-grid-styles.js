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
  margin-bottom: 5rem;

  @media screen and (max-width: 700px) {
    width: 95%;
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
  font-size: 25px;
  margin-bottom: 3rem;
  width: 17rem;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  border: 1px solid lightgray;
  cursor: pointer;

  & svg {
    display: none;
  }

  &:hover {
    & svg {
      display: block;
    }
  }
`;
