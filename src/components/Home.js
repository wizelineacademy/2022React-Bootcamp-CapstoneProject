import styled from 'styled-components';
import bannerData from '../mocks/featured-banners.json';
import categories from '../mocks/product-categories.json';
import items from '../mocks/feature-products.json';

import SliderBanner from './SliderBanner';
import Carousel from './Carousel';
import Item from './Item';
import ItemGrid from './ItemGrid';

const StyledHome = styled.div``;

const Home = () => {
    return(
        <StyledHome>
            <SliderBanner
                items={bannerData.results}
            />
            <Carousel
                items={categories.results}
            />
            <ItemGrid>
                {
                    items.results.map(item => 
                        <Item
                            key={item.id}
                            detail={item.data}
                        />
                    )
                }
            </ItemGrid>
        </StyledHome>
    );
};

export default Home;
