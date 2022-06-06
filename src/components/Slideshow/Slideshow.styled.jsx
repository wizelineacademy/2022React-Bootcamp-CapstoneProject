import styled from 'styled-components';

export const MainContainer = styled.div`
    position: relative;
    
`;
export const SlideshowContainer = styled.div`
    display:flex;
    flex-wrap: nowrap;
    
`;

export const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }

`;
export const Controls = styled.div`
    position: absolute;
    top:0;
    z-index: 20;
    width:100%;
    height: 100%;
    pointer-events: none;
`;

export const BotonSlide = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position:absolute;
    transition: .3s ease all;
    &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: pink;
        }
    }

    path {
        filter: ${props => props.right ? 'drop-shadow(-2px 0px 0px pink )'
                                        :'drop-shadow(2px 0px 0px pink )'};
    }

    ${props => props.right ? 'right:0' : 'left:0'}
`;