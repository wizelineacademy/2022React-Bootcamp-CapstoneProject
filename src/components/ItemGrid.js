import styled from 'styled-components';

const StyledItemGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

const ItemGrid = ({children}) => {
    return (
        <StyledItemGrid>
            {children}
        </StyledItemGrid>
    );
};

export default ItemGrid;