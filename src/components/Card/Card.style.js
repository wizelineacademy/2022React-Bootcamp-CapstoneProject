import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  padding: 0;
  margin: 20px;
  background-color: #EDF6F9;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (min-width: 576px) {
    width: 315px;
    min-height: 580px;
  }
`;

export const CardContent = styled.p`
  margin: 0.5rem 0;
  color: #666;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const CardImage = styled.img`
  width: auto;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding-top: 1rem;

  @media (max-width: 576px) {
    padding-top: 0;
    font-size: 1.5rem;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  padding: 0 15px;
  height: 35px;
  min-width: 120px;
  font-size: 0.7rem;
  border-radius: 1rem;
  background: #E29578 ;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`;
