import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 6px 8px;
  border: none;
  background-color: var(--primary-green);
  transition: all ease-in-out 0.4s;
  border-radius: 2px;
  color: white;

  &:hover {
    background-color: #000;
  }

  &:active {
    transition-duration: 0.1s;
    background-color: #3a3a3a;
    transform: scale(0.95);
    color: white;
  }
`;
