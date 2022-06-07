import styled from "styled-components";

export const HeroMainContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background: #E4E4EF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroMainWrapper = styled.div`
  height: auto;
  width: 100%;
`;

export const HeroContentContainer = styled.div`
  width:500px;
`

export const HeroImageSlider = styled.img`
  position: absolute;
  width: 100vw;
  height: 500px;
  position:relative;
  bottom:10;
  object-fit: cover;
  filter: blur(2px);
`
export const HeroMainTitle = styled.h1`
    z-index:2;
    position :absolute;
    top:27%;
    right:45%;
    font-size: 60px;
    color: #F07B7B;
    -webkit-text-stroke: 1px #000;
    font-family:Sans-serif;
`;