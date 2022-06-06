import {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavigateBefore} from '@styled-icons/material-outlined/NavigateBefore';
import {NavigateNext} from '@styled-icons/material-outlined/NavigateNext';

const width = 300;
const height = 300;
const StyledCarousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    width: 100%;
    margin-top: 80px;
    margin-bottom: 80px;
`;
const StyledCarouselMaintem = styled.div`
    transform: scale(1.5);
    z-index: 1;
    position: relative;
`;
const StyledCarouselSecondaryItem = styled.div`
    z-index: 0;

    display: flex;
    align-items: center;
`;
const StyledCarouselSecondaryItemLeft = styled(StyledCarouselSecondaryItem)`
    cursor: w-resize;
`;
const StyledCarouselSecondaryItemRight = styled(StyledCarouselSecondaryItem)`
    cursor: e-resize;
`;
const StyledCarouselItemImg = styled.img`
    width: 100%;
    max-width: ${width}px;
    max-height: ${height}px;
    box-shadow: 0 0 12px black;
`;
const StyledCarouselItemTextContainer = styled.div`
    color: white;
`;
const StyledCarouselItemTitle = styled.span`
    text-shadow: 0px 0px 8px black;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 80%;
`;

const Carousel = ({items}) => {
    const [activeIdx, setActiveIdx] = useState(0);

    if (items.length <= 0) {
        return null;
    }

    const handlePrev = () => {
        const prevIdx = ((activeIdx - 1) < 0) ? length - 1 : (activeIdx - 1) % length;
        setActiveIdx(prevIdx);

    };

    const handleNext = () => {
        const nextIdx = (activeIdx + 1) % length;
        setActiveIdx(nextIdx);
    };

    const length = items.length;
    const activeItem = (
        <StyledCarouselMaintem>
            <StyledCarouselItemImg 
                src={items[activeIdx].data.main_image.url} 
                alt={items[activeIdx].data.name}
            />
            <StyledCarouselItemTextContainer>
                <StyledCarouselItemTitle>
                    {items[activeIdx].data.name}
                </StyledCarouselItemTitle>
            </StyledCarouselItemTextContainer>
        </StyledCarouselMaintem>
    );
    if (length === 1) {
        return activeItem;
    }
    
    const prevIdx = ((activeIdx - 1) < 0) ? length - 1 : (activeIdx - 1) % length;
    const nextIdx = (activeIdx + 1) % length;

    return (
        <StyledCarousel>
            <span>
                <NavigateBefore 
                    size={40}
                    onClick={handlePrev}
                />
            </span>
            <StyledCarouselSecondaryItemLeft
                onClick={handlePrev}
            >
                <StyledCarouselItemImg 
                    src={items[prevIdx].data.main_image.url} 
                    alt={items[prevIdx].data.name}
                />
            </StyledCarouselSecondaryItemLeft>
            {activeItem}
            <StyledCarouselSecondaryItemRight
                onClick={handleNext}
            >
                <StyledCarouselItemImg 
                    src={items[nextIdx].data.main_image.url} 
                    alt={items[nextIdx].data.name}
                />
            </StyledCarouselSecondaryItemRight>
            <span>
                <NavigateNext 
                    size={40}
                    onClick={handleNext}
                />
            </span>
        </StyledCarousel>
    );
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Carousel;