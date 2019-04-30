import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import HomePage from './HomePage';

createMockStore();

describe('<HomePage>', () => {
  it('should render without crashing', () => {
    const container = (
      <HomePage>
        <p>Hello</p>
      </HomePage>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
