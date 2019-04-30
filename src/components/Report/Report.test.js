import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Report from './Report';

createMockStore();

describe('<Report>', () => {
  it('should render without crashing', () => {
    const container = (
      <Report>
        <p>Hello</p>
      </Report>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
