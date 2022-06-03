import styled from 'styled-components';

export const CarouselContainer = styled.div`
    overflow: hidden;
`;

export const CarouselInner = styled.div`
    transform: translateX(-${props => (props.active * 100)}%);
    white-space: nowrap;
    transition: transform 0.3s;
`;

export const Item = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #f2f2f2;
    color: #fff;
    width: ${props => props.width || "100%"};
`;

export const Indicators = styled.div`
    display: flex;
    justify-content: center;
    > button {
        margin: 5px;
    }
    > button.active {
        background-color: green;
        color: #fff;
    }
`;

export const ButtonPaginator = styled.button``;