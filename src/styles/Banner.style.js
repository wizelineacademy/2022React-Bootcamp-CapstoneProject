import styled from 'styled-components';
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle';
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle';
import * as colors from './Colors.style';

export const SlideImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconLeftArrow = styled(ArrowLeftCircle)`
  width: 25px;
  height: 25px;
  color: ${colors.colors.lightGray};
  margin-right: 0.3em;
  cursor: pointer;
  &:hover {
    color: ${colors.colors.hoverLightGray};
  }
`;

export const IconRightArrow = styled(ArrowRightCircle)`
  width: 25px;
  height: 25px;
  color: ${colors.colors.lightGray};
  margin-left: 0.3em;
  cursor: pointer;

  &:hover {
    color: ${colors.colors.hoverLightGray};
  }
`;

export const CenteredTextTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 27px;
  font-weight: 500;
  color: white;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const CenteredTextDesc = styled.p`
  position: absolute;
  font-size: 14px;
  font-weight: 300;
  width: 91%;
  text-align: center;
  @media (max-width: 480px) {
    width: 85%;
    font-size: 10px;
  }
`;
