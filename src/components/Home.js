import PropTypes from 'prop-types';
import styled from 'styled-components';
import bannerData from '../mocks/featured-banners.json';
import categories from '../mocks/product-categories.json';
import items from '../mocks/feature-products.json';

import SliderBanner from './SliderBanner';
import Carousel from './Carousel';
import Item from './Item';
import ItemGrid from './ItemGrid';
import Button from './Button';

const StyledMoreProductsContainer = styled.div`
    width: 100%;
    margin-top: ${({theme}) => 2 * theme.coreSpace}px;
    margin-bottom: ${({theme}) => 2 * theme.coreSpace}px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Home = ({navigateProducts}) => {    
    return(
        <div>
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
            <StyledMoreProductsContainer>
                <Button
                    onClick={navigateProducts}
                >
                    View all products
                </Button>
            </StyledMoreProductsContainer>
        </div>
    );
};

Home.propTypes = {
    navigateProducts: PropTypes.func.isRequired,
}

export default Home;
