import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Header from './Header';

createMockStore();

describe('<Header>', () => {
  it('should render without crashing', () => {
    const container = (
      <Header>
        <p>Hello</p>
      </Header>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
