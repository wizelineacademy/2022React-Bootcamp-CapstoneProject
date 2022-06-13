import styled from 'styled-components';

export const ProductListContainer= styled.div`
display:flex;
min-height:100vh;


ol {
    display: flex;
    padding: 16px;
    color: white;
    transition: 0.2s linear;
    &:hover{
        color: pink;
        border-left: 5px solid pink;
        font-weight: 500;
        cursor: pointer;
    }
}

.is-active {
    color: pink;
    border-left: 5px solid pink;
}
`;
export const SidebarWrapper = styled.div`
flex: 1 1 0;
max-width: 300px;
min-width: 235px;
padding: 2rem 1rem;
background: gray;
`;

export const ProductCard = styled.div`
width: 80%;
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 1rem;
padding: 1rem;
margin: 0px 5px 0px 5px;

@media screen and (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);    
}
@media screen and (min-width: 1100px){
    grid-template-columns: repeat(4, 1fr);    
}
`;

export const PaginationList = styled.div`
margin-top: 350px;
padding: 10px;
display:flex;
width:100%;
height: 50px;
align-items; center;
justify-content: center;

a {
    width:40px;
    cursor: pointer;
}
`;
