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
max-width: 280px;
min-width: 235px;
padding: 2rem 1rem;
background: gray;
`;

export const ProductCard = styled.div`
width: 70%;  
margin: auto;  
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    gap: 2.5rem;

    .card img {
        width: 100%;
        max-height: 400px;
        object-fit: contain;
    }
`;
export const Loader = styled.div`
position: absolute;
left: 60%;
bottom: 60%;
z-index: 1000;
border: 16px solid pink;
border-top: 16px solid slateblue;
border-radius: 50%;
height: 10px;
width: 10px;
animation: spin 2s linear infinite;

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;