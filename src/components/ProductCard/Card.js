import styled from "styled-components";
import { colors, max_widths } from "../../styles/_variables";


const Card =  styled.div`
    border: 1px solid ${colors.Gray[300]} ;
    border-radius: 5px;
    box-shadow: 0px;
    box-shadow: 5px 5px 5px ${colors.Gray[200]};
    min-height: 320px;
    /* padding: 10px; */
    position: relative;

    img{
        border-radius: 5px;
        width: 100%;
        max-height: 200px;
        object-fit: cover;
    }

    .body{
        padding-left: 10px;
        padding-right: 10px;

        h5{
            color: ${ colors.Gray[500] };
        }

        .price{
            position: absolute;
            right: 10px;
            bottom: 10px;
            
        }
    }

    @media (max-width: ${ max_widths.sm }) {
        min-height: 450px;
        img{
            max-height: 350px;
        }
    }
`;

export default Card;