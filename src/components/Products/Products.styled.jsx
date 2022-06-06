import styled from 'styled-components';

export const ProductsContainer = styled.div`
width: 90%;
max-width: 1200px;
margin: auto;
padding: 40px 0;
display: grid;
grid-template-rows: 1fr;
gap: 10px;
font-weight: thin;
color: slateblue;

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    gap: 1rem;
    
}
.card {
    border-radius: 10px;
    min-height: 300px;
    font-weight: thin;
    padding: 20px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    

.card-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 25px;
}    
`;