import styled from "styled-components";
import { max_widths } from "../../styles/_variables";

const SliderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 130px;
    overflow: hidden;
    position: relative;
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    label{
        position: absolute;
        font-weight: bold;
        left: 0%;
        bottom: 1px;
        font-size: 15px;
        backdrop-filter: blur(10px);
        padding: 5px;
        width: 100%;
        text-align: center;
    }

    .info:hover{
        img{
            opacity: .8;
            transition: .3s ease;
        }
    }

    .info{
        position: relative;
    }

    @media (max-width: ${ max_widths.sm }) {
        label {
            font-size: 10px;
            display: block;

        };
    }

    

    

    


`;


export default SliderStyle;