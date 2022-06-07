import styled from 'styled-components';
import * as colors from './Colors.style';

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 414px;
  @media (max-width: 480px) {
    height: 514px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

export const Text = styled.p`
  margin-top: 0;
  text-align: center;
  font-weight: 300;
  color: ${colors.colors.titleBlue};
`;

export const TextImage = styled.p`
  position: absolute;
  background-color: ${colors.colors.subBlue};
  padding: 5px;
  color: white;
  top: 8px;
  right: 16px;
`;

export const ContainerImage = styled.div`
  position: relative;
  text-align: center;
`;
