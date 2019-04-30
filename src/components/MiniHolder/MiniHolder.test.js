import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import MiniHolder from './MiniHolder';

createMockStore();

describe('<MiniHolder>', () => {
  it('should render without crashing', () => {
    const container = (
      <MiniHolder>
        <p>Hello</p>
      </MiniHolder>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
