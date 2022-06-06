
import { createGlobalStyle } from "styled-components/macro"


export default createGlobalStyle`
    ////////////miscell
    .backShadow::before{
      content:  "";
      height:   100%;
      width:    100%;
      background-color: black;
      opacity:  0.2;
      position: absolute;
      z-index:  1;
    }
    
    
    .spinner{
      margin: 50px auto;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: var(--mnr-colorBlack);
      background: -moz-linear-gradient(left, var(--mnr-colorBlack) 10%, white 42%);
      background: -webkit-linear-gradient(left, var(--mnr-colorBlack) 10%, white 42%);
      background: -o-linear-gradient(left, var(--mnr-colorBlack) 10%, white 42%);
      background: -ms-linear-gradient(left, var(--mnr-colorBlack) 10%, white 42%);
      background: linear-gradient(to right, var(--mnr-colorBlack) 10%, white 42%);
      position: relative;
      -webkit-animation: load3 0.8s infinite linear;
      animation: load3 0.8s infinite linear;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);

      .ok{
        background: var(--mnr-colorOk);
        background: -moz-linear-gradient(left, var(--mnr-colorOk) 10%, white 42%);
        background: -webkit-linear-gradient(left, var(--mnr-colorOk) 10%, white 42%);
        background: -o-linear-gradient(left, var(--mnr-colorOk) 10%, white 42%);
        background: -ms-linear-gradient(left, var(--mnr-colorOk) 10%, white 42%);
        background: linear-gradient(to right, var(--mnr-colorOk) 10%, white 42%);
      }
      :after {
        background: white;
        width: 92%;
        height: 92%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        -webkit-transition: all .8s;
        -moz-transition: all .8s;
        -o-transition: all .8s;
        -ms-transition: all .8s;
        transition: all .8s;
      }
    }
    
    
    @-webkit-keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }



    .sectionTitle{
      display:flex;
      flex-wrap:nowrap;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      width:100%;

      span{
        margin: 0 10px;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
      }

      :before,
      :after{
        display: block;
        content: " ";
        width: 100%;
        height: 2px;
        background-color: var(--mnr-colorBlack);
        // position: relative;
        // top: 12px;
        z-index: 0;
      }
    }


    

    ////////////swiper
    .swiper-slide {
      height: 100%;

      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
        background-color: var(--mnr-colorWhite);
        opacity:1;
    }

`