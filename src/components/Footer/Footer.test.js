import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import Footer from '.';

describe('Footer Component Test', () => {

  it('should render the Footer Component correctly', () => {
    const wrapper = mount(<Footer text='Lorem Ipsum' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should contain subcomponents', () => {
    const mockText = 'Lorem Ipsum';
    let wrapper = shallow(<Footer text='Lorem Ipsum' />);
    
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.text()).toEqual(mockText);
  });
});
