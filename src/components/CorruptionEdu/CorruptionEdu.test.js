import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import CorruptionEdu from './CorruptionEdu';

createMockStore();

describe('<CorruptionEdu>', () => {
  it('should render without crashing', () => {
    const container = (
      <CorruptionEdu>
        <p>Hello</p>
      </CorruptionEdu>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});