import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 70px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3b6f8d;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const WrapperFooter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const TitleFooter = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: white;
`;
