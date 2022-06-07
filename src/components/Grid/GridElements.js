import styled from "styled-components";

export const GridContainer = styled.section`
    height:100%;
    background:#E4E4EF;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const GridWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:auto;
    width:70%;
    height:100%;
    justify-content:center;
    
`

export const Gridcontent = styled.h1`
    font-size:50px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:10px;
`

export const ProductContainer = styled.div`
  width:200px;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  font-family:sans-serif;
  border: solid 1px rgba(0,0,0,0.1);
  padding:15px;
  background:#fff;
`
export const ProductName = styled.p`
    font-size:18px;
`

export const ProductImage = styled.img`
    width:60px;
    height:60px;
`
export const ProductCategory = styled.p`
    font-size:18px;
    color:rgba(0,0,0,0.4);
    text-transform:uppercase;
`

export const ProductPrice = styled.p`
    font-size:18px;
`
    