import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSliceBar = styled.div`
    width: ${({theme}) => theme.coreSpace * 30}px;
    height: 100%;

    padding: ${({theme}) => theme.coreSpace * 2}px;
    box-sizing: border-box;

    border-right: 1px solid ${({theme}) => theme.colorPrimaryContainer};
    background-color: ${({theme}) => theme.colorSecondaryContainer};
`;
const StyledSlideBarList = styled.ul`
    margin: 0;
    padding-left: 0;
`;
const StyledSlideBarItem = styled.li`
    display: block;
    margin-top: ${({theme}) => theme.coreSpace}px;
    margin-bottom: ${({theme}) => theme.coreSpace}px;

    &:not(:last-child) {
        margin-bottom: ${({theme}) => theme.coreSpace * 2}px;
    }

    font-weight: ${({selected}) => selected ? 'bolder': 'normal'}
`;
const StyledSliderBarItemA = styled.a`
    color: black;

`;
const StyledSlideBarItemText = styled.span`
    text-decoration: underline;
`;

const SliceBar = ({items, activeItems, toggleItemState, loading}) => {
    const handleItemClick = (event) => {
        event.preventDefault();
        let rootElement = event.target;
        while (rootElement.tagName.toLowerCase() !== 'li') {
            rootElement = rootElement.parentElement;
        }

        toggleItemState(rootElement.dataset.id);
    };

    const content = (!loading)
        ?
            (
                <div>
                    <span>
                        Loading...
                    </span>
                </div>
            )
        :
            items.map(item => 
                <StyledSlideBarItem
                    key={item.id}
                    data-id={item.id}
                    selected={activeItems.has(item.id)}
                    onClick={handleItemClick}
                >
                    <StyledSliderBarItemA 
                        href="#"
                    >
                        <StyledSlideBarItemText>
                            {item.data.name}
                        </StyledSlideBarItemText>
                    </StyledSliderBarItemA>
                </StyledSlideBarItem>
            );

    return(
        <StyledSliceBar>
            <StyledSlideBarList>
                {content}
            </StyledSlideBarList>
        </StyledSliceBar>
    );
};

SliceBar.propTypes = {
    items: PropTypes.array.isRequired,
    activeItems: PropTypes.object.isRequired, // Set
    toggleItemState: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default SliceBar;