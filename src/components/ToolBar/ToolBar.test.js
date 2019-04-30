import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import ToolBar from './ToolBar';

createMockStore();

describe('<ToolBar>', () => {
  it('should render without crashing', () => {
    const container = (
      <ToolBar>
        <p>Hello</p>
      </ToolBar>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
