import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import ToggleHandler from './ToggleHandler';

createMockStore();

describe('<ToggleHandler>', () => {
  it('should render without crashing', () => {
    const container = (
      <ToggleHandler>
        <p>Hello</p>
      </ToggleHandler>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
