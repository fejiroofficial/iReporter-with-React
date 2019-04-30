import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../../Mocks/testSetup';
import SideDrawer from './SideDrawer';

createMockStore();

describe('<NavigationItems>', () => {
  it('should render without crashing', () => {
    const container = (
      <SideDrawer>
        <p>Hello</p>
      </SideDrawer>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
