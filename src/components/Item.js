import PropTypes from 'prop-types';
import styled from 'styled-components';

const width = 200;
const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${width}px;
    margin: ${({theme}) => theme.coreSpace * 2}px;
`;
const StyledItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledItemImg = styled.img`
    width: ${width - 20}px;
`;
const StyledItemPriceContainer = styled.span`
    font-weight: bolder;
`;
const StyledItemTitleContainer = styled.div`
    text-decoration: underline;
    width: 100;
    text-align: center;
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
        <StyledItem>
            <StyledItemImg
                src={image}
            />
            <StyledItemDescription>
                <StyledItemCategoryContainer>{category}</StyledItemCategoryContainer>
                <StyledItemTitleContainer>
                    <span>
                        {name}
                    </span>
                </StyledItemTitleContainer>
                <StyledItemPriceContainer>
                    {'$ ' + price}
                </StyledItemPriceContainer>
            </StyledItemDescription>
        </StyledItem>
    );
};

Item.propType = {
    detail: PropTypes.object.isRequired,
}

export default Item;