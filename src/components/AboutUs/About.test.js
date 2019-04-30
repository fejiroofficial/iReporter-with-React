import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import AboutUs from './AboutUs';

createMockStore();

describe('<AboutUs>', () => {
  it('should render without crashing', () => {
    const container = (
      <AboutUs>
        <p>Hello</p>
      </AboutUs>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});