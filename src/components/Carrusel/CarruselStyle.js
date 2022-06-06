import styled from "styled-components";
import { max_widths } from "../../styles/_variables";


const CarruselStyle = styled.div`
    padding: 10px;

    .slider{
        position: relative;
        /* display: inline-block; */
        border-radius: 5px;
        transition: .3s ease;
    }
    .slider img{
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: .3s ease;
    }

    label{
        position: absolute;
        left: 0%;
        bottom: 1px;
        font-weight: bold;
        font-size: 20px;
        backdrop-filter: blur(20px);
        padding: 1em;
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .slider :first-child {
        opacity: 1;
    }

    @media (max-width: ${max_widths.sm}) {
        margin: 0;
        padding: 0;
        padding-top: 20px;
        .slider img{
            height: 30%;
            object-fit: cover;
        }
        label{
            font-size: 10px;
        }
    }

    @media (min-width: ${ max_widths.md}) {
        .slider img{
            height: 30%;
            object-fit: cover;
        }
    }
    @media (min-width: ${ max_widths.lg}) {
        .slider img{
            height: 30%;
            object-fit: cover;
        }
    }
    @media (min-width:  ${ max_widths.xl}) {
        .slider img{
            height: 500px;
            object-fit: cover;
        }
    }

    
`;


export default CarruselStyle;