import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin-bottom: 2%;
    margin-left: 20%;
    @media (max-width: 400px) {
        width: auto;
        margin-bottom: 2%;
        margin-left: 30%;
        grid-gap: 0;
    }
`;

export default Wrapper;
