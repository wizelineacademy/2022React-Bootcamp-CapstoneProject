import styled from 'styled-components';
import * as colors from './Colors.style';

export const FooterContainer = styled.div`
  height: 70px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colors.footerBlue};
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const FooterTitle = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: white;
`;
