import styled from 'styled-components';

export const ProductsWrapper = styled.div`
width: 90%;
max-width: 1200px;
margin: auto;
padding: 40px;
display: grid;
gap: 10px;
`;
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    gap: 2.5rem;
    justify-content: center;
`;
export const Card = styled.div`
height: 40px;
width: 100%;
border-radius: 10px;
min-height: 400px;
padding: 10px;
overflow: hidden;
justify-content: center;
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`;

export const CardText = styled.div`
flex-wrap: wrap;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;


.prod-name {
    display: block;
    margin-bottom: 300px;
    max-height: 5px;
    font-size: 1rem;
    color: dimgray;
    font-weight: 600;
    padding-bottom: 5px;
}

.price {
    display: block;
    font-size: 26px;
    color: black;
}
 .add-to-cart {
     max-width: 95px;
     max-height: 30px;
     display: inline;
     background-color: slateblue;
     border:0;
     color: white;
     border-radius: 10px;
     margin-left: 192px;
     position: absolute;
     padding: 2px;
     
 }
`;
 export const Button = styled.button`
 display: grid;
 align-items: center;
 justify-content: center;
 max-width: 260px;
 min-width: 192px;
 height: 60px;
 background: gray;
 color: white;
 font-size: 16px;
 border:none;
 cursor: pointer;
 transition: .2s ease all;
 border-radius: 5px;
 margin-bottom: 10px;
 
  .btn-container a {
    text-decoration: none;
    color: slateblue;
    font-size: 20px;
  }
:hover{
    box-shadow:0 0 40px 40px slateblue inset;
}
`;