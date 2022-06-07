import styled from "styled-components";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const SliderContainer = styled.section`
  height: 500px;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
  overflow: hidden;
  position: relative;
  
`;

export const SlideContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  widht: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  
 &::before {
    content: "";
    position: absolute;
    z-index: 2;
    widht: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  } 
  
`;

export const SliderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60vh;
  object-fit: cover;
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content:center;
  flex-direction: column;
  max-width: 1600px;
  widht: calc(100%-100px);
  color: #201e45;
  background-color: rgba(0,0,0,0.5);
  border-radius:10px;
  padding:15px;
  margin-left:5px;
  margin-right:5px;
  h1 {
      font-size: 1.4rem;
      font-weight: 400;
      text-transform: uppercase;
      text-shadow: 10px #fff;
      text-align:left;
      margin-bottom:0.8rem;
      color:#fff;
  }
`;

export const SlideDescription = styled.p`
  margin-bottom: 2rem;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  color:#fff;
  text-align:center;
`;
export const Button = styled.button`
  width: 150px;
  align-self:center;
  background-color:#E4E4EF;
  border:none;
  border-radius:5px;
  font-size:1.2rem;
`;

export const SliderButtons = styled.div`
  margin-bottom:20px;
  display: flex;
  z-index: 10;
`;

export const PreviousArrow = styled(FaArrowAltCircleLeft)`
  width: 40px;
  height: 40px;
  color: #000;
  cursor: pointer;
  background: #e4e4ef;
  border-radius: 50px;
  padding: 2px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: white;
    transform: scale(1.05);
  }
`;
export const FowrwardArrow = styled(FaArrowAltCircleRight)`
  width: 40px;
  height: 40px;
  color: #000;
  cursor: pointer;
  background: #e4e4ef;
  border-radius: 50px;
  padding: 2px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: white;
    transform: scale(1.05);
  }
`;
