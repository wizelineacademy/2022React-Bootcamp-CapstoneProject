import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// components
import {
    CarouselContainer,
    CarouselInner,
    Item,
    Indicators,
    DotItem,
    BoxDot,
    Dot,
    ButtonCtrl,
} from "../styled-components";

export const CarouselItem = ({ children, width, image }) => {
    return (
        <Item width={width} image={image}>
            {children}
        </Item>
    );
};

CarouselItem.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    image: PropTypes.string,
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            setActiveIndex(React.Children.count(children) - 1);
        } else if (newIndex >= React.Children.count(children)) {
            setActiveIndex(0);
        } else {
            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <CarouselContainer
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <CarouselInner active={activeIndex}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </CarouselInner>
            <Indicators>
                <ButtonCtrl
                    onClick={() => { updateIndex(activeIndex - 1) }}
                >
                    <MdKeyboardArrowLeft />
                </ButtonCtrl>
                {React.Children.map(children, (child, index) => {
                    return (
                        <DotItem className={`${index === activeIndex ? "active" : ""}`}>
                            <BoxDot>
                                <Dot
                                    onClick={() => updateIndex(index)}
                                />
                            </BoxDot>
                        </DotItem>
                    );
                })}
                <ButtonCtrl
                    onClick={() => { updateIndex(activeIndex + 1) }}
                >
                    <MdKeyboardArrowRight />
                </ButtonCtrl>
            </Indicators>
        </CarouselContainer>
    );
};

Carousel.propTypes = {
    children: PropTypes.node,
}

export default Carousel;