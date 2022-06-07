import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Home from '.';
import Slider from './Slider';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

describe('Home Component Test', () => {

  it('should render the Home Component correctly', () => {
    const wrapper = mount(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should contain subcomponents', () => {
    const wrapper = mount(<Home />);
    
    expect(wrapper.find(Slider).exists()).toEqual(true);
    expect(wrapper.find(ProductCategories).exists()).toEqual(true);
    expect(wrapper.find(FeaturedProducts).exists()).toEqual(true);
  });
});
