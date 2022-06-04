import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Header from '.';
import { Name, Search, Image } from './Header.styled';

describe('Header Component Test', () => {

  it('should render the Header Component correctly', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain subcomponents', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find(Name).text()).toEqual('Furny');
    expect(wrapper.find(Image).exists()).toEqual(true);
    expect(wrapper.find(Search).exists()).toEqual(true);
  });
});
