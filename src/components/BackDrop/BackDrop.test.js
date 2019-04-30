import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import BackDrop from './BackDrop';

createMockStore();

describe('<BackDrop>', () => {
  it('should render without crashing', () => {
    const container = (
      <BackDrop>
        <p>Hello</p>
      </BackDrop>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});