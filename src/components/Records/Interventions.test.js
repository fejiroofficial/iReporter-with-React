import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import InterventionRecords from './Interventions';

createMockStore();

describe('<InterventionRecords>', () => {
  it('should render without crashing', () => {
    const container = (
      <InterventionRecords>
        <p>Hello</p>
      </InterventionRecords>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
