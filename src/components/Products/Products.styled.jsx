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
height: 225px;
width: 225px;
border-radius: 10px;
min-height: 300px;
padding: 10px;
position: relative;
overflow: hidden;
background-size: cover;
background-position: center center;

`;

export const CardText = styled.div`
display: flex;
flex-direction: column;


.prod-name {
   
    margin-bottom: 220px;
    max-height: 20px;
    font-size: small;
    
}
.price {
    font-weight: bold;
    position: sticky;
}
`;
