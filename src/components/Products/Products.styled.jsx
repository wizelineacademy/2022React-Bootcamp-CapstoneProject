import styled from 'styled-components';

export const ProductsWrapper = styled.div`
width: 90%;
max-width: 1200px;
margin: auto;
padding: 40px 0;
display: grid;
grid-template-rows: 1fr;
gap: 10px;
color: slateblue;

`;
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    gap: 1rem;
`;
export const Card = styled.div`
height: 224px;
width: 224px;
border-radius: 10px;
min-height: 300px;
padding: 25px;
position: relative;
overflow: hidden;
background-size: cover;
background-position: center center;
`;

export const CardText = styled.div`
background: white;
flex-direction: column;
align-items: center;
margin-top: 190px;

.prod-name {
min-height: 40px;
    font-size: small;
}
.price {
    font-weight: bold;
}
`;
