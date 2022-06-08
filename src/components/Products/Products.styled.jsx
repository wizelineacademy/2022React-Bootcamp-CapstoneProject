import styled from 'styled-components';

export const ProductsWrapper = styled.div`
width: 90%;
max-width: 1200px;
margin: auto;
padding: 40px 0;
display: grid;
grid-template-rows: 1fr;
gap: 10px;
font-weight: thin;
color: slateblue;

`;
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    gap: 1rem;
`;
export const Card = styled.div`
border-radius: 10px;
min-height: 300px;
font-weight: bold;
padding: 20px;
position: relative;
overflow: hidden;
background: pink;
background-size: cover;
background-position: center center;
`;

export const CardText = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-top: 25px;
`;
