import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BrandButton = styled.button`
  margin: 25px 20px;
  display: flex;
  text-decoration: none;
`;

export const BrandImage = styled.img`
  border-radius: 30%;
  width: 4rem;
  margin-right: 10px;
  height: 4rem;
`;

export const BrandName = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  margin: 25px 0;
  margin-right: 50px;
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  line-height: 76px;

  @media screen and (max-width: 1230px) {
    width: 35%;
  }

  @media screen and (max-width: 880px) {
    width: 25%;
    margin: 25px 0;
  }
`;

export const SearchInput = styled.input`
  font-size: 15px;
  padding: 6px 12px 6px 15px;
  background-color: white;
  border-bottom: 2px solid gray;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  width: 13rem;
  font-style: italic;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  background-color: white;
`;

export const SearchButtonIcon = styled.svg`
  width: 25px;
  height: 25px;
`;

export const CartButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: #fff;
`;

export const CartButtonIcon = styled.svg`
  width: 25px;
  height: 25px;
  color: gray;
`;
