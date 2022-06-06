import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 40px 0;
    display: grid;
    grid-template-rows: 1fr;
    gap: 10px;
    @media (max-width: 768px) {
        grid-template-rows: none;
    }

.card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}
    .card {
        border-radius: 10px;
        min-height: 300px;
        font-weight: bold;
        padding: 20px;
        position: relative;
        overflow: hidden;
        background: pink;
        background-size: cover;
        background-position: center center;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    .card-text {

    }
    .banner {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 2px;   
    }
`;
