import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Footer from './Footer';

createMockStore();

describe('<Footer>', () => {
  it('should render without crashing', () => {
    const container = (
      <Footer>
        <p>Hello</p>
      </Footer>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
