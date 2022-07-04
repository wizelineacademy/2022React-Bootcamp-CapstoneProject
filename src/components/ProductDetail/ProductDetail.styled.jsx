import styled from 'styled-components';

export const SingleProduct = styled.div`
    display:flex;
    width: 90%;
    height: 90%;
    margin: 20px 20px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 10px;

    .row {
        width: 500px;
        height: 500px;
        padding: 0px;
        margin: 10px 20px;
        
        
    }
    .row > img {
        width: 500px;
        height: 300px;
        border-radius: 20px;
        position: relative;
    } 

`;

export const Details = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width: 500px;
text-align:flex-start;
backgrouns: #ebebeb;
border-radius: 5px;


.product-card > * {
    display: flex;
    padding: 2px 2px 2px;
}
.product-card > h1 {
    font-size: 20px;
    font-weight: 700;
    color: dimgray;
}
.product-card .sku-code  {
    color: gray;
    font-size: small;
}
.product-card .price {
    font-size: 32px;
    font-weight: 400;
}
.product-card .description {
    color: gray;
    justify-content: flex-start;
}
.product-card .tag-container span {
    color: slateblue;
} 
.product-card > p {
    align-items: flex-start;
}
.product-card .add-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    margin-top: 20px;
    background: gray;
    color: white;
    font-size: 16px;
    border:none;
    cursor: pointer;
    transition: .2s ease all;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover{
    box-shadow:0 0 40px 40px slateblue inset;

.product-card .tag-container > span{
        color: slateblue;
    }
}

`;
 export const SpecsContainer = styled.div`
 display:block;
 width: 90%;
 padding: 40px;

 h2 {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    padding: 10px;
 }
 table tr { 
     width: 100%; 
 }
 tr th {
     color: gray;
     padding-left: 24px;
     width: 10%;
     padding: 10px;
     background: #f5f5f5;
     border-radius: 5px;
 }
 tr td {
     color: mediumgray;
     width: 70%;
     padding: 10px;
     padding-left: 24px;
     background: white;
     border-radius:0 5px;
    
 }
 table td:nth-child(odd){
     background: red;
 }
 `;

 export const Swiper = styled.nav`
 width: 100%;
  height: 100%;
 `;