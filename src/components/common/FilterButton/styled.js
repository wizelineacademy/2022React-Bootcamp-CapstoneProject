import styled from "@emotion/styled";

export const ActionsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 20px;
    font-weight: 400;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
