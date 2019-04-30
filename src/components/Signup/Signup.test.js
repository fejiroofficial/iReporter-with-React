import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Signup from './Signup';

createMockStore();

describe('<Signup>', () => {
  it('should render without crashing', () => {
    const container = (
      <Signup>
        <p>Hello</p>
      </Signup>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
