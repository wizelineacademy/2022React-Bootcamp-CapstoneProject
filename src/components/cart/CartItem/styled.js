import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 405px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const WrapperDetails = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 405px) {
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1.7px solid var(--extralight-gray);
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;
export const Title = styled(Link)`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  text-decoration: none;
  color: var(--light-gray);
  font-weight: 400;
`;

export const Price = styled.div`
  color: var(--gray);
  font-weight: 500;
  font-size: 23px;
`;
