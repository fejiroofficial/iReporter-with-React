import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Login from './Login';

createMockStore();

describe('<Login>', () => {
  it('should render without crashing', () => {
    const container = (
      <Login>
        <p>Hello</p>
      </Login>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
