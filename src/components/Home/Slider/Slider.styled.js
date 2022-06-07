import styled from 'styled-components';

export const MainBox = styled.div`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
 `;

export const SlideshowBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Slide = styled.div`
  box-sizing: border-box;
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    height: fit-content;
  }

  @media screen and (max-width: 1150px){
    max-height: 400px;
  }

  @media screen and (max-width: 926px){
    max-height: 300px;
  }

  @media screen and (max-width: 700px){
    max-height: 220px;
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Button = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: all .3s ease;
  
  &:hover {
    background: hsla(189, 44%, 25%, 0.4);
    path {
      fill: #fff;
    }
  }

  path {
    filter: ${(props) => (props.right
    ? 'drop-shadow(-1px 0px 0px #fff)'
    : 'drop-shadow(1px 0px 0px #fff)')};
  }

  ${(props) => (props.right ? 'right: 0' : 'left: 0')}
`;
