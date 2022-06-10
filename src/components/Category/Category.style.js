import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  padding: 0;
  margin: 20px;
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (min-width: 576px) {
    width: 300px;
    min-height: 200px;
  }
`;

export const Image = styled.img`
  width: auto;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding: 0.8rem 0;

  @media (max-width: 576px) {
    padding-top: 0;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
