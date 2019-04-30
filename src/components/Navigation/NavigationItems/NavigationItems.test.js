import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../../Mocks/testSetup';
import NavigationItems from './NavigationItems';

createMockStore();

describe('<NavigationItems>', () => {
  it('should render without crashing', () => {
    const container = (
      <NavigationItems>
        <p>Hello</p>
      </NavigationItems>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
