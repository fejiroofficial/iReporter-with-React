import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import HeroBanner from './HeroBanner';

createMockStore();

describe('<HeroBanner>', () => {
  it('should render without crashing', () => {
    const container = (
      <HeroBanner>
        <p>Hello</p>
      </HeroBanner>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
