import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import Slogan from '.';

describe('Slogan Component Test', () => {

  it('should render the Slogan Component correctly', () => {
    const wrapper = mount(<Slogan text='Lorem Ipsum' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should contain subcomponents', () => {
    const mockText = 'Test slogan text';
    let wrapper = shallow(<Slogan text={mockText} />);
    
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.text()).toEqual(mockText);
  });
});
