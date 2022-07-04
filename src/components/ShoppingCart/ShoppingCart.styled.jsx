import styled from 'styled-components';

export const ShoppingCartWrapper = styled.div`
margin:0 auto;
max-width: 1200px;
font-weight: 400;
height: auto;
padding: 40px;
background-color: white;

.summary {
    width: 1fr;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 135px;
    padding: 48px 0 0;
    text-align:end;
}

.summary .total-row-container {
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 26px;
    line-height: 1;
    vertical-align: end;
}
.summary .total-row-container span {
    margin-right: 50px;
}

.summary .total-row-container .item-tag-price {
    margin-right: 50px;
}
.item-price {
    width: 75%;
    font-size: 28px;
}

.summary .actions {
    display: flex;
    justify-content: flex-end;
}

.summary .actions button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
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
`;

export const UiPannel = styled.div`
padding: 44px 0 48px;
margin: 40px;
border-top: 1px solid gainsboro;
`;

export const CartItem = styled.article`
width: 1200px;
display: grid;
grid-template-columns: 1fr 2fr repeat(2, 1fr) 0;
grid-column-gap: 10px;
grid-row-gap: 0px;


.item-image figure {
    width: 0.5fr;
    display: inline;
    margin-right: 16px;
    float: left;
}
 figure > img {
   width: 100%;
   display: inline;
}

.item-information {
    width: 2.5fr;
    margin-right: 0px;
    display: flex;
    padding: 20px;
}
.item-description .item-title {
    font-size: 20px;
    font-weight: 300;
    color: gray;
}
.item-description .subtitle{
    font-size: 14px;
    font-weight: 300;
    color: gray;
    margin-bottom:2px;
}

.quantity-selector  {
    width: 1fr;
    text-align: center;

}
.quantity-selector-container {
    display: inline-block;
    border: 1px solid gainsboro;
    border-radius: 4px;
    vertical-align: top;
    padding: 10px;

    button , input {
        border: none;
        font-size: 1rem;
        background-color: white;
        text-align: center;
        cursor: pointer;
    }
}

`;