import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItemGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

const ItemGrid = ({loading, children}) => {
    const content = (!loading)
        ? 
            (
                <div>
                    <span>Loading...</span>
                </div>
            )
        : children;

    return (
        <StyledItemGrid>
            {content}
        </StyledItemGrid>
    );
};

ItemGrid.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default ItemGrid;