import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../../Mocks/testSetup';
import SpecificRecord from './index';

createMockStore();

describe('<SpecificRecord>', () => {
  it('should render without crashing', () => {
    const container = (
      <SpecificRecord>
        <p>Hello</p>
      </SpecificRecord>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
