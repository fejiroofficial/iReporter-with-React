import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../../Mocks/testSetup';
import RecordCard from './RecordCard';

createMockStore();

describe('<RecordCard>', () => {
  it('should render without crashing', () => {
    const container = (
      <RecordCard>
        <p>Hello</p>
      </RecordCard>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
