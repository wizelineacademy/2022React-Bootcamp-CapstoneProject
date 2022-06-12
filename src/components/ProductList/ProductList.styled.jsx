import styled from 'styled-components';

export const ProductListContainer= styled.div`
display:flex;
min-height:100vh;

ol {
    display: block;
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

`;
export const SidebarWrapper = styled.div`
flex: 1 1 0;
max-width: 300px;
padding: 2rem 1rem;
background: gray;
`;

export const ProductCard = styled.div`
width: 80%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    padding: 1rem;
    margin: 0px 10px 0px 10px;
`;
