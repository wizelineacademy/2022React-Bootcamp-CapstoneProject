import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
    CarouselContainer,
    CarouselInner,
    Item,
    Indicators,
    ButtonPaginator,
} from "../styled-components/carousel.styled.component";

export const CarouselItem = ({ children, width }) => {
    return (
        <Item width={width}>
            {children}
        </Item>
    );
};

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
                <button
                    onClick={() => { updateIndex(activeIndex - 1) }}
                >
                    {`<`}
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <ButtonPaginator
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => updateIndex(index)}
                        >
                            {index + 1}
                        </ButtonPaginator>
                    );
                })}
                <button
                    onClick={() => { updateIndex(activeIndex + 1) }}
                >
                    {`>`}
                </button>
            </Indicators>
        </CarouselContainer>
    );
};

export default Carousel;