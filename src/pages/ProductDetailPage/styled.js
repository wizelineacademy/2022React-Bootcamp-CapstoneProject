import styled from "@emotion/styled";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 8px;
  margin-bottom: 50px;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
`;
