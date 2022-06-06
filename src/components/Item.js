import PropTypes from 'prop-types';
import styled from 'styled-components';

const width = 200;
const height = 200;
const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${width}px;
    height: ${height}px;
    margin: ${({theme}) => theme.coreSpace * 2}px;

    background-image: ${({image}) => `url(${image})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
const StyledItemTextContainer = styled.div`
    text-shadow: 2px 2px 12px white;
    width: 100%;
`;
const StyledItemTitleContainer = styled(StyledItemTextContainer)`
    text-align: center;
    text-decoration: underline;
`;
const StyledItemDetailContainer = styled(StyledItemTextContainer)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;
const StyledItemCategoryContainer = styled.span`
    font-size: 10px;
`;

const Item = ({detail}) => {
    const {
        name,
        category: {slug: category},
        mainimage: {url: image},
        price,
    } = detail;

    return (
        <StyledItem image={image}>
            <StyledItemTitleContainer>
                <span>
                    <b>
                        {name}
                    </b>
                </span>
            </StyledItemTitleContainer>
            <StyledItemDetailContainer>
                <StyledItemCategoryContainer>
                    {category}
                </StyledItemCategoryContainer>
                <span>
                    <b>
                        {'$ ' + price}
                    </b>
                </span>
            </StyledItemDetailContainer>
        </StyledItem>
    );
};

Item.propType = {
    detail: PropTypes.object.isRequired,
}

export default Item;