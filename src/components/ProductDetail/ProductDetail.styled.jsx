import styled from 'styled-components';

export const SingleProduct = styled.div`
    display:flex;
    justify-content: center;
    width: 90%;
    height: 90%;
    margin: 20px 60px;
    position:fixed;
    
    .row {
        display: flex;
        width: 550px;
        height: 100%;
        padding: 0px;
        margin: 10px 20px;
        border-radius: 20px;
        
    }
    .row > img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    } 
`;

export const Details = styled.div`
display:flex;
position:relative;
flex-direction: column;
width: 35%;
height: 90vh;
text-align:flex-start;
justify-content: center;
margin-top: 10px;
@media (max-width: 300px){
    justify-content: flex-start;
}



.product-card > * {
    display: flex;
    padding: 10px 2px 2px;
}
.product-card > h1{
    font-size: 20px;
    font-weight: 700;
}
.product-card .price {
    font-size: 32px;
    font-weight: 400;
}
.product-card .description {
    color: gray;
}
.product-card .slug{
    color: slateblue;
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
}
@media (mxin-width: 360px){
    flex-direction: column;
`;