import styled from 'styled-components';

export const ProductsWrapper = styled.div`
width: 90%;
max-width: 1200px;
margin: auto;
padding: 20px;
display: grid;
gap: 10px;



`;
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16.75rem, 1fr));
    gap: 2.5rem;
    justify-items: center;
    .card img {
        width: 100%;
        max-height: 400px;
        object-fit: contain;
    }
`;
export const Card = styled.div`
width: 100%;
border-radius: 10px;
min-height: 400px;
`;

export const CardText = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
flex-direction: column;

.items div {
    display: grid;
    grid-template-rows: 50px 50px;
}

.prod-name {
    display: flex;
    max-height: 22px;
    font-size: 1rem;
    color: dimgray;
    font-weight: 400;
    justify-content: center;
}

.price {
    display: block;
    font-size: 26px;
    color: black;
    margin:0 40px;
}
.slug {
    margin-left: 40px;
    position: absolute;
    display: flex;
}
 .add-to-cart {
     max-width: 120px;
     max-height: 100px;
     display: flex;
     background-color: slateblue;
     border:0;
     color: white;
     border-radius: 10px;
     margin: 0 150px;
     padding: 2px;
     position: absolute;
     cursor: pointer;
     
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