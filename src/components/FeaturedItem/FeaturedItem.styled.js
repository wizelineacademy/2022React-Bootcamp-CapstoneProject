import styled from "styled-components";
import colors from "styles/colors";

export const AddToCardButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: bold;
  height: 48px;
  padding: 8px 16px;
`;

export const Card = styled.div`
  align-items: center;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const CategoryText = styled.p`
  font-weight: bold;
  margin: 8px 0 40px 0;
`;

export const Picture = styled.img`
  max-height: 290px;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 8px 0;
  overflow-wrap: break-word;
  text-align: center;
`;
