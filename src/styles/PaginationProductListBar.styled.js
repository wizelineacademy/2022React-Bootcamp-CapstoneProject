import styled from 'styled-components';
import Pagination from 'react-bootstrap/Pagination';
const PaginationWrapper = styled(Pagination)`
    align-items: center;
    padding-bottom: 2rem;
    text-align: center;
    display: inline-flex;
    @media (max-width: 400px) {
        font-size: 2vh;
    }
`;

export default PaginationWrapper;
